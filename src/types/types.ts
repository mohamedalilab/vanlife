export type VanType = "rugged" | "luxury" | "simple";

export interface Van {
  id: string;
  name: string;
  price: number;
  type: VanType;
  description: string;
  imageUrl: string;
  hostId: string;
}

export interface Review {
  id: string;
  vanId: string;
  hostId: string;
  reviewerName: string;
  rating: number;
  reviewText: string;
  date: string;
}

export interface MonthlyIncome {
  month: string;
  monthAbbr: string;
  income: number;
  isRecent?: boolean; // For darker orange color on recent months
}

export interface Transaction {
  id: string;
  hostId: string;
  amount: number;
  date: string;
}