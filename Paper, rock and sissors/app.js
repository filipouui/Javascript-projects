window.addEventListener('load', function() {
    (function() {

        let playerResult = document.querySelector('.player-result');
        let computerResult = document.querySelector('.computer-result')
        let winner = document.getElementById('winner');
        let option = document.querySelectorAll('.main button');
        let computerText = document.getElementById('computer-choice')
        let pScore = 0;
        let cScore = 0;
        let computerChoices = ["rock", "paper", "scissors"];

        option.forEach(options => {
            options.addEventListener('click', function() {
                let randomNumber = Math.floor(Math.random() * 3);
                let computerChoice = computerChoices[randomNumber];
                let playerChoice = options.textContent;
            
                setTimeout(() => {
                    compareHands(playerChoice,computerChoice)
                    computerText.innerText = `Player: ${playerChoice}   VS   Computer: ${computerChoice}`
                    updateScore();
                }, 1000);
                

            });
        });

        const updateScore = () => {
            playerResult.textContent = pScore;
            computerResult.textContent = cScore;
        }


        const compareHands = (playerChoice, computerChoice) => {

            if(playerChoice === computerChoice) {
                winner.innerText = "It's a tie!"
                return;
            } 

            if(playerChoice === 'rock') {
                if(computerChoice === 'scissors') {
                    winner.innerText = "Player Wins!"
                    pScore++;
                    updateScore();
                    return;
                } else {
                    winner.innerText = "Computer Wins!"
                    cScore++;
                    updateScore();
                    return;
                }
            }

            if(playerChoice === 'paper') {
                if(computerChoice === 'rock') {
                    winner.innerText = "Player Wins!"
                    pScore++;
                    updateScore();
                    return;
                } else {
                    winner.innerText = "Computer Wins!"
                    cScore++;
                    updateScore();
                    return;
                }
            }

            if(playerChoice === 'scissors') {
                if(computerChoice === 'paper') {
                    winner.innerText = "Player Wins!"
                    pScore++;
                    updateScore();
                    return;
                } else {
                    winner.innerText = "Computer Wins!"
                    cScore++;
                    updateScore();
                    return;
                }
            }
        }

    })();

});

    

