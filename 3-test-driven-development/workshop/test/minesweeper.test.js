/* 
    Infos : 
Map : L x C (0 < L, C <= 100)
Carac mine : *
Carac none : .
Carac number [1-8] : nombre de bombe dans les 8 cases adjacentes
Carac 0 : fin de saisie du map -> pas certain, on verra

Classes identifiées :
-Map(ligne, colonne, nbBombes)
    -constructor ( . / *)
    -ajoutIndication ( 0-8 )

    Map(5, 5, 4) :

    ...*.
    .*...
    ...*.
    *....
    .....

    112*1
    1*322
    222*1
    *1111
    11000

Idées tests :

- vérifier que le constructeur crée une map de la bonne taille ( bon nb de ligne 0 < L <= 100 et bon nb de colonne 0 < C <= 100)
- vérifier que le constructeur crée une map avec le bon nombre de bombe ( nbBombe )
- vérifier que chaque case prend la valeur du nombre de bombes adjacentes (8 cases voisines)

*/

const { Map } = require("../src/minesweeper");

describe("Minesweeper", function() {
  it("vérifier que le constructeur crée une map de la bonne taille", function() {
    // Given
    const lignes = 5;
    const colonnes = 5;
    const mines = 4;

    // When
    const map = new Map(lignes, colonnes, mines);
    const results = map.createMap().flat().length;

    // Then
    const expected = lignes*colonnes;

    expect(results).toStrictEqual(expected);
  });

  it("vérifier que le constructeur crée une map avec le bon nombre de bombe", function() {
    // Given
    const lignes = 5;
    const colonnes = 5;
    const mines = 4;

    // When
    const map = new Map(lignes, colonnes, mines);
    const results = map.createMap();
    const nbMines = results.flat().filter((element) => {
        return element == "*";
    }).length;

    // Then
    const expected = mines;

    expect(nbMines).toBe(expected);
  });

  it("vérifier que chaque case prend la valeur du nombre de bombes adjacentes", function() {
    // Given
    const map =   [
        [ '.', '*', '.', '.', '.' ],
        [ '.', '.', '*', '.', '.' ],
        [ '.', '*', '.', '.', '.' ],
        [ '.', '.', '*', '.', '*' ],
        [ '*', '.', '.', '.', '.' ]
      ]

    // When
    const result = map.browseMapForIndex()

    // Then
    const expected = [
        [ '1', '*', '2', '1', '0' ],
        [ '2', '3', '*', '1', '0' ],
        [ '1', '*', '3', '1', '1' ],
        [ '2', '3', '*', '2', '*' ],
        [ '*', '2', '1', '2', '1' ]
      ]

    expect(result).toBe(expected);
  });
});