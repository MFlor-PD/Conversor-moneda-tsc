import axios from "axios";
import 'dotenv/config';

const API_KEY = process.env.FREECURRENCY_API_KEY;

if (!API_KEY) {
  throw new Error("No API key found in environment variables (FREECURRENCY_API_KEY)");
}

export const api = axios.create({
  baseURL: "https://api.freecurrencyapi.com/v1",
  params: {
    apikey: API_KEY
  }
});
