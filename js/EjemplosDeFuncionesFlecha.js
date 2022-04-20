//convencional

function FuncionConvencionalSumar(par1, par2) {
    return par1 + par2;
}

let resultado = FuncionConvencionalSumar(1, 1);
console.log(resultado);

//flechas

const FuncionFlechaSinParametros = () => console.log('Ejecutamos FuncionFlechaSinParametros!');
//Usamos la funcion
FuncionFlechaSinParametros();