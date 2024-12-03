//Uppgift 1. 

function greet () {

    console.log("#Uppgift 1. Hello world!");
}


//Uppgift 2. 

function favoriteNumber () {

    console.log("#Uppgift 2. " + 42);
}

//Uppgift 3. Använder en arrow function för att ta fram ett random nummer från responses

const magicEightBall = () => {

    const responses = ["Yes", "No", "Maybe", "Ask again later"];
    console.log("#Uppgift 3. ", responses[Math.floor(Math.random() * responses.length)]);
};


//Uppgift 4. fortsätter använda arrow functionen då den är enklast

const getCurrentYear = () => {
    console.log("#Uppgift 4. ", new Date().getFullYear()); //dessa object new Date och .getFullYear finns redan i DATE som object
};

const tellJoke = () => {

    const jokeList = [
        "Funny guy walks into a bar...", 
        "An animal fell down a hole...", 
        "Knock knock..."];

    console.log("Uppgift 5. ", jokeList[Math.floor(Math.random() * jokeList.length)]);
};

//Uppgift 6. 

const personalGreeting = (name) => {
console.log("#Uppgift 6. Hello, ", name, "!");
    
};


//Uppgift 7. 

const add = (sum1, sum2) => {
    console.log("#Uppgift 7. ", sum1 + sum2);
};

//Uppgift 8. 

const ageInMonths = (yearsOld) => {
    let total = 0;
    total += yearsOld * 12;
    console.log("#Uppgift 8. ", total);
};

//Uppgift 9.

const celsiusToFahrenheit = (celcius) => {
    const farenheit = (celcius * 9/5 + 32);
    console.log("#Uppgift 9", farenheit);
};


//Uppgift 10.

const getFullName = (firstname, surname) => {
    console.log(`#Uppgift 10. ${firstname} ${surname}`);
};


//Uppgift 11. 

const calculateArea = (lenght, width) => {
    const area = lenght * width;
    console.log(area);
};

//Uppgift 12. 

const findMax = (a, b) => {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
};

//Uppgift 13. 

const countVowels = (randomString) => {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of randomString) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log(count);
};

//Uppgift 14. 

const calculateDiscount = (price, discount) => {
    const discountAmount = (price * discount) / 100;
    const endResult = price - discountAmount;
    console.log(endResult);
};

//Uppgift 15. 

const reverseString = (rStr) => {
        let reversed = "";
        for (let i = rStr.length - 1; i >= 0; i--) {
            reversed += rStr[i];
        }
        console.log(reversed);
};


//Uppgift 16. Intermediate 

const isPalindrome = str => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ''); //va tvungen o kolla med chatgpt för att lösa denna men gör den till lowercase först sen ta bort alla andra tecken
    return cleaned === cleaned.split('').reverse().join(''); //och sedan kola om stringen som ja har stämmer baklänges och framlänges och 
};

