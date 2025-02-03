export interface Transaction {
  id: string;
  name: string;
  date: string;
  status: 'Completed' | 'Pending';
  code: string;
  icon?: string;
}

export interface SalesData {
  name: string;
  income: number;
  expenses: number;
}

export interface ProductStats {
  label: string;
  count: number;
}
