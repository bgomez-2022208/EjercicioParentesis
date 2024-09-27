var balanceada = "{ [ a * ( c + d ) ] - 5 }";
var nobalanceada = "{ a * ( c + d ) ] - 5 }";
function balanceadaONoBalanceada(cadena) {
    var A = cadena.replace(/[^(){}\[\]]/g, '');
    var B;
    do {
        B = A;
        A = A.replace(/\(\)|\[\]|\{\}/g, '');
    } while (A.length < B.length);
    return A.length === 0;
}
console.log(balanceadaONoBalanceada(balanceada));
console.log(balanceadaONoBalanceada(nobalanceada));
