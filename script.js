/* WHILE

let cont = 0
while(cont < 10){
    document.write("O valor é: " +cont);
    document.write("<br>");
    cont++
}


//DO WHILE
let cont1 = 10
do{
    document.write("<br>");
    document.write("O valor while: " +cont1);
    document.write("<br>");
    cont1++
}while(cont1 == 0) 
*/

function mudar(){
    let novo = document.getElementById("idNome")
    document.getElementById("titulo").innerHTML = novo.value;
}
