export type UserType = 'public' | 'buyer';

export interface Material {
  id: string;
  category: string;
  quantity: number;
  location: string;
  price: number;
  description: string;
  userId: string;
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  imageUrl: string;
}