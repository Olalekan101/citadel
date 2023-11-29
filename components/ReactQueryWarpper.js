"use client"
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import React from 'react'

const queryClient = new QueryClient();

export default function ReactQueryWarpper({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
