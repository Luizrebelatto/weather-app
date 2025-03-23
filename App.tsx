import React from 'react';
import { ThemeProvider } from "styled-components/native"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from 'screens/Home';
import theme from 'general/theme';

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