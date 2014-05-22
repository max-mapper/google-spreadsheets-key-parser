# google-spreadsheets-key-parser

parse a google spreadsheets url and get the spreadsheet key

```
var parser = require('google-spreadsheets-key-parser')

var parsed = parser('https://docs.google.com/spreadsheets/d/1jHY4wO4b0kuX4rVnJgZGwfQUzoxado52k1hzxdUY-AM/edit?pli=1#gid=0')

// returns: 
// { key: '1jHY4wO4b0kuX4rVnJgZGwfQUzoxado52k1hzxdUY-AM',
//  isNewSheets: true }
```

works for new and old sheets. `isNewSheets` will be true if it's new sheets, false if it's old sheets

## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global google-spreadsheets-key-parser
```

#### Usage

```bash
$ google-spreadsheets-key-parser --help

Usage
  $ google-spreadsheets-key-parser <url>
```
