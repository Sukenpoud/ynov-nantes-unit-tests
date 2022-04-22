// [TODO] Tous les éléments ont une valeur 'sellIn' qui désigne le nombre de jours restant pour vendre l'article.
// |Test 1 : checker que la valeur 'sellIn' d'un item est instanciée (différent de null) sous un type 'number'

// [TODO] Tous les articles ont une valeur 'quality' qui dénote combien l'article est précieux.
// |Test 2 : checker que la valeur 'quality' d'un item est instanciée (différent de null)

// [TODO] À la fin de chaque journée, notre système diminue ces deux valeurs pour chaque produit.
// |Test 3 : checker que la valeur des attributs 'sellIn' et 'quality' d'un item diminue de 1 lorsqu'on applique la fonction 'update quality' sur 'shop' 

// [TODO] Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement.
// |Test 4 : checker que SI l'attribut 'sellIn' d'un item est négatif, l'attribut 'quality' diminue de 2 lorsqu'on applique la fonction 'update quality' sur 'shop' 

// [TODO] La qualité (quality) d'un produit ne peut jamais être négative.
// |Test 5 : checker que la valeur de 'quality' d'un item qui est égal à 0 ne devient pas négative lorsqu'on applique la fonction 'update quality' sur 'shop'

// [TODO] "Aged Brie" augmente sa 'quality' plus le temps passe.
// |Test 6 : checker que la valeur de 'quality' d'un item augmente lorsqu'on applique la fonction 'update quality' sur 'shop' 

// [TODO] La qualité d'un produit n'est jamais de plus de 50.
// |Test 7 : checker que la valeur de 'quality' d'un item qui est égal à 50 reste égale à 50 lorsqu'on applique la fonction 'update quality' sur 'shop'

// [TODO] "Sulfuras", étant un objet légendaire, n'a pas de date de péremption et ne perd jamais en qualité (quality)
// |Test 8 : checker que la valeur de 'sellIn' (quelque soit sa veleur) et 'quality' (toujours égale à 80) de "Sulfuras" ne diminues pas lorsqu'on applique la fonction 'update quality' sur 'shop'

// [TODO] "Backstage passes", comme le "Aged Brie", augmente sa qualité (quality) plus le temps passe (sellIn) ; La qualité augmente de 2 quand il reste 10 jours ou moins et de 3 quand il reste 5 jours ou moins, mais la qualité tombe à 0 après le concert.
// |Test 9 : checker que la valeur de 'quality' de "Backstage passes" et "Aged Brie" augmente lorsque 'sellIn' diminue lorsqu'on applique la fonction 'update quality' sur 'shop'
// |Test 10 : checker que la valeur de 'quality' de "Backstage passes" et "Aged Brie" augmente de 2 quand la valeur de 'sellIn' est comprise entre 5 et 10 lorsqu'on applique la fonction 'update quality' sur 'shop'
// |Test 11 : checker que la valeur de 'quality' de "Backstage passes" et "Aged Brie" augmente de 3 quand la valeur de 'sellIn' est comprise entre 0 et 5 lorsqu'on applique la fonction 'update quality' sur 'shop'
// |Test 12 : checker que la valeur de 'quality' de "Backstage passes" et "Aged Brie" devient 0 quand la valeur de 'sellIn' vaut 0 lorsqu'on applique la fonction 'update quality' sur 'shop'

const {Shop, Item} = require("../src/gilded_rose");

describe("Test Originel", function() {

  // Test 1 : checker que la valeur 'sellIn' d'un item est instanciée (différent de null) sous un type 'number'
  const dataTest1 = [
    new Item("+5 Dexterity Vest", 10, 20), 
    new Item("Ability arm", 2000000, 0),
  ];
  describe.each(dataTest1)('Test 1', (item) => {
    it(`item.sellIn should be defined`, () => {
      const { sellIn } = item;
      expect(sellIn).toBeDefined();
      expect(typeof sellIn).toBe("number");
    });
  });

  // Test 2 : checker que la valeur 'quality' d'un item est instanciée (différent de null)
  const dataTest2 = [
    new Item("+5 Dexterity Vest", 10, 20), 
    new Item("Ability arm", 20, 0),
  ];
  describe.each(dataTest2)('Test 2', (item) => {
    it(`item.quality should be defined`, () => {
      const { quality } = item;
      expect(quality).toBeDefined();
      expect(typeof quality).toBe("number");
    });
  });
});
// Test 3 : checker que la valeur des attributs 'sellIn' et 'quality' d'un item diminue de 1 lorsqu'on applique la fonction 'update quality' sur 'shop' 
describe("Test 3", function() {
  it("Test sellIn & quality soustraction", function() {

    const listItems = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("+5 Dexterity Vest", 50, 50),
    ];
    const shop = new Shop(listItems);
    const items = shop.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].sellIn).not.toBe(10);
    expect(items[0].quality).toBe(19);
    expect(items[0].quality).not.toBe(20);
  });
});

// Test 4 : checker que SI l'attribut 'sellIn' d'un item est négatif, l'attribut 'quality' diminue de 2 lorsqu'on applique la fonction 'update quality' sur 'shop' 
describe("Test 4", function() {
  it("Test sellIn negatif", function() {

    const listItems = [
      new Item("+5 Dexterity Vest", -1, 20),
    ];
    
    const shop = new Shop(listItems);
    const items = shop.updateQuality();
    
    expect(items[0].quality).toBe(18);
  });
});

// Test 5 : checker que la valeur de 'quality' d'un item qui est égal à 0 ne devient pas négative lorsqu'on applique la fonction 'update quality' sur 'shop'
describe("Test 5", function() {
  it("item.quality should be greater or equal than 0", function() {

    const listItems = [
      new Item("+5 Dexterity Vest", 0, 20),
    ];
    const shop = new Shop(listItems);
    const items = shop.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });
});

// Test 6 : checker que la valeur de 'quality' d'un item augmente lorsqu'on applique la fonction 'update quality' sur 'shop' 
describe("Test 6", function() {
  it("Test sellIn negatif", function() {
    const shop = new Shop([new Item("Aged Brie", 10, 20)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(21);
  });
});

// Test 7 : checker que la valeur de 'quality' d'un item ne dépasse pas 50 lorsqu'on applique la fonction 'update quality' sur 'shop'
describe("Test 7", function() {
  it("Test quality value", function() {
    const shop = new Shop([new Item("+5 Dexterity Vest", 60, 50)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBeLessThanOrEqual(50);
  });
});