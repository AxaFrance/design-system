export default [
  {
    rules: {
      "array-callback-return": ["error", { allowImplicit: true }],
      "block-scoped-var": "error",
      "consistent-return": "error",
      "default-case": ["error", { commentPattern: "^no default$" }],
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-notation": ["error", { allowKeywords: true }],
      eqeqeq: ["error", "always", { null: "ignore" }],
      "grouped-accessor-pairs": "error",
      "guard-for-in": "error",
      "max-classes-per-file": ["error", 1],
      "no-alert": "warn",
      "no-caller": "error",
      "no-constructor-return": "error",
      "no-else-return": ["error", { allowElseIf: false }],
      "no-empty-function": [
        "error",
        { allow: ["arrowFunctions", "functions", "methods"] },
      ],
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-implied-eval": "error",
      "no-iterator": "error",
      "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-multi-str": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-octal-escape": "error",
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: [
            "acc",
            "accumulator",
            "e",
            "ctx",
            "context",
            "req",
            "request",
            "res",
            "response",
            "$scope",
            "staticContext",
          ],
        },
      ],
      "no-proto": "error",
      "no-restricted-properties": [
        "error",
        {
          object: "arguments",
          property: "callee",
          message: "arguments.callee is deprecated",
        },
        {
          object: "global",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "self",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "window",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "global",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          object: "self",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          object: "window",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          property: "__defineGetter__",
          message: "Please use Object.defineProperty instead.",
        },
        {
          property: "__defineSetter__",
          message: "Please use Object.defineProperty instead.",
        },
        {
          object: "Math",
          property: "pow",
          message: "Use the exponentiation operator (**) instead.",
        },
      ],
      "no-return-assign": ["error", "always"],
      "no-return-await": "error",
      "no-script-url": "error",
      "no-self-assign": ["error", { props: true }],
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
      "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
      radix: "error",
      "vars-on-top": "error",
      yoda: "error",
      "no-await-in-loop": "error",
      "no-cond-assign": ["error", "always"],
      "no-console": "warn",
      "no-constant-condition": "warn",
      "no-inner-declarations": "error",
      "no-promise-executor-return": "error",
      "no-template-curly-in-string": "error",
      "no-unreachable-loop": ["error", { ignore: [] }],
      "no-unsafe-optional-chaining": [
        "error",
        { disallowArithmeticOperators: true },
      ],
      "valid-typeof": ["error", { requireStringLiterals: true }],
      "global-require": "error",
      "no-buffer-constructor": "error",
      "no-new-require": "error",
      "no-path-concat": "error",
      camelcase: ["error", { properties: "never", ignoreDestructuring: false }],
      "lines-between-class-members": [
        "error",
        "always",
        { exceptAfterSingleLine: false },
      ],
      "lines-around-directive": [
        "error",
        { before: "always", after: "always" },
      ],
      "new-cap": [
        "error",
        {
          newIsCap: true,
          newIsCapExceptions: [],
          capIsNew: false,
          capIsNewExceptions: [
            "Immutable.Map",
            "Immutable.Set",
            "Immutable.List",
          ],
        },
      ],
      "no-bitwise": "error",
      "no-continue": "error",
      "no-lonely-if": "error",
      "no-multi-assign": ["error"],
      "no-nested-ternary": "error",
      "no-new-object": "error",
      "no-underscore-dangle": [
        "error",
        {
          allow: ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"],
          allowAfterThis: false,
          allowAfterSuper: false,
          enforceInMethodNames: true,
        },
      ],
      "no-unneeded-ternary": ["error", { defaultAssignment: false }],
      "one-var": ["error", "never"],
      "operator-assignment": ["error", "always"],
      "prefer-exponentiation-operator": "error",
      "prefer-object-spread": "error",
      "spaced-comment": [
        "error",
        "always",
        {
          line: { exceptions: ["-", "+"], markers: ["=", "!", "/"] },
          block: {
            exceptions: ["-", "+"],
            markers: ["=", "!", ":", "::"],
            balanced: true,
          },
        },
      ],
      "unicode-bom": ["error", "never"],
      "no-label-var": "error",
      "no-restricted-globals": [
        "error",
        {
          name: "isFinite",
          message:
            "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
        },
        {
          name: "isNaN",
          message:
            "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
        },
        "addEventListener",
        "blur",
        "close",
        "closed",
        "confirm",
        "defaultStatus",
        "defaultstatus",
        "event",
        "external",
        "find",
        "focus",
        "frameElement",
        "frames",
        "history",
        "innerHeight",
        "innerWidth",
        "length",
        "location",
        "locationbar",
        "menubar",
        "moveBy",
        "moveTo",
        "name",
        "onblur",
        "onerror",
        "onfocus",
        "onload",
        "onresize",
        "onunload",
        "open",
        "opener",
        "opera",
        "outerHeight",
        "outerWidth",
        "pageXOffset",
        "pageYOffset",
        "parent",
        "print",
        "removeEventListener",
        "resizeBy",
        "resizeTo",
        "screen",
        "screenLeft",
        "screenTop",
        "screenX",
        "screenY",
        "scroll",
        "scrollbars",
        "scrollBy",
        "scrollTo",
        "scrollX",
        "scrollY",
        "self",
        "status",
        "statusbar",
        "stop",
        "toolbar",
        "top",
      ],
      "no-undef-init": "error",
      "no-restricted-exports": [
        "error",
        { restrictedNamedExports: ["default", "then"] },
      ],
      "no-useless-computed-key": "error",
      "no-useless-rename": [
        "error",
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      "object-shorthand": [
        "error",
        "always",
        { ignoreConstructors: false, avoidQuotes: true },
      ],
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: true, object: false },
        },
        { enforceForRenamedProperties: false },
      ],
      "prefer-numeric-literals": "error",
      "prefer-template": "error",
      "symbol-description": "error",
      "import/no-named-as-default": "error",
      "import/no-named-as-default-member": "error",
      "import/no-mutable-exports": "error",
      "import/no-amd": "error",
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        { groups: [["builtin", "external", "internal"]] },
      ],
      "import/newline-after-import": "error",
      "import/no-absolute-path": "error",
      "import/no-dynamic-require": "error",
      "import/no-webpack-loader-syntax": "error",
      "import/no-named-default": "error",
      "import/no-self-import": "error",
      "import/no-cycle": ["error", { maxDepth: "∞" }],
      "import/no-useless-path-segments": ["error", { commonjs: true }],
      "import/no-import-module-exports": ["error", { exceptions: [] }],
      "import/no-relative-packages": "error",
      strict: ["error", "never"],
      "class-methods-use-this": [
        "error",
        {
          exceptMethods: [
            "render",
            "getInitialState",
            "getDefaultProps",
            "getChildContext",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "componentDidUpdate",
            "componentWillUnmount",
            "componentDidCatch",
            "getSnapshotBeforeUpdate",
          ],
        },
      ],
      "react/forbid-prop-types": [
        "error",
        {
          forbid: ["any", "array", "object"],
          checkContextTypes: true,
          checkChildContextTypes: true,
        },
      ],
      "react/jsx-boolean-value": ["error", "never", { always: [] }],
      "react/jsx-no-bind": [
        "error",
        {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
          ignoreDOMComponents: true,
        },
      ],
      "react/jsx-pascal-case": ["error", { allowAllCaps: true, ignore: [] }],
      "react/no-danger": "warn",
      "react/no-did-update-set-state": "error",
      "react/no-will-update-set-state": "error",
      "react/prefer-es6-class": ["error", "always"],
      "react/prefer-stateless-function": [
        "error",
        { ignorePureComponents: true },
      ],
      "react/self-closing-comp": "error",
      "react/sort-comp": [
        "error",
        {
          order: [
            "static-variables",
            "static-methods",
            "instance-variables",
            "lifecycle",
            "/^handle.+$/",
            "/^on.+$/",
            "getters",
            "setters",
            "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
            "instance-methods",
            "everything-else",
            "rendering",
          ],
          groups: {
            lifecycle: [
              "displayName",
              "propTypes",
              "contextTypes",
              "childContextTypes",
              "mixins",
              "statics",
              "defaultProps",
              "constructor",
              "getDefaultProps",
              "getInitialState",
              "state",
              "getChildContext",
              "getDerivedStateFromProps",
              "componentWillMount",
              "UNSAFE_componentWillMount",
              "componentDidMount",
              "componentWillReceiveProps",
              "UNSAFE_componentWillReceiveProps",
              "shouldComponentUpdate",
              "componentWillUpdate",
              "UNSAFE_componentWillUpdate",
              "getSnapshotBeforeUpdate",
              "componentDidUpdate",
              "componentDidCatch",
              "componentWillUnmount",
            ],
            rendering: ["/^render.+$/", "render"],
          },
        },
      ],
      "react/no-unused-prop-types": [
        "error",
        { customValidators: [], skipShapeProps: true },
      ],
      "react/style-prop-object": "error",
      "react/no-array-index-key": "error",
      "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
      "react/void-dom-elements-no-children": "error",
      "react/default-props-match-prop-types": [
        "error",
        { allowRequiredDefaults: false },
      ],
      "react/no-redundant-should-component-update": "error",
      "react/no-unused-state": "error",
      "react/no-typos": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/destructuring-assignment": ["error", "always"],
      "react/no-access-state-in-setstate": "error",
      "react/button-has-type": [
        "error",
        { button: true, submit: true, reset: false },
      ],
      "react/no-this-in-sfc": "error",
      "react/jsx-fragments": ["error", "syntax"],
      "react/state-in-constructor": ["error", "always"],
      "react/static-property-placement": ["error", "property assignment"],
      "react/jsx-no-script-url": ["error", [{ name: "Link", props: ["to"] }]],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-no-constructed-context-values": "error",
      "react/no-unstable-nested-components": "error",
      "react/no-namespace": "error",
      "react/prefer-exact-props": "error",
      "react/no-arrow-function-lifecycle": "error",
      "react/no-invalid-html-attribute": "error",
      "react/no-unused-class-component-methods": "error",
      "jsx-a11y/lang": "error",
    },
  },
];
