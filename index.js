import Freecurrencyapi from '@everapi/freecurrencyapi-js'

// Initialize the Freecurrencyapi object with the provided API key
const freecurrencyapi = new Freecurrencyapi('fca_live_dt8DATfoeKOXtBPD2JAiy7Tp0cqNedSRiz77fizs');

/**
* Convert a specified amount of money from one currency to another
* @param {string} fromCurrency - The currency to convert from
* @param {string} toCurrency - The currency to convert to
* @param {number} units - The amount of money to convert
* @returns {string} The converted amount, rounded to 10 decimal places
*/
export async function convertCurrency(fromCurrency, toCurrency, units) {
   // Get the latest exchange rates from Freecurrencyapi
   const res = await freecurrencyapi.latest({
       base_currency: fromCurrency, // Set the base currency to the 'from' currency
       currencies: toCurrency // Set the currencies to convert to the 'to' currency
   });

   // Get the exchange rate multiplier for the 'to' currency
   const multiplier = res.data[toCurrency];

   // Multiply the number of units by the multiplier to convert the currency
   return (units * multiplier).toFixed(10);
}