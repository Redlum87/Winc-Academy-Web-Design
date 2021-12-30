const biggerThen = function(number){
    if(number > 100){
        return true
    }else {
        return false
    }
}

// const answer1 = biggerThen(101);
// console.log(answer1);

// const answer2 = biggerThen(100);
// console.log(answer2);

// const answer3 = biggerThen(99);
// console.log(answer3);

console.log(biggerThen(100));
console.log(biggerThen(101));
console.log(biggerThen(99));

//this is a function that produces something. 
//Therefore it has to return something.

const brendaBot = function(max, current, age){
    if(current < max && age >= 18){
        return "come in"
    }else if(age >= 18 && current >= max){
        return "it's to busy now, come back later"
        }else{
            return "this is a club for adults"
        }
}

console.log(brendaBot(100, 50, 18)); //come in
console.log(brendaBot(100, 100, 18)); //its to busy
console.log(brendaBot(100, 50, 17)); //for adults
console.log(brendaBot(100, 101, 18)); //to busy
console.log(brendaBot(100, 101, 17)); //for adults

//This is a function that does something

