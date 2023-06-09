import { ICheckoutProduct, IProduct } from "../models/product.model";

export const mockProducts: IProduct[] = [
	{
		id: 1,
		price: 19.99,
		name: "Blue Floral Dress",
		about: "A beautiful dress with a floral pattern, perfect for any occasion.",
		category: "Dresses",
		pictureLink: "../assets/jacket.jpg",
	},
	{
		id: 2,
		price: 29.99,
		name: "Slim Fit Denim Jeans",
		about: "High-quality denim jeans with a slim fit design.",
		category: "Jeans",
		pictureLink: "../assets/shirt.jpg",
	},
	{
		id: 3,
		price: 14.99,
		name: "Plaid Mini Skirt",
		about:
			"A stylish plaid skirt that adds a touch of elegance to your outfit.",
		category: "Skirts",
		pictureLink: "../assets/jacket.jpg",
	},
	{
		id: 4,
		price: 9.99,
		name: "Striped Oxford Shirt",
		about: "A classic oxford shirt with a timeless striped pattern.",
		category: "Shirts",
		pictureLink: "../assets/shirt.jpg",
	},
	{
		id: 5,
		price: 39.99,
		name: "Maxi Evening Gown",
		about: "An elegant and glamorous gown for special evening events.",
		category: "Dresses",
		pictureLink: "../assets/jacket.jpg",
	},
	{
		id: 6,
		price: 24.99,
		name: "Slim Fit Distressed Jeans",
		about: "Stylish distressed jeans with a modern slim fit.",
		category: "Jeans",
		pictureLink: "../assets/shirt.jpg",
	},
	{
		id: 7,
		price: 49.99,
		name: "Pleated Midi Skirt",
		about: "A chic and versatile midi skirt with pleated details.",
		category: "Skirts",
		pictureLink: "../assets/jacket.jpg",
	},
	{
		id: 8,
		price: 12.99,
		name: "Cotton Casual Shirt",
		about: "A comfortable and casual shirt made of soft cotton fabric.",
		category: "Shirts",
		pictureLink: "../assets/shirt.jpg",
	},
	{
		id: 9,
		price: 59.99,
		name: "Embroidered Cocktail Dress",
		about: "A stunning cocktail dress with intricate embroidery.",
		category: "Dresses",
		pictureLink: "../assets/jacket.jpg",
	},
	{
		id: 10,
		price: 34.99,
		name: "High-Waisted Skinny Jeans",
		about: "Trendy high-waisted skinny jeans that flatter your figure.",
		category: "Jeans",
		pictureLink: "../assets/shirt.jpg",
	},
	{
		id: 11,
		price: 17.99,
		name: "Floral Print Mini Skirt",
		about: "A playful mini skirt featuring a vibrant floral print.",
		category: "Skirts",
		pictureLink: "../assets/jacket.jpg",
	},
	{
		id: 12,
		price: 44.99,
		name: "Button-Up Linen Shirt",
		about: "A lightweight and breathable linen shirt with a button-up design.",
		category: "Shirts",
		pictureLink: "../assets/shirt.jpg",
	},
];

export const mockCheckoutProducts: ICheckoutProduct[] = [
	{
		id: 1,
		price: 19.99,
		name: "Blue Floral Dress",
		about: "A beautiful dress with a floral pattern, perfect for any occasion.",
		category: "Dresses",
		pictureLink: "../assets/jacket.jpg",
		quantity: 2,
	},
	{
		id: 12,
		price: 44.99,
		name: "Button-Up Linen Shirt",
		about: "A lightweight and breathable linen shirt with a button-up design.",
		category: "Shirts",
		pictureLink: "../assets/shirt.jpg",
		quantity: 1,
	},
];
