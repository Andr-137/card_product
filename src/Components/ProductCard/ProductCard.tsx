import React from "react";
import "./ProductCard.css";
import * as Types from "./TypeProductCard.ts"

const ProductCard: React.FC<Types.ProductCardProps> = ({
	title,
	origin,
	price = 34900,
	currency = "RUB",
	imageUrl,
}) => {
	// Функция для форматирования цены
	const formatPrice = (): string => {
		const amount = price / 100; // Конвертация копеек/центов в основные единицы

		// Настройки форматирования для разных валют
		const currencySettings: Record<string, { locale: string; symbol: string }> = {
			RUB: { locale: "ru-RU", symbol: "₽" },
			USD: { locale: "en-US", symbol: "$" },
			EUR: { locale: "de-DE", symbol: "€" },
		};

		const settings = currencySettings[currency] || {
			locale: navigator.language,
			symbol: currency,
		};

		try {
			return new Intl.NumberFormat(settings.locale, {
				style: "currency",
				currency: currency,
				minimumFractionDigits: 2,
				currencyDisplay: "symbol",
			})
				.format(amount)
				.replace(currency, settings.symbol);
		} catch (e) {
			// Fallback форматирование при ошибках
			return `${amount.toFixed(2)} ${settings.symbol}`;
		}
    };

    return (
		<div className="product__card">
			<div className="product__card-header">
				<img
					src={imageUrl}
					alt={title}
					className="product-image"
				/>
			</div>
			<div className="product__card-content">
				<h3 className="product-title">{title}</h3>
				<p className="product-origin">Страна: {origin}</p>
				<p className="product-price">{formatPrice()}</p>
			</div>
			<div className="product__card-footer"></div>
		</div>
	);
};
export default ProductCard;
