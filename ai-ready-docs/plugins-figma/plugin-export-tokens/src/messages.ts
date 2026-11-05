// Messages exchanged between the plugin (src/code.ts) and its interface
// (src/ui/main.ts). Both sides import these types: a message type renamed on
// one side only no longer compiles.

// What the plugin found in the file, by category. Each list holds texts for the
// designer, already written.
export interface Report {
  collections: number
  variables: number
  exported: number
  textStyles: number
  effectStyles: number
  conflicts: string[]
  missingAliases: string[]
  missingModeAliases: string[]
  inferredTypes: string[]
  sanitizedNames: string[]
  externalAliases: string[]
  excluded: string[]
  noDescription: string[]
  naming: string[]
  incompleteStyles: string[]
}

// What prevents the submission, or null when nothing does.
export type SubmitBlocker = { reason: 'file' | 'empty' | 'path' } | { reason: 'excluded'; n: number }

export interface RepoUrls {
  urlReference: string | null
  urlTags: string | null
  urlPulls: string | null
  urlVersion: string | null
  firstVersion: string | null
  urlEdition: string | null
  urlCreation: string | null
}

export type ReferenceSource = 'repo' | 'version' | 'file'

// Where an error is shown in the interface.
export type ErrorContext = 'verification' | 'comparison' | 'submit' | 'download'

// A sub-field of a composite value that differs between two versions.
export interface FieldDiff {
  field: string
  before: string
  after: string
}

// Context (mode of a modifier context) carried by a token that does not belong to a set.
export interface DiffMeta {
  modifier?: string
  context?: string
}

export interface DiffEntry extends DiffMeta {
  path: string
  value: string
}

export interface ModifiedEntry extends DiffMeta {
  path: string
  before: string
  after: string
  typeChange: boolean
  fields?: FieldDiff[]
}

export type DiffLevel = 'minor' | 'patch' | null

export interface DiffResult {
  added: DiffEntry[]
  modified: ModifiedEntry[]
  removed: DiffEntry[]
  deprecated: DiffEntry[]
  level: DiffLevel
  nextVersion?: string | null
  referenceDate?: string
}

// ------------------------------------------------------- interface to plugin

export type UiToPluginMessage =
  | { type: 'ready' }
  | { type: 'resize'; height: number }
  | { type: 'resize-manual'; width: number; height: number }
  | { type: 'auto-size' }
  | { type: 'submit'; repoReference: string | null; redesign: boolean }
  | { type: 'open'; url: string }
  | {
      type: 'compare'
      reference: string
      source: ReferenceSource
      fileName?: string
      fileDate?: number
      version?: string
    }
  | { type: 'download' }

// ------------------------------------------------------- plugin to interface

export interface DiffResultMessage extends DiffResult {
  type: 'diff'
  error?: undefined
  source: ReferenceSource
  fileName?: string
  fileDate?: number
  version?: string
}

export type PluginToUiMessage =
  | { type: 'context'; file: string; variables: number; styles: number; collections: number; repoUrls: RepoUrls }
  | { type: 'verification'; report: Report; blocker: SubmitBlocker | null; changed: boolean }
  | { type: 'error'; context: ErrorContext; message: string }
  | { type: 'diff'; error: string }
  | DiffResultMessage
  | { type: 'submit-ready'; json: string; message: string; url: string }
  | { type: 'file'; json: string; file: string }
  | { type: 'recompute-height' }
