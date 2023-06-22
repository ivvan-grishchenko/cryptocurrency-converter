import { Select } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

import { DropdownProps } from './Dropdown.types';

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  setValue,
  data,
  otherValue,
  getRate,
}) => {
  const matchesDesktop = useMediaQuery('(min-width: 768px)', true, {
    getInitialValueInEffect: false,
  });

  return (
    <Select
      w={matchesDesktop ? 240 : 300}
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
};
