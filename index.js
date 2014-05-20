var url = require('url')

module.exports = parse

function parse(str) {
  var isNew, key
  if (str.indexOf('http') === -1) return {key: str}
  var parsed = url.parse(str, true)
  if (parsed.query.key) {
    isNew = false
    key = parsed.query.key
  } else {
    var parts = parsed.pathname.split('/')
    var keyIdx = parts.indexOf('d') + 1
    key = parts[keyIdx]
    isNew = true
  }
  var result = {key: key}
  if (isNew) result.isNewSheets = true
  return result
}