
const btnGenerate = document.querySelector(".btn-play");
const levelList = document.querySelector( "[name='difficulty']");



btnGenerate.addEventListener("click", function(){
    
   const level = levelList.value;

   generateSquares(+level);

} );

function generateSquares ( squaresNbr ){
    const squareContainer = document.querySelector(".container");
    squareContainer.innerHTML = "";

    for (let i = + 1; i <= squaresNbr; i++ ){

        const newSquare = document.createElement("div");
        const rowNbr = Math.sqrt(squaresNbr);

        newSquare.classList.add("squares");
        newSquare.style.flexBasis = 100 / rowNbr + "%";

        newSquare.textContent = i ;
        newSquare.dataset.squaresNbr = i ;
        

        newSquare.addEventListener("click", onSquareClick);

        squareContainer.append(newSquare);
    }

}

function onSquareClick (){
    const squaresNbr = +this.dataset.squaresNbr;
    this.classList.toggle("active");
    console.log(squaresNbr);

   
}
