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
