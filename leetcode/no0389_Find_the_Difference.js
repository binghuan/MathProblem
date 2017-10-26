/*
389. Find the Difference

Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

Example:

Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var DBG = false;
    if(DBG)console.log(">> findTheDifference: ", s,t, s.length, t.length);

    var temp = "";
    for(var i =0; i< t.length ; i++) {
        var pos = s.indexOf(t[i]);
        if(DBG)console.log("pos: ", pos, t[i], s);
        if( pos != -1) {
            s = s.replace(t[i],"");
        } else {
            temp += t[i];
        }
    }

    if(DBG)console.log("s = ", s);
    if(DBG)console.log("t = ", temp);

    if(temp !== "") {
        if(DBG)console.log("ANS: ", temp);
        return temp;
    } else if(s !== "") {
        if(DBG)console.log("ANS: ", s);
        return s;
    }
};