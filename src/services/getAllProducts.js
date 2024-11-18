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
        description: `Espresso delivers a rich and intense coffee flavor, brewed under high pressure to create a bold taste. With its captivating aroma and strong flavor, Espresso provides warmth and energy in every sip. The perfect choice for coffee lovers seeking a delightful and refreshing coffee experience throughout the day.`
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
        description: `Iced Americano offers a smooth, bold coffee flavor served cold over ice. Made by diluting espresso with chilled water, it strikes the perfect balance between strength and refreshment. Ideal for those who enjoy a rich coffee experience with a cool, invigorating twist, Iced Americano is the perfect pick-me-up on a hot day.`
      },
      {
        id: 'HL-E',
        slug: 'hot-latte-espresso',
        name: "Hot Latte",
        category: 'Espresso',
        categorySlug: 'espresso',
        price: 23_000,
        stock: 0,
        imageUrl: `/assets/images/HotLatte.png`,
        description: `Hot Latte combines the richness of espresso with the smoothness of steamed milk, creating a creamy and balanced coffee experience. The gentle sweetness of milk complements the bold flavor of espresso, offering a comforting and soothing drink. Perfect for those seeking a warm, indulgent coffee experience, Hot Latte delivers a harmonious blend of flavors in every sip.`
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
        description: `Affogato is a delightful dessert-style coffee that features a scoop of creamy vanilla ice cream or gelato, generously poured over with a shot of hot espresso. The contrast of the warm, bold espresso and the cold, sweet ice cream creates a perfect balance of flavors and textures, offering a luxurious and indulgent treat for coffee and dessert lovers alike.`
      },
      {
        id: 'FBC-BC',
        slug: 'freshly-brewed-coffee',
        name: "Freshly Brewed Coffee",
        category: 'Brewed Coffee',
        categorySlug: 'brewedcoffee',
        price: 15_000,
        stock: 10,
        imageUrl: `/assets/images/BrewedCoffee.png`,
        description: `Freshly Brewed Coffee offers a comforting and aromatic experience, made from freshly ground coffee beans brewed to perfection. With its rich, full-bodied flavor and inviting aroma, this classic beverage delivers a smooth and satisfying cup of coffee. Ideal for those who appreciate a simple yet flavorful coffee experience, freshly brewed coffee is the perfect start to any day.`
      },
      {
        id: 'CB-BC',
        slug: 'cold-brew',
        name: "Cold Brew",
        category: 'Brewed Coffee',
        categorySlug: 'brewedcoffee',
        price: 15_000,
        stock: 97,
        imageUrl: `/assets/images/ColdBrew.png`,
        description: `Cold Brew is a smooth, refreshing coffee made by steeping coarsely ground coffee beans in cold water for an extended period, usually 12-24 hours. This slow brewing process results in a rich, less acidic coffee with a naturally sweet and bold flavor. Served cold over ice, Cold Brew is perfect for those looking for a chilled, energizing coffee with a smooth and mellow taste.`
      },
      {
        id: 'CT-NC',
        slug: 'chamomile-tea',
        name: "Chamomile Tea",
        category: 'Non-Coffee',
        categorySlug: 'noncoffee',
        price: 28_000,
        stock: 50,
        imageUrl: `/assets/images/ChamomileTea.png`,
        description: `Chamomile Tea offers a calming and soothing experience with its delicate, floral flavor. Made from dried chamomile flowers, this herbal tea is known for its natural relaxation properties, perfect for unwinding after a long day. With its light, sweet taste and gentle aroma, Chamomile Tea provides a comforting, caffeine-free alternative for those seeking a peaceful moment of tranquility.`
      },
      {
        id: 'BC-F',
        slug: 'butter-croissant',
        name: "Butter Croissant",
        category: 'Food',
        categorySlug: 'food',
        price: 37_000,
        stock: 50,
        imageUrl: `/assets/images/ButterBroissant.png`,
        description: `Butter Croissant is a golden, flaky pastry made with layers of rich, buttery dough that melt in your mouth. Its crisp, airy texture and melt-in-your-mouth softness offer a delightful combination of lightness and indulgence. Perfect for breakfast or a snack, this classic French pastry brings a touch of elegance and comfort to any moment of your day.`
      },
      {
        id: 'CCC-F',
        slug: 'chocolate-chip-cookie',
        name: "Chocolate Chip Cookie",
        category: 'Food',
        categorySlug: 'food',
        price: 32_000,
        stock: 5,
        imageUrl: `/assets/images/ChocolateChipCookie.png`,
        description: `Chocolate Chip Cookie is a classic treat that combines a soft, chewy texture with rich, gooey pockets of semi-sweet chocolate chips. With a golden-brown exterior and a warm, buttery flavor, each bite delivers the perfect balance of sweetness and chocolatey goodness. Ideal for satisfying your sweet tooth, this timeless cookie offers a comforting and indulgent snack.`
      },
    ]
  }