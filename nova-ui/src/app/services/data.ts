export interface Product {
  id: number; name: string; category: string; price: number; oldPrice?: number; rating: number; reviews: number;
  emoji: string; color: string; badge?: string; description: string; features: string[];
}

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Aero Headphones', category: 'Audio', price: 129, oldPrice: 179, rating: 4.8, reviews: 412, emoji: '🎧', color: '#6c5ce7', badge: 'Best Seller', description: 'Wireless over-ear headphones with active noise cancellation and 40 hours of battery life.', features: ['Active noise cancellation', '40 hour battery', 'Bluetooth 5.3', 'Foldable design'] },
  { id: 2, name: 'Pulse Smartwatch', category: 'Wearables', price: 199, rating: 4.6, reviews: 289, emoji: '⌚', color: '#00cec9', badge: 'New', description: 'A sleek smartwatch that tracks your heart rate, sleep and workouts all day long.', features: ['AMOLED display', 'Heart-rate monitor', 'GPS built in', 'Water resistant'] },
  { id: 3, name: 'Vision Camera', category: 'Photo', price: 549, oldPrice: 649, rating: 4.9, reviews: 156, emoji: '📷', color: '#fd79a8', badge: 'Sale', description: 'Mirrorless 24MP camera with 4K video, perfect for creators and travellers.', features: ['24MP sensor', '4K video', 'Fast autofocus', 'Wi-Fi sharing'] },
  { id: 4, name: 'Echo Speaker', category: 'Audio', price: 89, rating: 4.4, reviews: 198, emoji: '🔊', color: '#fdcb6e', description: 'Portable 360° speaker with deep bass and a waterproof body.', features: ['360° sound', 'IPX7 waterproof', '20 hour battery', 'Stereo pairing'] },
  { id: 5, name: 'Nimbus Laptop', category: 'Computers', price: 1299, oldPrice: 1499, rating: 4.7, reviews: 340, emoji: '💻', color: '#0984e3', badge: 'Sale', description: 'Ultra-thin 14" laptop with all-day battery and a stunning display.', features: ['14" 2K display', '16GB RAM / 512GB SSD', '12 hour battery', 'Backlit keyboard'] },
  { id: 6, name: 'Flow Keyboard', category: 'Computers', price: 99, rating: 4.5, reviews: 221, emoji: '⌨️', color: '#e17055', description: 'Mechanical wireless keyboard with hot-swappable switches and RGB lighting.', features: ['Hot-swappable', 'RGB backlight', 'Bluetooth + USB-C', 'Aluminium body'] },
  { id: 7, name: 'Orbit Drone', category: 'Photo', price: 699, rating: 4.3, reviews: 97, emoji: '🛸', color: '#55efc4', badge: 'New', description: 'Foldable drone with 4K camera, obstacle avoidance and 30 minute flight time.', features: ['4K camera', '30 min flight', 'Obstacle avoidance', 'Foldable'] },
  { id: 8, name: 'Fit Band', category: 'Wearables', price: 59, rating: 4.2, reviews: 530, emoji: '💪', color: '#a29bfe', description: 'Lightweight fitness band with step, sleep and calorie tracking.', features: ['14 day battery', 'Sleep tracking', '20+ sport modes', 'Water resistant'] },
  { id: 9, name: 'Lumen Lamp', category: 'Home', price: 45, rating: 4.6, reviews: 143, emoji: '💡', color: '#ffeaa7', description: 'Smart desk lamp with adjustable colour temperature and touch controls.', features: ['Touch control', '5 colour modes', 'USB charging port', 'Eye-care light'] },
  { id: 10, name: 'Zen Air Purifier', category: 'Home', price: 159, oldPrice: 199, rating: 4.5, reviews: 88, emoji: '🌿', color: '#00b894', badge: 'Sale', description: 'Quiet HEPA air purifier that keeps your room fresh and allergen free.', features: ['HEPA filter', 'Ultra quiet', 'Auto mode', 'Covers 40 m²'] },
  { id: 11, name: 'Snap Mouse', category: 'Computers', price: 39, rating: 4.4, reviews: 376, emoji: '🖱️', color: '#74b9ff', description: 'Ergonomic wireless mouse with silent clicks and precise tracking.', features: ['Silent click', '2.4G + Bluetooth', '4000 DPI', '6 month battery'] },
  { id: 12, name: 'Beam Projector', category: 'Home', price: 349, rating: 4.3, reviews: 64, emoji: '📽️', color: '#fab1a0', badge: 'New', description: 'Mini full-HD projector for movie nights, gaming and presentations.', features: ['Full HD', 'Built-in speaker', 'Wi-Fi casting', '120" screen'] },
];

export interface Order { id: string; customer: string; date: string; total: number; status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled'; items: number; }
export interface Customer { name: string; email: string; city: string; orders: number; spent: number; joined: string; }

export const ORDERS: Order[] = [
  { id: '#1042', customer: 'Sara Khan', date: '2026-10-28', total: 129, status: 'Delivered', items: 1 },
  { id: '#1041', customer: 'Ali Raza', date: '2026-10-27', total: 549, status: 'Shipped', items: 1 },
  { id: '#1040', customer: 'Hina Malik', date: '2026-10-27', total: 89, status: 'Pending', items: 1 },
  { id: '#1039', customer: 'Usman Tariq', date: '2026-10-26', total: 1299, status: 'Delivered', items: 1 },
  { id: '#1038', customer: 'Ayesha Noor', date: '2026-10-25', total: 59, status: 'Cancelled', items: 1 },
  { id: '#1037', customer: 'Bilal Ahmed', date: '2026-10-24', total: 258, status: 'Shipped', items: 2 },
  { id: '#1036', customer: 'Zara Sheikh', date: '2026-10-23', total: 699, status: 'Delivered', items: 1 },
  { id: '#1035', customer: 'Hamza Ali', date: '2026-10-22', total: 144, status: 'Pending', items: 3 },
];

export const CUSTOMERS: Customer[] = [
  { name: 'Sara Khan', email: 'sara@example.com', city: 'Lahore', orders: 6, spent: 842, joined: '2025-02-11' },
  { name: 'Ali Raza', email: 'ali@example.com', city: 'Karachi', orders: 4, spent: 1190, joined: '2025-04-02' },
  { name: 'Hina Malik', email: 'hina@example.com', city: 'Islamabad', orders: 3, spent: 267, joined: '2025-06-19' },
  { name: 'Usman Tariq', email: 'usman@example.com', city: 'Faisalabad', orders: 8, spent: 2310, joined: '2024-11-30' },
  { name: 'Ayesha Noor', email: 'ayesha@example.com', city: 'Multan', orders: 2, spent: 118, joined: '2026-01-08' },
  { name: 'Bilal Ahmed', email: 'bilal@example.com', city: 'Lahore', orders: 5, spent: 731, joined: '2025-08-23' },
];
