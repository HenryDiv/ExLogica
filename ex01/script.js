function Somar(){
    var valorA=parseFloat(document.getElementById("valorA").value)
    var valorB=parseFloat(document.getElementById("valorB").value)
    var valorC=parseFloat(document.getElementById("valorC").value)
    var resultado=valorA+valorB
    if(valorC > resultado){
        document.getElementById('resultado').innerHTML = `A (${valorA}) + B (${valorB}) é menor que C (${valorC})`;
    } else{
        document.getElementById('resultado').innerHTML=` A (${valorA}) + B (${valorB}) é maior que C (${valorC})`;
}
}