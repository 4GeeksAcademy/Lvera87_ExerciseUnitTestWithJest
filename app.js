// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}

// We declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // return the dollar value
    let valueInYen = valueInEuro * oneEuroIs.JPY;

    return valueInYen;
}

// We declare the function with the exact name "fromEuroToDollar"
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // return the dollar value
    let valueInPound = valueInEuro * oneEuroIs.GBP;

    return valueInPound;
}


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)

module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen};



