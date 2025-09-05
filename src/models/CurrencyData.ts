export interface Currency {
    symbol: string,
    name: string,
    symbol_native: string,
    decimal_digits: number,
    rounding: number,
    code: string,
    name_plural: string;
}
export interface CurrenciesResponse {
  data: Record<string, Currency>;
}

export interface Month {
  total: number;
  used: number;
  remaining: number;
}

export interface Quotas {
  month: Month;
}

export interface StatusResponse {
  quotas: Quotas;
}


export interface LatestResponse {
  data: Record<string, number>;
}

export interface HistoricalResponse {
  data: Record<string, Record<string, number>>;
  meta: {
    last_updated: string;     
    base_currency: string;    
  };
}