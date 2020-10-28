var resultado = 1; // Definimos la variable que almacenara el resultado
var maxIteration = 1; // Definimos la variable que almacenara el numero maximo de iteraciones

for(var num = 1; num <= 100000; ++num){
    var iterations = Collatz(num,1);
    if(iterations > maxIteration) {
        resultado = num;
        maxIteration = iterations;
    }
}

function Collatz(i,g)
{
    if(i === 1) {
        return g // Devolvemos el numero de iteraciones
    }
    var nextNumber = i % 2 !== 0 ? (i * 3) + 1 : i / 2;
    return Collatz(nextNumber,g + 1)
} // Llamamos recursivamente con el resultado calculado

console.log(resultado); //Pintamos el resultado en la consola
