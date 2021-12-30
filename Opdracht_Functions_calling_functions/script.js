const hello = function(age){
    return age >= 18
}

// const checkAge = function(leeftijd){
//     if (hello(leeftijd) = true){ <<<< fout zat in enkel = ipv dubbel ==
//         return "Hello there"
//     }else {
//         return "Hey kiddo"
//     }
// }

// const checkAge = function(leeftijd){
//     const test = hello(leeftijd);
//     if (test == true){
//         return "Hi"
//     }
// }

const checkAge = function(leeftijd){
    if (hello(leeftijd) == true){
        return "Hello there"
    }else{
        return "Hey Kiddo"
    };
}

console.log(checkAge(17));

//VAT calculations

//how to calculate VAT

//const VAT = function(base, vatPercentage){
    
//     console.log(base*(vatPercentage/100))//VAT kosten
//     console.log(base*((vatPercentage/100)+1)) //totaal incl vat
// }

//VAT(100, 21);

// const vatPercentage = function (good){
//     if (good == 'food') {
//         return(9)
//     } else if (good == 'other'){
//         return(21)
//     }else{
//         return (0)
//     }
// }

// console.log(vatPercentage('tv'));

//herschrijven met beide functions samen

const VAT = function(base, good){
    
    const vatPercentage = function (good){
        if (good == 'food') {
            return(9)
        } else if (good == 'other'){
            return(21)
        }else{
            return (0)
        }
    }
    //return base*(vatPercentage(good)/100); alleen VAT

    //return (base*(vatPercentage(good)/100))+base; //prijs incl VAT

    let price = [base*(vatPercentage(good)/100), (base*(vatPercentage(good)/100))+base]

    return "the VAT is " + price[0] + " and the price incl VAT is " + price[1] 

}

console.log(VAT(23, 'food'));

//gevraagde gegevens moeten zijn "prijs zonder VAT" en "product type: food, geen VAT of other"


// function parameters:
//type of good (food, no VAT or other)
//base price

// const price = function(good){
//      if (good == food){
//         //9% VAT

//     }else if (good == other){
//         //21% VAT
//         } else {
//         //geen VAT
//             }
//     }

