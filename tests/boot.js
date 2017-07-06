// require all test files (files that ends with .spec.js)
const srcContext = require.context('../src', true, /\.spec\.js$/)
srcContext.keys().forEach(srcContext)

const testContext = require.context('.', true, /\.spec\.js$/)
testContext.keys().forEach(testContext)
