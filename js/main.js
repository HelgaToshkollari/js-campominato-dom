
const btnGenerate = document.querySelector(".btn-play");
const levelList = document.querySelector( "[name='difficulty']");
let bombs;




btnGenerate.addEventListener("click", ()=>{

    const level = levelList.value;
    bombs = generateBombs(+level);
    generateSquares(+level);}

)


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

    if(bombs.includes(squaresNbr)){
        
        this.classList.add("active", "bomb"); 


        bombs.forEach(element => {
            
            document.getElementsByClassName('squares')[element - 1].classList.add("active", "bomb");


        });
        
        setTimeout(()=>{    
            const level = levelList.value;
            bombs = generateBombs(+level);
            generateSquares(+level); 
            alert('GAME OVER!!');

        }, 200)
        

    } else {
        this.classList.toggle("active");
    }


}

function generateRandomNbr (min, max){
    return Math.floor(Math.random()* (max - min +1 )) + min;
}



function generateBombs (squaresNbr){
    let bombsArray = [];
    console.log(bombsArray) 

    while (bombsArray.length < 16 ) {

        const nbr = generateRandomNbr ( 1, squaresNbr);
        if (!bombsArray.includes(nbr)){
            bombsArray.push(nbr);
            
            
        }
    }
    
    return bombsArray;

}