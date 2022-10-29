window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
    let player = "X";
    let arr = ["","","","","","","","",""]
    let winnerNum = [
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6]
    ]
    let count = 0;
    let countX = 0;
    let countO = 0;
    tiles.forEach((tile, index) => {
    
        tile.addEventListener('click', () => {
            if(player == "X" && tile.textContent == ""){
                tile.classList.remove("playerO")
                tile.classList.add("playerX")
                tile.innerHTML = player;
                count ++;
                arr[index] = player;
                playerDisplay.classList.remove("playerX");
                playerDisplay.classList.add("playerO");
                player = "O";
                playerDisplay.textContent = player;

            }else if(player == "O" && tile.textContent == ""){
                tile.classList.remove("playerX")
                tile.classList.add("playerO")
                tile.innerHTML = player;
                arr[index] = player;
                playerDisplay.classList.remove("playerO");
                playerDisplay.classList.add("playerX");
                player = "X";
                playerDisplay.textContent = player;

               

            }
            if(count >= 3){
                retWin(winnerNum,arr);
            }
            

            
            
        })
  

    })

   
    function retWin(mat,arrX_O) {
        // debugger;
        let playerXWon = "Won X";
        let playerOWon = "Won O";
            for(let i of mat){

                for(let j of i){
                    if(arrX_O[j] == "X"){
                       countX ++ ;
                    }else if(arrX_O[j] == "O"){
                        countO ++;
                    }
                }
                if(countX == 3){
                    countX = 0;
                    announcer.classList.add("display")
                    announcer.classList.remove("hide");
                    announcer.classList.remove("playerO");
                    announcer.classList.add("playerX");
                    announcer.textContent = playerXWon ;
                    resetGame();
                    break;
                }else if(countO == 3){
                    countX = 0
                    announcer.classList.add("display")
                    announcer.classList.remove("hide");
                    announcer.classList.remove("playerX");
                    announcer.classList.add("playerO");
                    announcer.textContent = playerOWon;
                    resetGame();
                    break;
                }else if(count == 5){
                    countX = 0;
                    countO = 0;
                    announcer.classList.add("display")
                    announcer.classList.remove("hide");
                    announcer.classList.remove("playerX");
                    announcer.classList.remove("playerO");
                    announcer.textContent = "No One"
                    resetGame();

                }
                else{
                    countX = 0;
                    countO = 0;
                }
          

            }
            
           
        
    }
    function resetGame(){
        window.setTimeout(()=>{
            countX = 0;
            countO = 0;
            count = 0;
            player = "X";
            for(let i of tiles){
                i.textContent = "";
                }
                playerDisplay.textContent = player;
                playerDisplay.classList.remove("playerO");
                playerDisplay.classList.add("playerX");
                arr = ["","","","","","","","",""];
                announcer.classList.remove("display");
                announcer.classList.add("hide");

            },1000)
    }
    resetButton.addEventListener('click',  ()=>{
        resetGame();
    })
   ;

});
