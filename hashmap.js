/*
================================================================================
HASHMAP PRACTICE & LEARNING
================================================================================
Purpose: Get familiar with HashMap/Dictionary operations and patterns
HashMap = Key-Value pairs with O(1) average lookup, insert, and delete

Common Interview Uses:
- Frequency counting (character/word counts)
- Fast lookups (Two Sum, finding duplicates)
- Caching results
- Grouping/categorizing data
================================================================================
*/

// ================================================================================
// SECTION 1: BASIC HASHMAP OPERATIONS
// ================================================================================

// 1. Using a plain object as a hashmap
const ages = {};

// Insert (set)
ages["alice"] = 25;
ages["bob"] = 32;

// Read (get)
console.log("Alice age:", ages["alice"]); // 25

// Update
ages["alice"] = 26;

// Check existence
console.log("Has charlie?", "charlie" in ages); // false

// Delete
delete ages["bob"];
console.log("Ages after delete:", ages);


// ================================================================================
// SECTION 2: USING MAP (Built-in JavaScript)
// ================================================================================
// Map is better than plain objects for hashmaps because:
// - Can use any type as key (not just strings)
// - Maintains insertion order
// - Has size property
// - Better for frequent additions/deletions

const userScores = new Map();

// Set (insert/update)
userScores.set("player1", 100);
userScores.set("player2", 85);
userScores.set("player3", 92);

// Get
console.log("\nPlayer1 score:", userScores.get("player1")); // 100

// Has (check existence)
console.log("Has player4?", userScores.has("player4")); // true

// Size
console.log("Number of players:", userScores.size); // 3

// Delete
userScores.delete("player2");

// Iterate through Map
console.log("\nAll scores:");
for (let [player, score] of userScores) {
  console.log(`${player}: ${score}`);
}

// Clear all
// userScores.clear();


// ================================================================================
// SECTION 3: FREQUENCY COUNTER PATTERN (Very Common!)
// ================================================================================

/*
PROBLEM: Count Character Frequency
Given a string, count how many times each character appears
*/

function countCharacterFrequency(str) {
  // Your solution here
  const frequency = new Map();
  for (let char of str) {
    // I need help understanding whats going to happen here.
    if(frequency.has(char)) {
      frequency.set(char, frequency.get(char) + 1);
    } else {
      frequency.set(char, 1);
    }
  }
  // what returns here?
  return Object.fromEntries(frequency);
}
// 
console.log("\nCharacter frequency:");
console.log(countCharacterFrequency("hello")); 
// Expected: { h: 1, e: 1, l: 2, o: 1 }


/*
PROBLEM: Count Word Frequency
Given an array of words, count how many times each word appears
*/

function countWordFrequency(words) {
  // Your solution here
  const frequency = new Map();
  for (let word of words) {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  }
  return Object.fromEntries(frequency);
}

console.log("\nWord frequency:");
console.log(countWordFrequency(["apple", "banana", "apple", "orange", "banana", "apple"]));
console.log(countWordFrequency(["apple", "banana", "bannana", "orange", "banana", "apple"]));
// Expected: { apple: 3, banana: 2, orange: 1 }


// ================================================================================
// SECTION 4: LOOKUP PATTERN (Finding/Checking)
// ================================================================================

/*
PROBLEM: Two Sum (LeetCode #1)
Given an array of numbers and a target, find two numbers that add up to target.
Return their indices.
Hint: Use hashmap to store numbers you've seen and their indices
*/

