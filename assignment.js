// Problem: 1

function anaToVori(ana){
    if(ana < 0){
        console.log('Please Enter Positive Number');
    }
    else if (typeof(ana) != 'number'){
        console.log('Input Type can only be Number');
    }
    else {
        let vori = ana / 16;
        return vori;
    }
    
}

// const firstVori = anaToVori(32);
// console.log('Vori: ', firstVori);

//Problem: 2

function pandaCost(singara, samucha, jilapi) {
    const perUnitSingara = 7;
    const perUnitSamucha = 10;
    const perUnitJilapi = 15;
    let total = 0;

    if (singara < 0 || samucha < 0 || jilapi <0){
        console.log('Please Enter Positive Number');
    }
    else if (typeof(singara) != 'number' || typeof(samucha) != 'number' || typeof(jilapi) != 'number'){
        console.log('Input Type Can Only be Number');
    }
    else {
        total = (perUnitSingara * singara) + (perUnitSamucha * samucha) + (perUnitJilapi * jilapi);
        return total;
    }
}

// const firstCost = pandaCost(1, 0, 1);
// console.log('Total Cost: ', firstCost);

//problem: 3

function picnicBudget(person){
    if(person < 0){
        console.log('Please Enter Positive Number');
    }
    else if (typeof(person) != 'number'){
        console.log('Input Type can only be Number');
    }
    else {
        const costPerFirst100Person = 5000;
        const costPerSecond100Person = 4000;
        const costPerPersonOver200 = 3000;

        if(person <= 100){
            const totalCost = costPerFirst100Person * person;
            return totalCost;
        }
        else if(person <= 200){
            const first100Total = 100 * costPerFirst100Person;
            const restPerson = person - 100;
            const second100Total = restPerson * costPerSecond100Person;
            const total = first100Total + second100Total;
            return total;
        }
        else{
            const first100Total = 100 * costPerFirst100Person;
            const second100Total = 100 * costPerSecond100Person;
            const restPerson = person - 200;
            const totalOver200Person = restPerson * costPerPersonOver200;
            const total = first100Total + second100Total + totalOver200Person;
            return total;

        }
    }

}

// const firstBudget = picnicBudget(300);
// console.log('Total Cost: ', firstBudget);

//Problem: 4

function oddFriend(friends){
    if (typeof(friends) != 'object'){
        console.log('Please Enter an Array');
    }
    else {
        for (const element of friends){
            if (element.length % 2 != 0){
                return element;
            }
        }
    }

}

// const friendsArray = ['adad', 'sgsgsg', 'bondhan', 'hghghghg', 'habib', 'munna'];
// const firstOddFriend = oddFriend(friendsArray);
// console.log(firstOddFriend);