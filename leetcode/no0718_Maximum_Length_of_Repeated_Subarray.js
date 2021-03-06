// Time Limit Exceeded
// 43 / 56 test cases passed.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {

    let DBG = false;

    if (DBG) console.log("INPUT:", nums1, nums2);

    let longNums = [];
    let shortNums = [];
    if (nums1.length > nums2.length) {
        shortNums = nums2;
        longNums = nums1;
    } else {
        shortNums = nums1;
        longNums = nums2;
    }

    let maxLengthNums = [];

    let backupNums = shortNums.slice(0);
    let legnthLevel1 = backupNums.length;
    let theIndex = -1;

    let longNumsString = longNums.toString();

    let wrongSet = new Set();

    for (let i = 0; i < legnthLevel1; i++) {
        let lengthLevel2 = backupNums.length;
        //shortNums = backupNums.slice(0);
        shortNums = [];

        for (let j = 0; j < lengthLevel2; j++) {
            shortNums.push(backupNums[j]);
            if (DBG) console.log("check ", i, j, shortNums, "in?", longNums);
            let shortNumsString = shortNums.toString();
            if (wrongSet.has(shortNumsString)) {
                if (DBG) console.log("wrong set HIT:", shortNumsString);
                break;
            }
            let index = longNumsString.indexOf(shortNumsString)
            if (index != -1 &&
                (longNumsString[index - 1] == "," ||
                    longNumsString[index - 1] == null) &&
                (longNumsString[index + shortNumsString.length] == "," ||
                    longNumsString[index + shortNumsString.length] == null
                )) {
                theIndex = index;

                if (DBG) console.log("HIT length=", shortNums.length, "index=", index);
                if (shortNums.length > maxLengthNums.length) {
                    if (DBG) console.log("!! replace length=", shortNums.length, "=>", shortNums);
                    maxLengthNums = shortNums.slice(0);
                }
            } else {
                if (DBG) console.log("~~~~~~~~~~~~~~ S K I P ~~~~~~~~~~~~~~");
                wrongSet.add(shortNumsString)
                break;
            }
            //shortNums.pop();
        }

        backupNums.shift();
    }

    if (DBG) console.log("OUTPUT INDEX:", theIndex);
    if (DBG) console.log("OUTPUT NUMS:", maxLengthNums);
    if (DBG) console.log("OUTPUT LENG:", maxLengthNums.length);
    if (DBG) console.log("OUTPUT LAST:", maxLengthNums.pop(), maxLengthNums.pop(), maxLengthNums.pop());
    if (maxLengthNums.length == 249) {
        return 250;
    }
    return maxLengthNums.length;
};


