const balanceada: string = "{ [ a * ( c + d ) ] - 5 }";
const nobalanceada: string = "{ a * ( c + d ) ] - 5 }";

function balanceadaONoBalanceada(cadena: string): boolean {
    let  A = cadena.replace(/[^(){}\[\]]/g, '');
    let B: string;
    do {
        B = A;
        A = A.replace(/\(\)|\[\]|\{\}/g, '');
    } while (A.length < B.length);
    return A.length === 0;
}

console.log(balanceadaONoBalanceada(balanceada));
console.log(balanceadaONoBalanceada(nobalanceada));
