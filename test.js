var test = require('tape')
var parse = require('./')

var oldKey = "0Ao5u1U6KYND7dFVkcnJRNUtHWUNKamxoRGg4ZzNiT3c"
var oldUrl = "https://docs.google.com/spreadsheet/ccc?key=0Ao5u1U6KYND7dFVkcnJRNUtHWUNKamxoRGg4ZzNiT3c#gid=0"
var newKey = "1jHY4wO4b0kuX4rVnJgZGwfQUzoxado52k1hzxdUY-AM"
var newUrl = "https://docs.google.com/spreadsheets/d/1jHY4wO4b0kuX4rVnJgZGwfQUzoxado52k1hzxdUY-AM/edit?pli=1#gid=0"
var newUrlApps = "https://docs.google.com/a/github.com/spreadsheets/d/1jHY4wO4b0kuX4rVnJgZGwfQUzoxado52k1hzxdUY-AM/edit#gid=0"


test('returns key if key is not url', function(t) {
  t.equal(parse(oldKey).key, oldKey)
  t.equal(parse(newKey).key, newKey)
  t.equal(parse(oldKey).isNewSheets, undefined)
  t.equal(parse(newKey).isNewSheets, undefined)
  t.end()
})

test('returns key for old url', function(t) {
  var parsed = parse(oldUrl)
  t.equal(parsed.key, oldKey)
  t.notOk(parsed.isNewSheets)
  t.end()
})

test('returns key for new url', function(t) {
  var parsed = parse(newUrl)
  console.log(parsed)
  t.equal(parsed.key, newKey)
  t.ok(parsed.isNewSheets)
  t.end()
})

test('returns key for new google apps url', function(t) {
  var parsed = parse(newUrlApps)
  t.equal(parsed.key, newKey)
  t.ok(parsed.isNewSheets)
  t.end()
})
