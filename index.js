import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_dt8DATfoeKOXtBPD2JAiy7Tp0cqNedSRiz77fizs');


export async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier = res.data[toCurrency];
    // console.log(multiplier);
    return  (units * multiplier).toFixed(10);
}


