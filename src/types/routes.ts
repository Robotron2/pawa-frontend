export type Route = {
  id: string;
  path: string[];
  hops: number;
  inputAmount: string;
  expectedOutput: string;
  totalFees: string;
  efficiencyScore: number;
};
