import {
  createStyles,
  Group,
  Header as MantineHeader,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const useStyles = createStyles(theme => ({
  header: {
    borderBottom: `1px solid ${theme.colors.indigo[8]}`,
    backgroundColor: theme.colors.dark[7],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    cursor: 'default',
    color: 'inherit',
    backgroundImage: theme.fn.linearGradient(45, 'red', 'pink'),
  },
}));

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const { classes } = useStyles();
  const matchesDesktop = useMediaQuery('(min-width: 768px)', true, {
    getInitialValueInEffect: false,
  });

  return (
    <main>
      <MantineHeader height={60} fixed className={classes.header} withBorder>
        <Group position="center">
          <Title
            variant="gradient"
            order={matchesDesktop ? 1 : 3}
            className={classes.title}
          >
            Cryptocurrency Converter
          </Title>
        </Group>
      </MantineHeader>
      {children}
    </main>
  );
};
