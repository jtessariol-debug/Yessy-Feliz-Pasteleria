export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}