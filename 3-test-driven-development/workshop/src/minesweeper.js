class Map {
    constructor(lignes, colonnes, mines){
      this.lignes = lignes;
      this.colonnes = colonnes;
      this.mines = mines;
      this.map = [];
    }

    // Génération du tableau à double entrées
    createMap(){
        this.map = new Array(this.lignes);
        for (var i=0; i < this.map.length; i++) {
            this.map[i] = new Array(this.colonnes);
            for (var j=0; j < this.map[i].length; j++) {
                this.map[i][j]='.';
            }
        }
        this.addMines();
        //this.browseMapForIndex();
        return this.map;
    }
    
    // Ajout des mines dans le tableau
    addMine(){
        let i = Math.floor(Math.random() * this.lignes);
        let j = Math.floor(Math.random() * this.colonnes);
        while (this.map[i][j]=="*"){
            i = Math.floor(Math.random() * this.lignes);
            j = Math.floor(Math.random() * this.colonnes);
        }
        this.map[i][j] = "*";
    }

    addMines(){
        for (var i=0; i < this.mines; i++) {
            this.addMine();
        }
    }

    // Détection des mines adjacentes
    /* countMinesAroundCell(indexLigne, indexColonne){
        let mineCount=0;
        
        for (var i = Math.max(indexLigne-1,0); i <= Math.min(indexLigne+1,this.lignes); i++) {
            for(var j = Math.max(indexColonne-1,0); j <= Math.min(indexColonne+1,this.colonnes); j++) {
              if (this.map[i][j] == "*")
                mineCount++;
            }
        }
        console.log(mineCount);
        // return this.map[i][j] = mineCount;
    } */

    // Parcourir toutes les cases d'une map et placer les indications de mines
    browseMapForIndex(){
        for (var i=0; i < this.map.length; i++) {
            for (var j=0; j < this.map[i].length; j++) {
                this.map[i][j] = this.testCountMines();
            }
        }
    }

    testCountMines(){
        // LOOP THROUGH ROW-BY-ROW
        let mineCount=0;
        for (let i=0; i<this.lignes; i++) {
            let lastRow = i - 1,
            nextRow = i + 1;
            if (nextRow == this.lignes) { nextRow = -1; }
    
            // LOOP THROUGH CELLS OF EACH ROW
            for (let j=0; j<this.colonnes; j++) {
                let lastCol = j - 1,
                    nextCol = j + 1;
                if (nextCol == this.colonnes) { nextCol = -1; }
        
                // CALCULATE ONLY IF CELL DOES NOT CONTAIN MINE
                if (!this.map[i][j] == "*") {
                    
                    // ADD NUMBER OF MINES IN LAST ROW
                    if (lastRow != -1) {
                        if (lastCol != -1) { if (this.map[lastRow][lastCol] == "*") { this.map[i][j] == mineCount++; } }
                        if (this.map[lastRow][j] == "*") { this.map[i][j] == "*"; }
                        if (nextCol != -1) { if (this.map[lastRow][nextCol] == "*") { this.map[i][j] == mineCount++; } }
                    }
        
                    // ADD NUMBER OF MINES IN CURRENT ROW
                    if (lastCol != -1) { if (this.map[i][lastCol] == "*") { this.map[i][j] == mineCount++; } }
                    if (nextCol != -1) { if (this.map[i][nextCol] == "*") { this.map[i][j] == mineCount++; } }
        
                    // ADD NUMBER OF MINES IN NEXT ROW
                    if (nextRow != -1) {
                        if (lastCol != -1) { if (this.map[nextRow][lastCol] == "*") { this.map[i][j] == mineCount++; } }
                        if (this.map[nextRow][j] == "*") { this.map[i][j] == mineCount++; }
                        if (nextCol != -1) { if (this.map[nextRow][nextCol] == "*") { this.map[i][j] == mineCount++; } }
                    }
                    console.log(mineCount);
                    
                } 
                return this.map[i][j];
            }
        }
    }
}

module.exports = {
    Map,
}  


const mapTest = new Map(3, 3, 2);
const results = mapTest.createMap();
console.log(mapTest);
mapTest.testCountMines();
console.log(mapTest);