function twoSum(nums, target) {
  // Your solution here
  const numMap = new Map();
  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if(numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
}

console.log("\nTwo Sum:");
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Expected: [1, 2]

/*
PROBLEM: First Unique Character
Find the first character in a string that appears only once.
Return its index, or -1 if none exists.
Hint: Use hashmap to count frequencies, then find first with count = 1
*/

// function firstUniqueChar(s) {
//   // Your solution here
// }
// 
// console.log("\nFirst unique character:");
// console.log(firstUniqueChar("leetcode"));    // Expected: 0 (l)
// console.log(firstUniqueChar("loveleetcode")); // Expected: 2 (v)
// console.log(firstUniqueChar("aabb"));        // Expected: -1


// ================================================================================
// SECTION 5: GROUPING PATTERN (Categorizing Data)
// ================================================================================

/*
PROBLEM: Group Anagrams (LeetCode #49)
Given an array of strings, group anagrams together.
Hint: Sort each word to create a key, use that key in hashmap
*/

// function groupAnagrams(strs) {
//   // Your solution here
// }
// 
// console.log("\nGroup anagrams:");
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// // Expected: [["eat","tea","ate"], ["tan","nat"], ["bat"]]


/*
PROBLEM: Group People by Age Range
Given array of people with ages, group them into age ranges:
- 0-17: "minor"
- 18-64: "adult"  
- 65+: "senior"
Return object with arrays for each category
*/

// function groupByAgeRange(people) {
//   // Your solution here
// }
// 
// const people = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 70 },
//   { name: "Dave", age: 30 }
// ];
// console.log("\nGroup by age:");
// console.log(groupByAgeRange(people));


// ================================================================================
// SECTION 6: CACHING PATTERN (Memoization)
// ================================================================================

/*
PROBLEM: Fibonacci with Caching
Calculate Fibonacci number using hashmap to cache results.
This prevents recalculating the same values multiple times.
Without cache: O(2^n) - Very slow!
With cache: O(n) - Fast!
*/

// function fibonacci(n, cache = {}) {
//   // Your solution here
// }
// 
// console.log("\nFibonacci with cache:");
// console.log(fibonacci(10)); // Expected: 55
// console.log(fibonacci(20)); // Expected: 6765


// ================================================================================
// SECTION 7: REAL-WORLD EXAMPLES
// ================================================================================

/*
PROBLEM: Shopping Cart
Implement a shopping cart using a hashmap:
- addItem(itemName, price)
- removeItem(itemName)
- getTotal()
- getItems()
*/

// class ShoppingCart {
//   constructor() {
//     // Your solution here
//   }
//   
//   addItem(itemName, price) {
//     // Your solution here
//   }
//   
//   removeItem(itemName) {
//     // Your solution here
//   }
//   
//   getTotal() {
//     // Your solution here
//   }
//   
//   getItems() {
//     // Your solution here
//   }
// }
// 
// const cart = new ShoppingCart();
// cart.addItem("apple", 1.50);
// cart.addItem("banana", 0.75);
// cart.addItem("apple", 1.50); // Add another apple
// console.log("\nShopping cart:", cart.getItems());
// console.log("Total:", cart.getTotal());


/*
PROBLEM: User Session Manager
Track active user sessions:
- login(username) - creates session with timestamp
- logout(username) - removes session
- isActive(username) - checks if user is logged in
- getActiveSessions() - returns all active users
*/

// class SessionManager {
//   constructor() {
//     // Your solution here
//   }
//   
//   login(username) {
//     // Your solution here
//   }
//   
//   logout(username) {
//     // Your solution here
//   }
//   
//   isActive(username) {
//     // Your solution here
//   }
//   
//   getActiveSessions() {
//     // Your solution here
//   }
// }


// ================================================================================
// SECTION 8: PRACTICE CHALLENGES
// ================================================================================

/*
CHALLENGE 1: Contains Duplicate (LeetCode #217)
Return true if any value appears at least twice in the array.
*/

// function containsDuplicate(nums) {
//   // Your solution here
// }


/*
CHALLENGE 2: Valid Anagram (LeetCode #242)
Return true if two strings are anagrams of each other.
*/

// function isAnagram(s, t) {
//   // Your solution here
// }


/*
CHALLENGE 3: Longest Consecutive Sequence (LeetCode #128)
Find the length of the longest consecutive elements sequence.
Example: [100, 4, 200, 1, 3, 2] → 4 (sequence: 1,2,3,4)
Hint: Use Set (similar to hashmap) for O(1) lookups
*/

// function longestConsecutive(nums) {
//   // Your solution here
// }


/*
CHALLENGE 4: Top K Frequent Elements (LeetCode #347)
Given array and number k, return k most frequent elements.
Example: nums = [1,1,1,2,2,3], k = 2 → [1,2]
*/

// function topKFrequent(nums, k) {
//   // Your solution here
// }


// ================================================================================
// QUICK REFERENCE
// ================================================================================

/*
OBJECT vs MAP:

OBJECT (Plain {}):
- Keys must be strings or symbols
- Simpler syntax: obj.key or obj["key"]
- Faster for simple cases
- Good for: Fixed keys, JSON-like data

MAP (new Map()):
- Keys can be ANY type (objects, functions, etc.)
- Methods: .set(), .get(), .has(), .delete(), .clear()
- Has .size property
- Maintains insertion order
- Good for: Dynamic keys, frequent add/delete, need size

WHEN TO USE HASHMAP:
✓ Need O(1) lookups
✓ Counting frequencies
✓ Checking duplicates
✓ Grouping data
✓ Caching results
✓ Fast existence checks

TIME COMPLEXITY:
- Insert: O(1) average
- Get: O(1) average
- Delete: O(1) average
- Search by value: O(n)
*/