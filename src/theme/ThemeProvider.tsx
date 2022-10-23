import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { ReactNode } from 'react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: () => ({
      body: {
        bg: 'gray.900',
      },
    }),
  },
});

const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default ThemeProvider;
