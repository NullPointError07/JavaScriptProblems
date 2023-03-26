/*
Problem 3: Is Less or Greater than seven

তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input : 6

Output: -1 
 */


function isLGSeven(num) {
    return num - 7 < 0 ? num - 7 : num * 2;
  }
// above function checks whether the number is greater or lesser then 7. Then subtracts or multiplies according to the condition.

console.log(isLGSeven(6));