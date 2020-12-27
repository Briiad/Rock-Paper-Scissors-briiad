const startGame = () => {
    
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumberGen = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumberGen];

                compare(computerChoice, this.textContent);

                playerHand.src = `./img/${this.textContent}.png`;
                console.log(playerHand);
                computerHand.src = `./img/${computerChoice}.png`;
            });
        });
    };

    const compare = (computerChoice, playerChoice) => {
        const winner = document.querySelector(".winner");
        if ( playerChoice === computerChoice){
            winner.textContent = 'Tie';
            return;
        }

        if ( playerChoice === 'rock' ){
            if ( computerChoice === 'paper'){
                winner.textContent = 'Computer wins!'
                return;
            } else {
                winner.textContent = 'Player Wins!';
                return;
            }
        }

        if ( playerChoice === 'paper' ){
            if ( computerChoice === 'rock'){
                winner.textContent = 'Player Wins!'
                return;
            } else {
                winner.textContent = 'Computer Wins!';
                return;
            }
        }

        if ( playerChoice === 'scissors' ){
            if ( computerChoice === 'paper'){
                winner.textContent = 'Player Wins!'
                return;
            } else {
                winner.textContent = 'Computer Wins!';
                return;
            }
        }
    }
    playMatch();
};
startGame();