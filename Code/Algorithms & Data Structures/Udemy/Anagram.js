// Create a function to determine if two strings are Anagrams.
// Assume that the strings given are lower case, so we do not have edge cases. 
// We pass two strings and we return true or false. 



function validAnagram(str1, str2){

    // Check the length of the strings, if strings are different lenghts they are not anagrams.
    if (str1.length !== str2.length){
        return false;
    }

    // State the Objects 
    let stringCounter1 = {};
    let stringCounter2 = {};

    // Now, we need to count the frequency. 

    for (let val of str1){
        stringCounter1[val] = (stringCounter1[val] || 0) + 1;
    }

    for (let val of str2){
        stringCounter2[val] = (stringCounter2[val] || 0) +1; 
    }

    //We check our objects. 
    console.log(stringCounter1);
    console.log(stringCounter2);


    // Now, we need to compare if the

    for(let key in stringCounter1){

        // Compare if the keys in object 1 exist in object 2
        if(! (key in stringCounter2) ){
            return false;
        }

        //Check the same ammount of keys. 

        if(stringCounter1[key] !== stringCounter2[key]){
            return false;
        }
    }

    return true;

}

console.log(validAnagram('anagram', 'anaaran'));