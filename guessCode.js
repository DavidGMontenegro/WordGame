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

function launchGame(){
    for (var i = 0; i < 5; i++) {
        for (var j = 1; j <= 5; j++){
            document.getElementById(i.toString() + j.toString()).textContent = words[getRandomInt(words.length)];
            var valid = 0;
            var temp;
            do{
                temp = getRandomInt(4);
                console.log("Saco un " + temp);
                switch (temp) {
                    case 0:
                        if (contRojo != 0){
                            contRojo = contRojo - 1;
                            valid=1
                        }
                      break;
                    case 1:
                        if (contAzul != 0){
                            contAzul = contAzul - 1;
                            valid=1
                        }
                      break;
                    case 2:
                        if (contAmarillo!= 0){
                            contAmarillo = contAmarillo - 1;
                            valid = 1;
                        }
                      break;
                    case 3:
                        if (contNegro != 1){
                            console.log("Asigno negro y me salgo");
                            console.log("contNegro = " + contNegro + "valid = " + valid);
                            contNegro = 0;
                            valid = 1;
                            console.log("contNegro = " + contNegro + "valid = " + valid);
                        }
                        break;
                }
            } while(valid == 0);
            map[i][j] = temp;
        }
    }


}

function wordClicked(clicked){
    if (map[parseInt(clicked.charAt(0), 10)][parseInt(clicked.charAt(1), 10)] == 1){
        document.getElementById(clicked).style.backgroundColor = '#FFFFFF';
    }

    if (map[parseInt(clicked.charAt(0), 10)][parseInt(clicked.charAt(1), 10)] == 0){
        document.getElementById(clicked).style.backgroundColor = '#000000';
    }

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