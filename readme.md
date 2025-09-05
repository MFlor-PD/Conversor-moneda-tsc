https://app.freecurrencyapi.com/dashboard

Request Method: GET
Request URL: https://api.freecurrencyapi.com/v1/currencies

GET http://localhost:3000/api/currencies/eur


Request Parameters
Parameter	Type	Mandatory	Description
*apikey	   string	️  yes      	Your API Key
*currencies	string	 A list of comma seperated currency codes which you want to get (EUR,USD,CAD).By default all available currencieswill be shown

Sample Response

{
    "data": {
        "AED": {
            "symbol": "AED",
            "name": "United Arab Emirates Dirham",
            "symbol_native": "د.إ",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "AED",
            "name_plural": "UAE dirhams"
        },
        "AFN": {
            "symbol": "Af",
            "name": "Afghan Afghani",
            "symbol_native": "؋",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "AFN",
            "name_plural": "Afghan Afghanis"
        },
        "...": {}
    }
}


Request Method: GET
Request URL: https://api.freecurrencyapi.com/v1/status

Request Parameters
Parameter	Type	Mandatory	Description
apikey	string	️	   yes       Your API Key

{
    "quotas": {
        "month": {
            "total": 300,
            "used": 71,
            "remaining": 229
        }
    }
}


Request Method: GET
Request URL: https://api.freecurrencyapi.com/v1/latest


Parameter	     Type	Mandatory	Description
#apikey	        string	️	Your API Key
#base_currency	string		The base currency to which all results are behaving relative to. By default all values are based on USD
#currencies	    string		A list of comma-separated currency codes which you want to get (EUR,USD,CAD)By default all available currencies will be shown

Sample Response

{
    "data": {
        "AED": 3.67306,
        "AFN": 91.80254,
        "ALL": 108.22904,
        "AMD": 480.41659,
        "...": "150+ more currencies"
    }
}

Request Method: GET
Request URL: https://api.freecurrencyapi.com/v1/historical
GET http://localhost:3000/api/historical?date=YYYY-MM-DD&base_currency="CHOOSECURRENCYejUDS"&currencies=""CURRENCY, CURRENCY""



Parameter	     Type	 Mandatory	 Description
*apikey	        string	️	          Your API Key
*date	        string	️	          Start date to retrieve historical rates from (format: 2021-12-31)
*base_currency	string		         The base currency to which all results are behaving relative to. By default all values are based on USD
*currencies	    string               A list of comma seperated currency codes which you want to get (EUR,USD,CAD) By default all available currencies will be shown

{
    "data": {
        "2022-01-01": {
            "AED": 3.67306,
            "AFN": 91.80254,
            "ALL": 108.22904,
            "AMD": 480.41659,
            "...": "150+ more currencies"
        }
    }
}