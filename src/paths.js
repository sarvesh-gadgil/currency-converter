import CurrencyConverter from "./views/CurrencyConverter";
import CurrencyExchangeRates from "./views/CurrencyExchangeRates";

const paths = [
    {
        path: '/',
        component: CurrencyConverter
    },
    {
        path: '/check-exchange-rates',
        component: CurrencyExchangeRates
    }
]

export default paths;