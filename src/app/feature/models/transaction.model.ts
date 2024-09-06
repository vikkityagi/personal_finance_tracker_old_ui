// transaction.model.ts
export interface Transaction {
    id: number;            // Unique identifier for the transaction
    userId: number;        // Identifier of the user who made the transaction
    amount: number;        // Transaction amount
    date: Date;            // Date of the transaction
    category: string;      // Category of the transaction (e.g., Food, Transport)
    description?: string;  // Optional description of the transaction
    type: 'income' | 'expense';  // Type of transaction
  }
  