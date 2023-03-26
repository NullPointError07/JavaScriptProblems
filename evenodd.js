/*
Problem 2: Finding even or odd


তোমাকে একটা function দেওয়া হবে called evenOdd(). এটা ইনপুট হিসেবে একটা string নিবে। 


এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘even’ অথবা ‘odd’ ।Sample Input & Output:


Input: ‘Phero’
Output: odd

Input: ‘Batch7’
Output: even

Input: ‘chatgpt’
Output: odd 
 */


function evenOdd (str){
    return str.length %2 === 0 ? "even" : "odd";
}

console.log(evenOdd("Helloo"));