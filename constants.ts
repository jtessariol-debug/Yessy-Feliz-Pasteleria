import { Product, Feature, Testimonial } from './types';

export const PHONE_NUMBER = "18299821162";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Lasaña Artesanal",
    category: "Salado",
    description: "Capas perfectas de pasta fresca, salsa boloñesa casera y mezcla de quesos premium.",
    image: "https://i.postimg.cc/ydB33TBg/lasagna.jpg"
  },
  {
    id: 2,
    name: "Pasteles Temáticos",
    category: "Dulce",
    description: "Diseños personalizados para celebraciones únicas. Acabados en fondant o buttercream.",
    image: "https://i.postimg.cc/CLW1f4H6/Spiderman-cake.jpg"
  },
  {
    id: 3,
    name: "Doble Chocolate",
    category: "Dulce",
    description: "Bizcocho húmedo de cacao intenso con ganache de chocolate semiamargo.",
    image: "https://i.postimg.cc/VN4m49nk/bizcocho-chocolate.jpg"
  },
  {
    id: 4,
    name: "Picaderas Gourmet",
    category: "Salado",
    description: "Selección gourmet de bocadillos salados ideales para eventos corporativos.",
    image: "https://i.postimg.cc/VNsdYkFr/picaderas.jpg"
  },
  {
    id: 5,
    name: "Flan Napolitano",
    category: "Postre",
    description: "Textura sedosa y caramelo dorado. La receta tradicional perfeccionada.",
    image: "https://i.postimg.cc/Qt28W8cq/flan.jpg"
  },
  {
    id: 6,
    name: "Budín Clásico",
    category: "Postre",
    description: "Con pasas maceradas y un toque de canela. Ideal para el café de la tarde.",
    image: "https://i.postimg.cc/QxbDjkYp/budin.jpg"
  }
];

export const FEATURES: Feature[] = [
  { id: 1, icon: "🌿", title: "100% Fresco", description: "Sin pre-mezclas. Horneamos bajo pedido." },
  { id: 2, icon: "🎨", title: "Diseño de Autor", description: "Cada pastel es una pieza de arte única." },
  { id: 3, icon: "✨", title: "Ingredientes Premium", description: "Mantequilla real y chocolate de alta gama." },
  { id: 4, icon: "📦", title: "Packaging de Lujo", description: "Tu pedido llega impecable, listo para regalar." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "La lasaña de Yessy es otro nivel, y el pastel de cumpleaños de mi hijo quedó idéntico a la foto que envié. ¡El sabor es increíble!",
    author: "María Rodríguez",
    role: "Cliente Frecuente"
  }
];