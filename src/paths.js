import CurrencyConverter from "./views/CurrencyConverter";
import CurrentExchangeRates from "./views/CurrentExchangeRates";

const paths = [
    {
        path: '/',
        component: CurrencyConverter
    },
    {
        path: '/check-exchange-rates',
        component: CurrentExchangeRates
    }
]

export default paths;