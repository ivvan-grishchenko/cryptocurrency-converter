import { Dispatch, SetStateAction } from 'react';
import { DebouncedState } from 'use-debounce';

export interface AmountInputProps {
  amount: number | '';
  setAmount: Dispatch<SetStateAction<number | ''>>;
  getRate: DebouncedState<() => Promise<void>>;
  from: string | null;
  to: string | null;
}
