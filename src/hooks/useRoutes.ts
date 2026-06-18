"use client";

import { useState } from 'react';
import { Route } from '@/types/routes';

export const useRoutes = () => {
  const [bestRoute] = useState<Route>({
    id: 'route_1',
    path: ['XLM', 'AQUA Pool', 'USDC'],
    hops: 2,
    inputAmount: '1000.00',
    expectedOutput: '95.50',
    totalFees: '4.50',
    efficiencyScore: 95.5,
  });
  
  return { bestRoute, isLoading: false };
};
