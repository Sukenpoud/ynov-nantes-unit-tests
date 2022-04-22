// [TODO] Tous les éléments ont une valeur 'sellIn' qui désigne le nombre de jours restant pour vendre l'article.
// |Test 1 : checker que la valeur 'sellIn' d'un item est instanciée (différent de null)
// |Test 2 : checker que le type de 'sellIn' est un 'int' lors de l'instanciation d'un item

// [TODO] Tous les articles ont une valeur 'quality' qui dénote combien l'article est précieux.
// |Test 3 : checker que la valeur 'quality' d'un item est instanciée (différent de null)

// [TODO] À la fin de chaque journée, notre système diminue ces deux valeurs pour chaque produit.
// |Test 4 : checker que la valeur des attribut 'sellIn' et 'quality' d'un item diminue de 1 lorsqu'on applique la fonction 'update quality' sur 'shop' 

// [TODO] Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement.
// |Test 5 : checker que SI l'attribut 'sellIn' d'un item est négatif, l'attribut 'quality' diminue de 2 lorsqu'on applique la fonction 'update quality' sur 'shop' 

// [TODO] La qualité (quality) d'un produit ne peut jamais être négative.
// |Test 6 : checker que la valeur de 'quality' d'un item qui est égal à 0 ne devient pas négative lorsqu'on applique la fonction 'update quality' sur 'shop'

// [TODO] "Aged Brie" augmente sa 'quality' plus le temps passe.
// |Test 7 : checker que la valeur de 'quality' d'un item augmente lorsqu'on applique la fonction 'update quality' sur 'shop' 

// [TODO] La qualité d'un produit n'est jamais de plus de 50.
// |Test 8 : checker que la valeur de 'quality' d'un item qui est égal à 50 reste égale à 50 lorsqu'on applique la fonction 'update quality' sur 'shop'

// [TODO] "Sulfuras", étant un objet légendaire, n'a pas de date de péremption et ne perd jamais en qualité (quality)
// |Test 9 : checker que la valeur de 'sellIn' (quelque soit sa veleur) et 'quality' (toujours égale à 80) de "Sulfuras" ne diminues pas lorsqu'on applique la fonction 'update quality' sur 'shop'

// [TODO] "Backstage passes", comme le "Aged Brie", augmente sa qualité (quality) plus le temps passe (sellIn) ; La qualité augmente de 2 quand il reste 10 jours ou moins et de 3 quand il reste 5 jours ou moins, mais la qualité tombe à 0 après le concert.
// |Test 10 : checker que la valeur de 'quality' de "Backstage passes" et "Aged Brie" augmente lorsque 'sellIn' diminue lorsqu'on applique la fonction 'update quality' sur 'shop'
// |Test 11 : checker que la valeur de 'quality' de "Backstage passes" et "Aged Brie" augmente de 2 quand la valeur de 'sellIn' est comprise entre 5 et 10 lorsqu'on applique la fonction 'update quality' sur 'shop'
// |Test 12 : checker que la valeur de 'quality' de "Backstage passes" et "Aged Brie" augmente de 3 quand la valeur de 'sellIn' est comprise entre 0 et 5 lorsqu'on applique la fonction 'update quality' sur 'shop'
// |Test 13 : checker que la valeur de 'quality' de "Backstage passes" et "Aged Brie" devient 0 quand la valeur de 'sellIn' vaut 0 lorsqu'on applique la fonction 'update quality' sur 'shop'

const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  /* 
  // exemple
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });
  */

  // test de test
  it("test update", function() {
    const listItems = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    ];
    
    const shop = new Shop(listItems);
    const items = shop.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest");
  });
});
