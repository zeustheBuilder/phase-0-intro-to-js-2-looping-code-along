// for (let age = 30; age < 40; age++) {
    // console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
// }


// const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
    // for (let i = 0; i < gifts.length; i++) {
        // console.log(`Wrapped ${gifts[i]} and added a bow!`);
        // debugger;
    // }

    // return gifts;
// }

// wrapGifts(gifts);



function writeCards(namesArray, event) {
    let thankYouCards = [];
    
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }

    return thankYouCards;
}


function countDown(startingNumber) {
     while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -= 1;
     }

     console.log(startingNumber);
}