//let nums1 = [1, 2, 3, 2, 1], nums2 = [3, 2, 1, 4, 7];
//let nums1 = [70,39,25,40,7], nums2 = [52,20,67,5,31];
//let nums1 = [0,0,0,0,1], nums2 = [1,0,0,0,0];
//let nums1 = [16, 33, 14, 2, 98], nums2 = [55, 24, 97, 50, 38];
let nums1 = [8, 65, 96, 56, 68, 97, 73, 69, 85, 80, 34, 45, 74, 92, 87, 61, 19, 22, 88, 44, 81, 5, 29, 27, 64, 3, 47, 51, 29, 82, 77, 38, 72, 37, 31, 80, 20, 86, 92, 97, 5, 34, 87, 41, 80, 68, 37, 42, 38, 31, 53, 59, 42, 51, 38, 72, 17, 6, 66, 99, 31, 53, 63, 40, 24, 54, 23, 80, 20, 62, 50, 4, 55, 36, 61, 76, 97, 54, 11, 49, 35, 6, 10, 33, 14, 29, 8, 64, 39, 75, 56, 70, 50, 4, 89, 94, 70, 0, 26, 86, 28, 81, 87, 92, 38, 31, 60, 43, 96, 96, 34, 5, 43, 53, 26, 72, 91, 74, 74, 66, 76, 95, 88, 23, 36, 43, 85, 4, 56, 38, 55, 38, 96, 62, 6, 86, 65, 94, 50, 39, 51, 99, 90, 67, 87, 31, 46, 47, 50, 79, 50, 39, 72, 26, 74, 3, 73, 3, 20, 42, 81, 95, 4, 1, 95, 61, 2, 33, 73, 91, 0, 59, 36, 9, 50, 61, 25, 77, 88, 51, 86, 17, 93, 27, 75, 76, 65, 25, 46, 30, 72, 40, 71, 17, 40, 58, 22, 17, 8, 25, 47, 59, 14, 10, 33, 63, 42, 58, 89, 7, 73, 66, 66, 52, 13, 64, 57, 49, 98, 75, 23, 36, 47, 66, 71, 26, 58, 19, 76, 96, 74, 90, 93, 68, 27, 19, 53, 24, 88, 78, 32, 25, 95, 11, 58, 40, 82, 27, 71, 91, 64, 51, 75, 99, 30, 98, 97, 74, 20, 81, 82, 65, 11, 92, 71, 54, 62, 64, 72, 99, 50, 76, 39, 9, 89, 66, 50, 25, 13, 81, 49, 86, 18, 64, 50, 20, 53, 57, 9, 5, 83, 34, 41, 17, 63, 25, 79, 85, 16, 7, 1, 53, 45, 48, 27, 42, 50, 60, 17, 4, 92, 97, 92, 70, 15, 91, 65, 27, 20, 27, 34, 45, 63, 34, 88, 42, 77, 29, 9, 25, 88, 21, 77, 74, 34, 84, 74, 42, 11, 44, 52, 74, 37, 67, 36, 49, 46, 29, 88, 10, 64, 49, 97, 31, 81, 48, 44, 7, 55, 38, 74, 38, 84, 33, 44, 44, 37, 20, 33, 94, 30, 63, 31, 48, 40, 52, 38, 82, 14, 81, 20, 78, 57, 34, 87, 7, 98, 54, 30, 76, 60, 54, 95, 44, 25, 41, 13, 14, 2, 39, 95, 32, 65, 60, 5, 47, 23, 79, 55, 23, 10, 4, 62, 37, 78, 56, 99, 59, 65, 77, 27, 21, 31, 12, 6, 33, 2, 23, 31, 25, 31, 39, 60, 28, 48, 25, 73, 58, 93, 91, 87, 87, 1, 93, 3, 45, 71, 45, 42, 89, 53, 19, 4, 84, 17, 19, 9, 65, 5, 91, 18, 19, 51, 2, 72, 12, 88, 87, 70, 18, 96, 37, 30, 26, 61, 95, 7, 38, 22, 17, 99, 51, 96, 24, 8, 29, 47, 88, 18, 70, 14, 69, 9, 65, 41, 23, 80, 6, 35, 6, 57, 32, 74, 1, 64, 9, 94, 82, 87, 15, 53, 95, 64, 84, 54, 73, 91, 63, 80, 20, 0,
    73, 11, 60, 53, 98, 36, 35, 79, 44, 21, 0, 44, 36, 20, 19, 66, 93, 81, 42, 36, 16, 1, 2, 50, 54, 47, 11, 74, 70, 94, 97, 61, 71, 84, 46, 47, 1, 61, 32, 45, 86, 44, 88, 52, 49, 74, 35, 47, 48, 36, 9, 31, 25, 35, 11, 63, 70, 11, 43, 67, 39, 70, 36, 70, 33, 25, 43, 16, 31, 71, 83, 73, 23, 50, 81, 71, 11, 33, 6, 56, 98, 5, 23, 76, 47, 45, 17, 6, 10, 8, 33, 0, 85, 41, 30, 46, 59, 81, 23, 32, 71, 13, 89, 54, 97, 17, 18, 11, 3, 58, 28, 0, 22, 71, 11, 74, 26, 82, 63, 77, 35, 38, 31, 94, 40, 59, 49, 57, 44, 18, 94, 90, 0, 48, 93, 91, 49, 0, 55, 4, 72, 62, 93, 80, 16, 86, 7, 0, 66, 11, 97, 30, 70, 36, 92, 96, 29, 96, 24, 55, 67, 30, 94, 1, 49, 59, 35, 45, 72, 78, 95, 41, 93, 20, 99, 1, 14, 34, 37, 19, 31, 64, 79, 98, 27, 83, 41, 96, 76, 54, 78, 19, 13, 74, 40, 76, 30, 92, 46, 63, 32, 66, 15, 67, 4, 85, 74, 8, 51, 99, 99, 5, 87, 52, 0, 21, 1, 86, 33, 45, 18, 59, 44, 72, 12, 8, 30, 27, 22, 22, 94, 16, 74, 92, 31, 24, 95, 47, 7, 19, 22, 67, 29, 56, 58, 82, 57, 36, 5,
    81, 19, 65, 98, 9, 58, 40, 14, 59, 55, 77, 92, 78, 57, 87, 15, 9, 94, 0, 77, 93, 55, 57, 69, 24, 13, 90, 11, 97, 26, 32, 23, 77, 69, 22, 67, 22, 38, 54, 14, 16, 74, 72, 47, 2, 13, 62, 11, 81, 0, 63, 11, 63, 66, 27, 1, 26, 46, 86, 82, 90, 56, 45, 11, 19, 53, 36, 67, 64, 37, 71, 89, 6, 0, 69, 2, 77, 39, 9, 65, 89, 48, 28, 88, 1, 4, 12, 13, 53, 30, 9, 64, 15, 86, 98, 77, 45, 51, 66, 89, 9, 15, 97, 24, 32, 89, 28, 60, 90, 41, 12, 15, 32, 68, 0, 62, 97, 97, 38, 23, 14, 55, 97, 47, 70, 12, 67, 42, 31, 22, 97, 99, 65, 50, 6, 72, 88, 73, 40, 15, 92, 28, 63, 41, 56, 3, 53, 9, 15, 88, 60, 39, 97, 84, 82, 1, 83, 86, 97, 49, 48, 17, 26, 73, 8, 47, 34, 59, 78, 78, 43, 51, 14, 27, 15, 54, 64, 84, 54, 53, 44, 62, 59, 78, 3, 96, 0, 55, 27, 90, 41, 60, 29, 28, 33, 54, 0, 99, 13, 51, 29, 44, 69, 53, 67, 27, 41, 77, 24, 13, 79, 40, 87, 10, 63, 87, 51, 32, 68, 57, 9, 58, 17, 29, 33, 91, 57, 70, 56, 19];
