import axios from 'axios';

const SWAPZONE_API_KEY = process.env.NEXT_PUBLIC_SWAPZONE_API_KEY;

export const cryptoClient = axios.create({
  baseURL: 'https://api.swapzone.io/v1/exchange',
  headers: { 'x-api-key': SWAPZONE_API_KEY },
});
