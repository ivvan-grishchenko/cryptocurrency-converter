import {
  createStyles,
  Group,
  Header as MantineHeader,
  Title,
} from '@mantine/core';
import React, { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const useStyles = createStyles(theme => ({
  header: {
    borderBottom: `1px solid ${theme.colors.indigo[8]}`,
    backgroundColor: theme.colors.dark[7],
  },
  title: {
    cursor: 'default',
    color: 'inherit',
    backgroundImage: theme.fn.linearGradient(45, 'red', 'pink'),
  },
}));

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <main>
      <MantineHeader height={60} fixed className={classes.header} withBorder>
        <Group position="center">
          <Title variant="gradient" order={1} className={classes.title}>
            Cryptocurrency Converter
          </Title>
        </Group>
      </MantineHeader>
      {children}
    </main>
  );
};
