import CurrencyConverter from "./views/CurrencyConverter";
import CurrencyExchangeRates from "./views/CurrencyExchangeRates";

const paths = [
    {
        path: '/',
        component: CurrencyConverter
    },
    {
        path: '/checkexchangerates',
        component: CurrencyExchangeRates
    }
]

export default paths;