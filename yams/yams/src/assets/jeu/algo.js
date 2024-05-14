function resultatDe(){
    return Math.floor ( Math.random() * 6 ) + 1
}

function ResultatTotal(n = 5){
    const resultat = []
    for (let i = 0; i < n; i++) {
        resultat.push(resultatDe())
        return resultat
    }
}

function checkCombination(resultat) {
    const calculGrandeSuite = (arr, values) => values.every(v => arr.includes(v));

    score = 0

    if (new Set(resultat).size == 1) {
        score = 3;
    } else if (calculGrandeSuite(resultat, [1, 2, 3, 4, 5]) || calculGrandeSuite(resultat, [2, 3, 4, 5, 6])) {
        score = 2;
    } else if (new Set(resultat).size == 2 || new Set(resultat).size == 3) {
        score = 1;
    } else {
        score = 0;
    }
    return score
}
