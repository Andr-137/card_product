// Типы для пропсов компонента
export type Currency = "RUB" | "USD" | "EUR" | string;

export interface ProductCardProps {
	title: string;
	origin: string;
	price?: number;
	currency?: Currency;
	imageUrl: string;
}
