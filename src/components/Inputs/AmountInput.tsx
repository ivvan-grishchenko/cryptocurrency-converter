import { NumberInput } from '@mantine/core';
import React from 'react';

import { AmountInputProps } from './AmountInput.types';

export const AmountInput: React.FC<AmountInputProps> = ({
  amount,
  setAmount,
  getRate,
  from,
  to,
}) => (
  <NumberInput
    placeholder="0"
    label="Value"
    min={0}
    precision={1}
    step={0.1}
    radius="md"
    size="md"
    value={amount}
    stepHoldDelay={500}
    stepHoldInterval={t => Math.max(1000 / t ** 2, 25)}
    onChange={value => {
      setAmount(value);
      if (from !== null && to !== null) getRate();
    }}
  />
);
