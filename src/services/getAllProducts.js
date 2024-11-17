export default function getAllProducts() {
    return [
      {
        id: 'E-E',
        slug: 'espresso-espresso',
        name: "Espresso",
        category: 'Espresso',
        categorySlug: 'espresso',
        price: 15_000,
        stock: 100,
        imageUrl: '/assets/images/Espresso.png',
        description: `The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.`
      },
      {
        id: 'IA-E',
        slug: 'iced-americano-espresso',
        name: "Iced Americano",
        category: 'Espresso',
        categorySlug: 'espresso',
        price: 18_000,
        stock: 5,
        imageUrl: `/assets/images/IcedAmericano.png`,
        description: `Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction pairs with bold details for style that tracks whether you're on court or on the go.`
      },
      {
        id: 'L-E',
        slug: 'latte-espresso',
        name: "Latte",
        category: 'Espresso',
        categorySlug: 'espresso',
        price: 23_000,
        stock: 0,
        imageUrl: `/assets/images/HotLatte.png`,
        description: `Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction pairs a warm suede upper with neutral accents for style that tracks whether you're on court or on the go.`
      },
      {
        id: 'A-E',
        slug: 'affogato-espresso',
        name: "Affogato",
        category: 'Espresso',
        categorySlug: 'espresso',
        price: 25_000,
        stock: 67,
        imageUrl: `/assets/images/Affogato.png`,
        description: `Comfortable, durable and timeless—it's number 1 for a reason. The classic '80s construction pairs a warm suede upper with neutral accents for style that tracks whether you're on court or on the go.`
      },
    ]
  }