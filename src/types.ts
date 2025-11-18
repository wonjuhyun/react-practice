export interface Trend {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    likes: number;
    views: number;
    tags: string[];
    icon?: string;
    color?: string;
    image?: string;
  }
  