let words = ['Hola', 'Adios'];
let map = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

let contRojo = 10;
let contAzul = 10;
let contAmarillo = 4;
let contNegro = 1;
gameOption = 0;

function revealAll(){
    console.log("Hola desde la función");
    for (var i = 0; i < 5; i++) {
        for (var j = 1; j <= 5; j++){
            wordClicked(i.toString() + j.toString());
        }
    }
}

function showTable(option){
    console.log("Pues en showTable vale -> " + option);
    gameOption = option;
    location.href="wordsView.html";
}

function launchGame(){
    for (var i = 0; i < 5; i++) {
        for (var j = 1; j <= 5; j++){
            document.getElementById(i.toString() + j.toString()).textContent = words[getRandomInt(words.length)];
            var valid = 0;
            var temp;
            do{
                temp = getRandomInt(4);
                switch (temp) {
                    case 0:
                        if (contRojo != 0){
                            contRojo = contRojo - 1;
                            valid=1;
                        }
                      break;
                    case 1:
                        if (contAzul != 0){
                            contAzul = contAzul - 1;
                            valid=1;
                        }
                      break;
                    case 2:
                        if (contAmarillo!= 0){
                            contAmarillo = contAmarillo - 1;
                            valid = 1;
                        }
                      break;
                    case 3:
                        if (contNegro == 1){
                            contNegro = 0;
                            valid = 1;
                        }
                        break;
                }
            } while(valid == 0);
            map[i][j] = temp;
        }
    }

    console.log("Opcion vale-> " + gameOption);
    if(gameOption)
        revealAll();
}

function wordClicked(clicked){
    switch (map[parseInt(clicked.charAt(0), 10)][parseInt(clicked.charAt(1), 10)]) {
        case 0:
            document.getElementById(clicked).style.backgroundColor = '#b86a53';
          break;
        case 1:
            document.getElementById(clicked).style.backgroundColor = '#75a0e0';
          break;
        case 2:
            document.getElementById(clicked).style.backgroundColor = '#e0dd6e';
          break;
        case 3:
            document.getElementById(clicked).style.backgroundColor = '#666666';
            break;
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}