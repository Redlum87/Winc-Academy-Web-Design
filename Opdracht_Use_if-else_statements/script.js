const age = 18;
const isFemale = true;
const driverStatus = "drunk";

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