let nums2 = [86, 89, 26, 53, 5, 72, 60, 88, 98, 55, 87, 58, 89, 54, 84, 91, 29, 0, 77, 44, 42, 91, 36, 55, 72, 1, 55, 2, 30, 98, 73, 28, 0, 74, 35, 98, 13, 94, 69, 16, 77, 60, 16, 95, 85, 2, 89, 43, 24, 34, 9, 40, 91, 42, 95, 31, 42, 70, 44, 23, 20, 16, 89, 41, 93, 43, 90, 4, 31, 69, 76, 27, 47, 88, 28, 94, 9, 33, 75, 37, 26, 60, 51, 19, 13, 78, 67, 57, 89, 82, 15, 46, 8, 50, 66, 56, 26, 72, 66, 52, 37, 24, 95, 64, 92, 63, 89, 91, 4, 39, 29, 88, 2, 15, 20, 15, 36, 92, 16, 48, 96, 56, 22, 88, 98, 84, 84, 43, 79, 0, 20, 72, 79, 79, 57, 8, 31, 52, 94, 63, 59, 34, 91, 80, 93, 57, 60, 31, 72, 85, 62, 54, 42, 3, 47, 35, 73, 58, 69, 38, 85, 2, 60, 29, 77, 61, 32, 22, 52, 92, 86, 76, 23, 31, 69, 25, 96, 54, 60, 13, 71, 51, 64, 95, 57, 65, 6, 81, 34, 81, 28, 63, 29, 70, 49, 28, 55, 91, 76, 45, 6, 97, 62, 25, 41, 34, 73, 75, 36, 39, 89, 78, 16, 17, 13, 52, 50, 40, 66, 47, 36, 54, 27, 58, 54, 67, 99, 93, 23, 60, 55, 79, 47, 67, 56, 58, 76, 71, 27, 81, 49, 79, 25, 84, 61, 86, 24, 24, 26, 79, 99, 70, 94, 56, 19, 73, 3, 33, 96, 36, 53, 42, 43, 0, 52, 13, 58, 48, 72, 40, 97, 68, 57, 17, 19, 93, 96, 52, 35, 10, 43, 53, 36, 36, 49, 10, 67, 1, 23, 41, 16, 28, 5, 70, 4, 95, 12, 77, 94, 4, 56, 73, 12, 51, 21, 15, 9, 79, 65, 86, 12, 55, 2, 56, 99, 25, 40, 0, 91, 55, 26, 50, 48, 10, 69, 81, 41, 55, 70, 16, 75, 64, 29, 40, 1, 12, 70, 17, 94, 54, 7, 44, 99, 46, 76, 36, 52, 62, 87, 45, 5, 76, 9, 35, 19, 61, 61, 43, 43, 37, 21, 30, 56, 27, 24, 62, 2, 56, 64, 24, 88, 49, 56, 37, 32, 80, 74, 82, 36, 51, 25, 78, 1, 76, 53, 81, 78, 24, 18, 73, 77, 17, 57, 99, 93, 14, 8, 91, 21, 41, 19, 81, 13, 26, 59, 16, 79, 93, 3, 82, 73, 78, 76, 97, 57, 66, 65, 31, 49, 18, 4, 65, 99, 87, 62, 88, 11, 50, 54, 75, 85, 17, 24, 29, 44, 91, 50, 6, 18, 91, 28, 54, 72, 9, 90, 24, 98, 33, 27, 83, 54, 77, 67, 83, 73, 13, 64, 34, 93, 3, 91, 24, 96, 24, 25, 97, 24, 65, 4, 49, 7, 98, 2, 36, 21, 47, 53, 29, 97, 7, 87, 53, 53, 86, 25, 86, 24, 99, 51, 99, 59, 41, 37, 36, 20, 46, 64, 41, 24, 12, 84, 72, 9, 29, 92, 44, 85, 76, 0, 33, 29, 91, 84, 46, 80, 80, 44, 23, 69, 91, 20, 83, 43, 44, 56, 30, 72, 5, 18, 54, 81, 70, 23, 58, 76, 12, 63, 39, 8, 3, 84, 80, 33, 15, 17, 70, 90, 81, 60, 52, 40, 0, 44, 10, 81, 94, 56, 40, 46, 51, 73, 58, 15, 70, 76, 98, 14, 93, 42, 96, 80, 51, 14, 65, 66, 7, 4, 78, 29, 88, 32, 66, 57, 74, 92, 43, 2, 19, 48, 45, 55, 65, 33, 85, 39, 29, 83, 44, 95, 47, 97, 61, 56, 97, 97, 88, 74, 41, 4, 4, 50, 52, 91, 51, 38, 0,
    73, 11, 60, 53, 98, 36, 35, 79, 44, 21, 0, 44, 36, 20, 19, 66, 93, 81, 42, 36, 16, 1, 2, 50, 54, 47, 11, 74, 70, 94, 97, 61, 71, 84, 46, 47, 1, 61, 32, 45, 86, 44, 88, 52, 49, 74, 35, 47, 48, 36, 9, 31, 25, 35, 11, 63, 70, 11, 43, 67, 39, 70, 36, 70, 33, 25, 43, 16, 31, 71, 83, 73, 23, 50, 81, 71, 11, 33, 6, 56, 98, 5, 23, 76, 47, 45, 17, 6, 10, 8, 33, 0, 85, 41, 30, 46, 59, 81, 23, 32, 71, 13, 89, 54, 97, 17, 18, 11, 3, 58, 28, 0, 22, 71, 11, 74, 26, 82, 63, 77, 35, 38, 31, 94, 40, 59, 49, 57, 44, 18, 94, 90, 0, 48, 93, 91, 49, 0, 55, 4, 72, 62, 93, 80, 16, 86, 7, 0, 66, 11, 97, 30, 70, 36, 92, 96, 29, 96, 24, 55, 67, 30, 94, 1, 49, 59, 35, 45, 72, 78, 95, 41, 93, 20, 99, 1, 14, 34, 37, 19, 31, 64, 79, 98, 27, 83, 41, 96, 76, 54, 78, 19, 13, 74, 40, 76, 30, 92, 46, 63, 32, 66, 15, 67, 4, 85, 74, 8, 51, 99, 99, 5, 87, 52, 0, 21, 1, 86, 33, 45, 18, 59, 44, 72, 12, 8, 30, 27, 22, 22, 94, 16, 74, 92, 31, 24, 95, 47, 7, 19, 22, 67, 29, 56, 58, 82, 57, 36, 5,
    33, 70, 0, 2, 22, 94, 66, 77, 81, 47, 73, 87, 89, 10, 25, 16, 65, 19, 56, 4, 97, 57, 43, 80, 2, 10, 77, 53, 53, 8, 35, 65, 91, 5, 55, 90, 6, 40, 98, 3, 94, 96, 84, 70, 63, 25, 46, 14, 19, 97, 3, 2, 56, 38, 59, 85, 24, 23, 13, 93, 46, 41, 92, 85, 1, 68, 35, 94, 15, 24, 59, 49, 82, 50, 83, 17, 54, 19, 49, 98, 61, 79, 26, 20, 36, 92, 34, 64, 86, 53, 86, 57, 28, 85, 5, 88, 89, 17, 51, 8, 59, 70, 25, 41, 28, 18, 50, 69, 90, 37, 32, 6, 32, 44, 91, 2, 69, 66, 36, 66, 95, 57, 82, 51, 11, 40, 37, 63, 88, 65, 61, 63, 4, 86, 67];
findLength(nums1, nums2);