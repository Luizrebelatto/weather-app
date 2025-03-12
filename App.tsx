import React from 'react';
import { ThemeProvider } from "styled-components/native"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from './src/screens/Home';
import theme from './src/general/theme';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
    </QueryClientProvider>
  );
}