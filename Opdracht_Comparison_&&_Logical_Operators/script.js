const age = 18;
const isFemale = true;
const driverStatus = "drunk";
const firstName = "Willem"

// if (age >= 18){
//     console.log("Are you Female?")
//     if (isFemale){
//         console.log("You are allowed in, welcome!")
//             if(age <= 25){
//                 console.log("You get 50% discount on your drinks!")    
//                 console.log("You are leaving? Have you been drinking?")
//                         if (driverStatus == "designated"){
//                             console.log("Smart! Have a nice evening!")
//                         } else{
//                                 console.log("It might be better to take a taxi")
//                         };
//             }else{
//                     console.log("Enjoy your evening!")
//                     console.log("You are leaving? Have you been drinking?")
//                         if (driverStatus == "designated"){
//                             console.log("Smart! Have a nice evening!")
//                         } else{
//                                 console.log("It might be better to take a taxi")
//                         };
//             }
//     } else{
//         console.log("Only ladies tonight boy, sorry.")
//     };
// } else{
//         console.log("You are to young, I am sorry.")
// };

if (age >= 18){
    console.log("Are you Female?")
    if (isFemale){
        console.log("You are allowed in, welcome!")
        console.log("You are leaving? Have you been drinking?")
        if (driverStatus == "designated"){
            console.log("Smart! Have a nice evening!")
        } else{
                console.log("It might be better to take a taxi")
        };
    } else{
        console.log("Only ladies tonight boy, sorry.")
    };
} else{
        console.log("You are to young, I am sorry.")
};

console.log("50% discount check:")

if (age >= 18 && age <= 25){
    console.log("You get 50% discount!");
}else{
    console.log("Have a nice evening!")
}

if (firstName == "Sarah" || firstName == "Bram"){

    console.log("You get a free beer!")

}else {

    console.log("Hello "+ firstName + "!")

};

const totalAmount = 20;

if (totalAmount >= 25){

    if(totalAmount >= 50){

        if(totalAmount >= 100){
            console.log("WOW! You get a free bottle of champagne!")
        }else{
            console.log("You get free Nachos! Enjoy")
        }

    }else{
        console.log("You get free bitterballen! Enjoy")
    }

}else{
    console.log("I hope you had a nice evening!")
};