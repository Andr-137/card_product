import "./App.css";
import ProductCard from "./Components/ProductCard/ProductCard";
const product = [
	{
		id: 1,
		title: 'Кофе в зернах "Арабика"',
		origin: "Бразилия",
		price: 34900,
		currency: "RUB",
		imageUrl: "coffee.webp",
	},
	{
		id: 2,
		title: 'Кофе в зернах "Арабика"',
		origin: "Бразилия",
		price: 34900,
		currency: "RUB",
		imageUrl: "coffee.webp",
	},
	{
		id: 3,
		title: 'Кофе в зернах "Арабика"',
		origin: "Бразилия",
		price: 34900,
		currency: "RUB",
		imageUrl: "coffee.webp",
	},
	{
		id: 4,
		title: 'Кофе в зернах "Арабика"',
		origin: "Бразилия",
		price: 34900,
		currency: "RUB",
		imageUrl: "coffee.webp",
	},
	{
		id: 5,
		title: 'Кофе в зернах "Арабика"',
		origin: "Бразилия",
		price: 34900,
		currency: "RUB",
		imageUrl: "coffee.webp",
	},
	{
		id: 6,
		title: 'Кофе в зернах "Арабика"',
		origin: "Бразилия",
		price: 34900,
		currency: "RUB",
		imageUrl: "coffee.webp",
	},
	{
		id: 7,
		title: 'Кофе в зернах "Арабика"',
		origin: "Бразилия",
		price: 34900,
		currency: "RUB",
		imageUrl: "coffee.webp",
	},
	{
		id: 8,
		title: 'Кофе в зернах "Арабика"',
		origin: "Бразилия",
		price: 34900,
		currency: "RUB",
		imageUrl: "coffee.webp",
	},
];
function App() {
    return (
		<div className="wrapper">
			<header className="header"></header>
			<main className="main">
				<div className="g-container">
					<h1 className="title__h1">Каталог</h1>
					<div className="product-card__block">
						{product.map((el) => (
							<ProductCard
								key={el.id}
								title={el.title}
								origin={el.origin}
								price={el.price}
								currency={el.currency}
								imageUrl={el.imageUrl}
							/>
						))}
					</div>
				</div>
			</main>
			<footer className="footer"></footer>
		</div>
	);
}

export default App;
