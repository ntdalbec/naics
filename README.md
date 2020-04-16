# naics
naics is a library for dealing with North American Industry Classification System codes.

## Installation
```bash
npm install naics
```

## Usage
```javascript
const naics = require("naics");

const code = naics.Industry.from("51121");

console.log(code.title) // Software Publishers
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)