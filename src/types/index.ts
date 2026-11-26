export type Language = 'en' | 'te' | 'hi';

export type LocalizedText = Record<Language, string>;

export interface ProductPackSize {
  id: string;
  label: LocalizedText;
  /** Demo price in Indian Rupees (INR). Replace with confirmed farm price. */
  demoPriceInr: number;
}

export interface DairyProduct {
  id: string;
  image: string;
  name: LocalizedText;
  categoryTag: LocalizedText;
  shortDescription: LocalizedText;
  freshnessNote: LocalizedText;
  packSizes: ProductPackSize[];
}

export type DeliveryMode = 'home-delivery' | 'farm-pickup';

export interface DeliveryOptionItem {
  id: 'home-delivery' | 'farm-pickup' | 'daily-subscription' | 'bulk-orders';
  title: LocalizedText;
  summary: LocalizedText;
  howItWorks: LocalizedText;
  highlightTag: LocalizedText;
}

export interface OrderCartItem {
  productId: string;
  packSizeId: string;
  quantity: number;
}
