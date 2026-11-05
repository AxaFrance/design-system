const { defineConfig } = require('vitest/config')
module.exports = defineConfig({ test: { include: ['test/test.js', 'test/*.test.js'] } })
