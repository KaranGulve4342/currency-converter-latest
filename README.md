# currency-converter-latest 🌍💱

Currency Converter Latest is a Node.js package that simplifies currency conversion tasks by providing access to the latest exchange rates. With support for a wide range of currencies, it offers developers a straightforward solution for integrating currency conversion functionalities into their applications.

## Features 🚀

- Access the latest exchange rates from various sources.
- Convert between different currencies effortlessly.
- Support for a comprehensive list of currencies.
- Lightweight and easy-to-use API for seamless integration.
- Reliable and accurate currency conversion calculations.

## Installation 💻

You can install currency-converter-latest via npm:

```bash
npm install currency-converter-latest
```

## Usage 🤖

javascript 

```
import { convertCurrency } from "currency-converter-latest";

// Convert 5 USD to INR
convertCurrency('USD', 'INR', 5)
  .then(result => {
    console.log(`5 USD is approximately ${result} INR`);
  })
  .catch(error => {
    console.error('Conversion failed:', error);
  });
```

This includes the example code you provided, demonstrating how to use the `convertCurrency` function to convert 5 USD to INR.

