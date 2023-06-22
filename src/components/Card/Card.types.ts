import { CryptoCurrency } from '../../pages';

export interface CardProps {
  currencies: CryptoCurrency[];
}

export interface GetRateResponse {
  amountTo: number;
  error?: boolean;
  message?: string;
}
