import {
  ActionIcon,
  Center,
  createStyles,
  Group,
  Loader,
  Paper,
  Stack,
  Text,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconArrowsExchange } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { cryptoClient } from '../../utils/Crypto';
import { AmountInput } from '../Inputs/AmountInput';
import { Dropdown } from '../Inputs/Dropdown';
import { error, success } from '../Notifications/Notifications';
import { CardProps, GetRateResponse } from './Card.types';

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor: theme.colors.gray[2],
  },
}));

export const Card: React.FC<CardProps> = ({ currencies }) => {
  const { classes } = useStyles();

  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number | ''>('');
  const [from, setFrom] = useState<string | null>(null);
  const [to, setTo] = useState<string | null>(null);
  const [converted, setConverted] = useState<string>('Begin conversion');

  const getRate = useDebouncedCallback(
    async (): Promise<void> => {
      setLoading(true);
      try {
        const { data } = await cryptoClient.get<GetRateResponse>('/get-rate', {
          params: { from, to, amount, rateAmount: 'all' },
        });
        if (data.error) {
          notifications.show({
            title: 'Error occurred',
            message: data.message,
            ...error,
          });
          setConverted('Cannot convert values');
        } else {
          setConverted(`${amount} ${from} = ${data.amountTo} ${to}`);
          notifications.show({
            title: 'Hooray!',
            message: 'Converted successfully',
            ...success,
          });
        }
      } catch (err) {
        notifications.show({
          title: '...Oops',
          message: 'Something went wrong',
          ...error,
        });
      } finally {
        setLoading(false);
      }
    },
    500,
    { maxWait: 1000 },
  );

  const changeValues = (): void => {
    const previousFrom = from;
    const previousTo = to;
    setFrom(previousTo);
    setTo(previousFrom);
    getRate();
  };

  return (
    <Paper
      shadow="sm"
      radius="md"
      p="md"
      withBorder
      w={600}
      h={300}
      className={classes.card}
    >
      <Stack spacing="xl" align="stretch" justify="center" h="100%" w="100%">
        <Text
          variant="gradient"
          gradient={{ from: 'red', to: 'pink', deg: 45 }}
          ta="center"
          fz="xl"
          fw={700}
        >
          Convert what you want
        </Text>
        <AmountInput
          amount={amount}
          setAmount={setAmount}
          getRate={getRate}
          from={from}
          to={to}
        />
        <Group position="center" spacing="xl">
          <Dropdown
            value={from}
            setValue={setFrom}
            data={currencies}
            otherValue={to}
            getRate={getRate}
          />
          <ActionIcon
            color="blue"
            size="lg"
            variant="filled"
            mt="auto"
            onClick={changeValues}
          >
            <IconArrowsExchange size="1.625rem" />
          </ActionIcon>
          <Dropdown
            value={to}
            setValue={setTo}
            data={currencies}
            otherValue={from}
            getRate={getRate}
          />
        </Group>
        <Center>
          {loading ? (
            <Loader variant="dots" size="lg" />
          ) : (
            <Text
              ta="center"
              fz="xl"
              fw={700}
              variant="gradient"
              gradient={{ from: 'red', to: 'pink', deg: 45 }}
            >
              {converted}
            </Text>
          )}
        </Center>
      </Stack>
    </Paper>
  );
};
