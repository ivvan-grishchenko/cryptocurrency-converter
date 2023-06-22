import { Select } from '@mantine/core';
import React from 'react';

import { DropdownProps } from './Dropdown.types';

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  setValue,
  data,
  otherValue,
  getRate,
}) => (
  <Select
    w={240}
    label="Select currency"
    placeholder="Select"
    data={data}
    searchable
    value={value}
    onChange={value => {
      setValue(value);
      if (value !== null && otherValue !== null) getRate();
    }}
    transitionProps={{
      transition: 'pop-top-left',
      duration: 80,
      timingFunction: 'ease',
    }}
  />
);
