let option;
let result;
let playerwin = 0
let computerwin = 0
let score = 0
let lost = 0
let btnDisable = document.getElementById('btn')
function computer(){
    let compMov = Math.floor(Math.random() * 3) + 1
    if(compMov ===  1){
        option = 'rock'
    }
    else if(compMov === 2){
        option = 'paper'
    }
    else if(compMov === 3){
        option = 'scissor'
    }
}

function playgame(playerselection){
     computer()
    if(playerselection === 'rock'){
        if(option === 'rock'){
            result = 'draw'
            lost = 0

        }
        else if(option === 'paper'){
            result = 'loss'
            lost+=1
            document.querySelector('.comp-score').innerHTML =  `Comp: ${computerwin += 1}`
            if(lost === 1){
                btnDisable.disabled = true
                //disable
            }
        }
        else if(option === 'scissor'){
            result = 'win'
            lost = 0
            document.querySelector('.middle-score').innerHTML = `Score: ${score+=0.5}`
           document.querySelector('.player-score').innerHTML = `Player: ${playerwin += 1}`
        }
    }
    else if(playerselection === 'paper'){
        if(option === 'rock'){
            result = 'win'
            lost = 0
           document.querySelector('.player-score').innerHTML = `Player: ${playerwin += 1}`
           document.querySelector('.middle-score').innerHTML = `Score: ${score+=0.5}`
        }
        else if(option === 'paper'){
            result = 'draw'
            lost = 0
        }
        else if(option === 'scissor'){
            result = 'loss'
            lost+=1
            document.querySelector('.comp-score').innerHTML =  `Comp: ${computerwin += 1}`
            
        }
    }
    else if(playerselection === 'scissor'){
        if(option === 'rock'){
            result = 'loss'
            lost += 1
            document.querySelector('.comp-score').innerHTML =  `Comp: ${computerwin += 1}`
            
        }
        else if(option === 'paper'){
            result = 'win'
            lost = 0
           document.querySelector('.player-score').innerHTML =  `Player: ${playerwin += 1}`
           document.querySelector('.middle-score').innerHTML = `Score: ${score+=0.5}`
        }
        else if(option === 'scissor'){
            result = 'draw'
            lost = 0
        }
    }
        console.log(result)
        document.querySelector('.result-line').innerHTML =`You: ${result}` 
        document.getElementById('1').innerHTML = `Bot : ${option}`
        document.getElementById('2').innerHTML = `Human: ${playerselection}`
}

function reset(){
    document.querySelector('.player-score').innerHTML =  `Player: ${playerwin = 0}`
    document.querySelector('.comp-score').innerHTML =  `Comp: ${computerwin = 0}`
    
}

