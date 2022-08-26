// This calculates a value and its frequency.

// For this problem, create a function "Same" that accepts two arrays and calculates their same frequency but to the square.
// For example:
// We neer to return a boolean( True or False)

// ([1,2,3], [1,9,4]) True 
// ([1,2,2], [4,1,1]) False, it needs to have the same frequency.

// We create the objects to break down the content of the array of string.
//Clasify what is an object.
// So for this problem we need to compare the two arrarys, I meant compare the values. 


function same (arr1, arr2){

    if( arr1.length !== arr2.length){
        return false;
    }
    // Create the objects
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // We create the four loop to count the frequency of each value .
    for ( let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) +1 
    }

    for( let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    // Now, we check the frequency in our terminal 
        console.log(frequencyCounter1);
        console.log(frequencyCounter2);

    // So far, we have the objects created and we have to COMPARE them now.
    for (let key in frequencyCounter1){

        //We check if the key is in the second counter
        if(!(key **2 in frequencyCounter2)){
            return false;
        }
        // Now, we check if there are the same amount of keys
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}


console.log(same([1,2,3,2,5], [9,1,4,4,11]));