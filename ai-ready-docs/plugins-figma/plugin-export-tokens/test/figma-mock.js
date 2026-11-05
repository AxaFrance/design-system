// Builds a mock Figma plugin: loads code.js in a vm context, on data
// chosen by the caller, and exposes what is needed to talk to it and read what it
// produces. CommonJS module, no dependency. Used by the tests (test/plugin.test.js).
'use strict'

const fs = require('fs')
const vm = require('vm')
const path = require('path')

const CODE_PATH = path.join(__dirname, '..', 'code.js')

// collections can be an array (as returned by the Figma API, or a JSON
// snapshot) or an object { key: collection } (easier to read by hand in a test):
// both forms are accepted, normalized to an array.
const toCollectionsArray = (collections) => (Array.isArray(collections) ? collections : Object.values(collections))

// Creates a mock plugin: loads code.js in its own vm context, on the given
// collections, variables and styles. Each call produces an independent
// plugin, with its own execution of code.js (hence its own REPO,
// its own internal state): two mock plugins never share anything.
const createMockPlugin = ({
  fileName = 'Document simulé',
  fileKey,
  collections = [],
  locals = [],
  remotes = [],
  // Deleted variables: Figma still returns them by their id, outside the local variables.
  deletedVariables = [],
  textStyles = [],
  effectStyles = [],
  clientStorage = {}
} = {}) => {
  const collectionsList = toCollectionsArray(collections)
  const collectionById = new Map(collectionsList.map((c) => [c.id, c]))
  const variableById = new Map([...locals, ...remotes, ...deletedVariables].map((v) => [v.id, v]))

  const sentMessages = []
  // Bridge to a real UI (integration test), connected by connectUi.
  // Without a bridge, figma.ui.postMessage just records the message.
  let bridge = null
  const resizes = []
  const openedUrls = []

  // Storage on the user's machine (figma.clientStorage), in memory, for the window
  // size kept by the user. Cloned so as never to modify the object
  // received from the caller.
  const localClientStorage = JSON.parse(JSON.stringify(clientStorage))

  // fileKey is only readable for a plugin in development: absent, it
  // stays undefined, as in Figma.
  const figma = {
    fileKey,
    root: { name: fileName },
    showUI() {},
    openExternal: (url) => openedUrls.push(url),
    ui: { onmessage: null, postMessage: (m) => { sentMessages.push(m); if (bridge) bridge(m) }, resize: (l, h) => resizes.push([l, h]) },
    clientStorage: {
      getAsync: async (key) => localClientStorage[key],
      setAsync: async (key, value) => { localClientStorage[key] = value },
      deleteAsync: async (key) => { delete localClientStorage[key] }
    },
    variables: {
      getLocalVariableCollectionsAsync: async () => collectionsList.filter((c) => !c.remote),
      getLocalVariablesAsync: async () => locals,
      getVariableByIdAsync: async (id) => variableById.get(id) || null,
      getVariableCollectionByIdAsync: async (id) => collectionById.get(id) || null
    },
    getLocalTextStylesAsync: async () => textStyles,
    getLocalEffectStylesAsync: async () => effectStyles
  }

  const context = vm.createContext({ figma, __html__: '', console })
  vm.runInContext(fs.readFileSync(CODE_PATH, 'utf8'), context)

  return {
    // Sends a message to the plugin, as figma.ui.onmessage would receive it from the UI.
    send: (msg) => figma.ui.onmessage(msg),
    // Connects the plugin to a UI: each figma.ui.postMessage(m) also calls
    // fn(m), in addition to being recorded in messages.
    connectUi: (fn) => { bridge = fn },
    // Messages received by the UI (figma.ui.postMessage), in order.
    messages: sentMessages,
    lastMessage: () => sentMessages[sentMessages.length - 1],
    // Sizes requested through figma.ui.resize, in order.
    resizes,
    // URLs opened through figma.openExternal, in order.
    openedUrls,
    // Storage on the user's machine: live object, to be read directly.
    clientStorage: localClientStorage,
    // Internal functions and state of the plugin, exposed by code.js for the test.
    __test: context.__test
  }
}

module.exports = { createMockPlugin }
