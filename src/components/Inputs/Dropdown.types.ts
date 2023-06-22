import { Dispatch, SetStateAction } from 'react';
import { DebouncedState } from 'use-debounce';

import { CryptoCurrency } from '../../pages';

export interface DropdownProps {
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
  data: CryptoCurrency[];
  otherValue: string | null;
  getRate: DebouncedState<() => Promise<void>>;
}
