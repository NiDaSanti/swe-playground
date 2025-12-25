/*
================================================================================
INTERVIEW PREPARATION & PROBLEM-SOLVING PLAYGROUND
================================================================================
Author: Nick Santiago
Last Updated: December 22, 2025

📖 See README.md for:
   - Real-world applications of each problem
   - Study strategies and interview tips
   - Progress tracking and resources

This file contains practice problems organized by difficulty and topic.
================================================================================
*/

// ================================================================================
// PROBLEM TEMPLATE - Use this format for new problems
// ================================================================================
/*
PROBLEM: [Problem Name]
DIFFICULTY: [Easy/Medium/Hard]
SOURCE: [LeetCode/Interview/Practice/etc.]
DATE ATTEMPTED: [Date]

DESCRIPTION:
[Clear description of the problem]

EXAMPLES:
Input: [example input]
Output: [expected output]
Explanation: [why]

CONSTRAINTS:
- [constraint 1]
- [constraint 2]

APPROACH 1: [Approach name]
Time Complexity: O(?)
Space Complexity: O(?)
Notes: [When to use this approach, trade-offs]

APPROACH 2: [Alternative approach if applicable]
Time Complexity: O(?)
Space Complexity: O(?)
Notes: [When to use this approach, trade-offs]

EDGE CASES TO CONSIDER:
- Empty input
- Single element
- Duplicate values
- Negative numbers
- Large inputs
*/

// function solutionName(params) {
//   // Your solution here
// }
// 
// // Test cases
// console.log(solutionName(testInput)); // Expected: expectedOutput


// ================================================================================
// SECTION 1: STRING MANIPULATION
// ================================================================================
// Common patterns: Two pointers, sliding window, character counting

/*
/*
PROBLEM: Character Frequency Counter
DIFFICULTY: Easy
PATTERN: Hash Map / Object for counting
*/

function countCharacters(string) {
  let charCount = {}
  for(let i = 0; i < string.length; i++) {
    if(charCount[string[i]]) {
      charCount[string[i]]++;
    } else {
      charCount[string[i]] = 1;
    }
  }
  return charCount;
}
// Time: O(n), Space: O(k) where k is unique characters
console.log("countCharacters('hello'):", countCharacters("hello")); 
console.log("countCharacters('aabbcc'):", countCharacters("aabbcc"));

/*
PROBLEM: Full Name Formatter
DIFFICULTY: Easy
PATTERN: String manipulation, input sanitization
*/
function fullName(firstName, lastName) {
  return firstName.trim()+ " " + lastName.trim();
}
// Time: O(n), Space: O(n)
console.log("fullName('Nick', 'Santiago'):", fullName("Nick", "Santiago"));

/*
PROBLEM: Greeting with Validation
DIFFICULTY: Easy
PATTERN: Input validation, default values
*/
function greetUser(name) {
  name = name.trim();
  if(name === "") return "Hello, Stranger";
  else return "Hello, " + name + "!";
}
// Time: O(n), Space: O(n)
console.log("greetUser('Nick'):", greetUser("Nick"));
console.log("greetUser(''):", greetUser(""));


// ================================================================================
// SECTION 2: ARRAY OPERATIONS
// ================================================================================

/*
PROBLEM: Array Sum
DIFFICULTY: Easy
PATTERN: Accumulator pattern
*/
function sumArray(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// Time: O(n), Space: O(1)
console.log("sumArray([1, 2, 3, 4, 5]):", sumArray([1, 2, 3, 4, 5]));

/*
PROBLEM: Find Longest Word
DIFFICULTY: Easy
PATTERN: "Best so far" tracking
*/
function longestWord(words) {
  let longest = "";
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
// Time: O(n), Space: O(1)
console.log("longestWord(['apple', 'banana', 'cherry']):", longestWord(["apple", "banana", "cherry"]));

/*
PROBLEM: Count Even Numbers
DIFFICULTY: Easy
PATTERN: Counter pattern, filtering
*/
function countEvens(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
// Time: O(n), Space: O(1)
console.log("countEvens([1, 2, 3, 4, 5, 6]):", countEvens([1, 2, 3, 4, 5, 6]));




// ================================================================================
// SECTION 3: OBJECT MANIPULATION & ARRAY OF OBJECTS                              |
// ================================================================================

/*
PROBLEM: Find Oldest Person
DIFFICULTY: Easy
PATTERN: Finding max element in array of objects
*/
const findOldestPerson = (people) => {
  let oldest = { name: "", age: 0 };
  for(let i = 0; i < people.length; i++) {
    if(people[i].age > oldest.age) {
      oldest = people[i];
    }
  }
  return oldest;
}
// Time: O(n), Space: O(1)
console.log("findOldestPerson:", findOldestPerson([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 25 }
]));

/*
PROBLEM: Calculate Total Price
DIFFICULTY: Easy
PATTERN: Accumulator with objects
*/
const totalPrice = (items) => {
  let total = 0;
  for(let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}
// Time: O(n), Space: O(1)
console.log("totalPrice:", totalPrice([
  { name: "Item1", price: 10.50 },
  { name: "Item2", price: 5.25 },
  { name: "Item3", price: 3.75 }
]));

/*
PROBLEM: Calculate Average Age
DIFFICULTY: Easy
PATTERN: Sum and divide
*/
const getAverageAge = (people) => {
  let totalAge = 0;
  for(let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
  }
  return totalAge / people.length;
}
// Time: O(n), Space: O(1)
console.log("getAverageAge:", getAverageAge([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 20 }
]));

/*
PROBLEM: Categorize By Age Groups
DIFFICULTY: Medium
PATTERN: Multi-bucket categorization
*/
const categorizeByAge = (people) => {
  let categories = {
    minors: [],
    adults: [],
    seniors: []
  }
  for(let i = 0; i < people.length; i++) {
    let person = people[i];
    if(person.age < 18) {
      categories.minors.push(person);
    } else if (person.age >= 18 && person.age < 65) {
      categories.adults.push(person);
    } else {
      categories.seniors.push(person);
    }
  }
  return categories;
}
// Time: O(n), Space: O(n)
console.log("categorizeByAge:", categorizeByAge([
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 70 }
]));

/*
PROBLEM: Find Person By Name
DIFFICULTY: Easy
PATTERN: Linear search with early return
*/
const findByName = (people, name) => {
  for(let i = 0; i < people.length; i++) {
    if(people[i].name === name) {
      return people[i];
    }
  }
  return null;
}
// Time: O(n), Space: O(1)
console.log("findByName('Bob'):", findByName([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 20 }
], "Bob"));


// ================================================================================
// SECTION 4: BASIC ALGORITHMS & HELPER FUNCTIONS                                 |
// ================================================================================

function addThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

function isAdult(age) {
  return age >= 18;
}

function maxOfTwo(num1, num2) {
  return num1 > num2 ? num1 : num2;
}


// ================================================================================
// SECTION 5: COMMON INTERVIEW PATTERNS (Reference)                               |
// ================================================================================

/*
PATTERN: Two Pointers
- Palindrome checking
- Array partitioning
- Finding pairs with given sum in sorted array
- Removing duplicates in-place
*/

/*
PATTERN: Sliding Window
- Maximum/minimum subarray of size k
- Longest substring without repeating characters
- Subarray with given sum
*/

/*
PATTERN: Hash Map / Frequency Counter
- Finding duplicates
- Anagram detection
- Two sum problem
- Character counting
Complexity: Usually O(n) time, O(n) space trade-off
*/

/*
PATTERN: In-Place Array Manipulation
- Space-optimized solutions
- Array rotation
- Removing elements
*/


// ================================================================================
// SECTION 6: COMPLEXITY REFERENCE
// ================================================================================

/*
ARRAY: Access O(1), Search O(n), Insert/Delete ends O(1), Insert/Delete middle O(n)
OBJECT/MAP: Access O(1), Insert O(1), Delete O(1), Search value O(n)
STRING: Access O(1), Concatenation O(n), Substring O(n), Search O(n)
SORTING: Built-in sort O(n log n)
*/


// ================================================================================
// SECTION 7: INTERVIEW BEST PRACTICES
// ================================================================================

/*
BEFORE SOLVING:
- Ask clarifying questions
- Discuss examples and edge cases
- Think about time/space constraints
- Propose approach before coding

EDGE CASES TO CONSIDER:
- Empty input ([], "", null, undefined)
- Single element
- Duplicates, negatives, zero
- Very large inputs

OPTIMIZATION: Brute force → Optimize time → Optimize space → Discuss trade-offs
*/


// ================================================================================
// SECTION 8: INTERMEDIATE PROBLEMS - Arrays & Strings                            |
// ================================================================================

/*
PROBLEM: Two Sum
DIFFICULTY: Easy
PATTERN: Hash Map
SOURCE: LeetCode #1

DESCRIPTION:
Given an array of integers nums and an integer target, return indices of the two 
numbers such that they add up to target.

EXAMPLES:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Input: nums = [3,2,4], target = 6
Output: [1,2]

APPROACH: Hash Map for O(n) solution
Time: O(n), Space: O(n)
*/

// function twoSum(nums, target) {
//   // Your solution here
// }
// 
// console.log(twoSum([2,7,11,15], 9)); // Expected: [0,1]
// console.log(twoSum([3,2,4], 6)); // Expected: [1,2]


/*
PROBLEM: Valid Anagram
DIFFICULTY: Easy
PATTERN: Hash Map / Frequency Counter
SOURCE: LeetCode #242

DESCRIPTION:
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An anagram uses all original letters exactly once.

EXAMPLES:
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

CONSTRAINTS:
- Strings contain lowercase English letters only
- Consider case sensitivity

APPROACH: Character frequency comparison
Time Complexity: O(n)
Space Complexity: O(1) - max 26 letters

EDGE CASES:
- Different lengths
- Empty strings
- Single character
*/

// function isAnagram(s, t) {
//   // Your solution here
// }
// 
// console.log(isAnagram("anagram", "nagaram")); // Expected: true
// console.log(isAnagram("rat", "car")); // Expected: false


/*
PROBLEM: Reverse String
DIFFICULTY: Easy
PATTERN: Two Pointers
SOURCE: LeetCode #344

DESCRIPTION:
Write a function that reverses a string in-place. The input string is given as 
an array of characters.

EXAMPLES:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

APPROACH: Two pointers from both ends
Time Complexity: O(n)
Space Complexity: O(1)

EDGE CASES:
- Empty array
- Single character
- Even vs odd length
*/

// function reverseString(s) {
//   // Your solution here - modify array in place
// }
// 
// let test1 = ["h","e","l","l","o"];
// reverseString(test1);
// console.log(test1); // Expected: ["o","l","l","e","h"]


/*
PROBLEM: Contains Duplicate
DIFFICULTY: Easy
PATTERN: Hash Set
SOURCE: LeetCode #217

DESCRIPTION:
Given an integer array nums, return true if any value appears at least twice,
and return false if every element is distinct.

EXAMPLES:
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

APPROACH: Use Set to track seen numbers
Time Complexity: O(n)
Space Complexity: O(n)

EDGE CASES:
- Empty array
- All duplicates
- No duplicates
*/

// function containsDuplicate(nums) {
//   // Your solution here
// }
// 
// console.log(containsDuplicate([1,2,3,1])); // Expected: true
// console.log(containsDuplicate([1,2,3,4])); // Expected: false


// ================================================================================
// SECTION 9: INTERMEDIATE PROBLEMS - Array Manipulation
// ================================================================================

/*
PROBLEM: Remove Duplicates from Sorted Array
DIFFICULTY: Easy
PATTERN: Two Pointers (In-place)
SOURCE: LeetCode #26

DESCRIPTION:
Remove duplicates from sorted array in-place. Return new length. Order must be maintained.

EXAMPLES:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

APPROACH: Slow-fast pointer technique
Time Complexity: O(n)
Space Complexity: O(1)

REAL WORLD: Database result deduplication
*/

// function removeDuplicates(nums) {
//   // Your solution here
// }
// 
// let test = [0,0,1,1,1,2,2,3,3,4];
// console.log(removeDuplicates(test)); // Expected: 5


/*
PROBLEM: Rotate Array
DIFFICULTY: Medium
PATTERN: Array Manipulation / Reversal
SOURCE: LeetCode #189

DESCRIPTION:
Rotate an array to the right by k steps.

EXAMPLES:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]

APPROACH 1: Extra space O(n)
APPROACH 2: Reverse algorithm O(1) space
Time Complexity: O(n)

EDGE CASES:
- k > array length
- k = 0
- Empty array
*/

// function rotate(nums, k) {
//   // Your solution here - modify in place
// }
// 
// let arr = [1,2,3,4,5,6,7];
// rotate(arr, 3);
// console.log(arr); // Expected: [5,6,7,1,2,3,4]


/*
PROBLEM: Best Time to Buy and Sell Stock
DIFFICULTY: Easy
PATTERN: Tracking Min/Max
SOURCE: LeetCode #121

DESCRIPTION:
You want to maximize profit by buying on one day and selling on a future day.
Return the maximum profit. If no profit possible, return 0.

EXAMPLES:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price=1), sell on day 5 (price=6), profit = 6-1 = 5

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: No profit possible

APPROACH: Track minimum price and maximum profit
Time Complexity: O(n)
Space Complexity: O(1)

REAL WORLD: Stock trading, pricing optimization
*/

// function maxProfit(prices) {
//   // Your solution here
// }
// 
// console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
// console.log(maxProfit([7,6,4,3,1])); // Expected: 0


// ================================================================================
// SECTION 10: STRING PROBLEMS - Advanced
// ================================================================================

/*
PROBLEM: Longest Substring Without Repeating Characters
DIFFICULTY: Medium
PATTERN: Sliding Window + Hash Set
SOURCE: LeetCode #3

DESCRIPTION:
Find the length of the longest substring without repeating characters.

EXAMPLES:
Input: s = "abcabcbb"
Output: 3
Explanation: "abc" is the longest

Input: s = "bbbbb"
Output: 1

Input: s = "pwwkew"
Output: 3
Explanation: "wke" is the longest

APPROACH: Sliding window with Set
Time Complexity: O(n)
Space Complexity: O(min(n, m)) where m is charset size

EDGE CASES:
- Empty string
- All unique characters
- All same character
*/

// function lengthOfLongestSubstring(s) {
//   // Your solution here
// }
// 
// console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
// console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3


/*
PROBLEM: Valid Palindrome
DIFFICULTY: Easy
PATTERN: Two Pointers
SOURCE: LeetCode #125

DESCRIPTION:
Return true if string is a palindrome after converting to lowercase and removing
non-alphanumeric characters.

EXAMPLES:
Input: s = "A man, a plan, a canal: Panama"
Output: true

Input: s = "race a car"
Output: false

APPROACH: Two pointers from ends, skip non-alphanumeric
Time Complexity: O(n)
Space Complexity: O(1)

REAL WORLD: Input validation, data sanitization
*/

// function isPalindrome(s) {
//   // Your solution here
// }
// 
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
// console.log(isPalindrome("race a car")); // Expected: false


/*
PROBLEM: Group Anagrams
DIFFICULTY: Medium
PATTERN: Hash Map with Sorted Keys
SOURCE: LeetCode #49

DESCRIPTION:
Group strings that are anagrams of each other.

EXAMPLES:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = [""]
Output: [[""]]

APPROACH: Sort each string as key, group in hash map
Time Complexity: O(n * k log k) where k is max string length
Space Complexity: O(n)

REAL WORLD: Document similarity, duplicate detection
*/

// function groupAnagrams(strs) {
//   // Your solution here
// }
// 
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


// ================================================================================
// SECTION 11: LINKED LIST PROBLEMS
// ================================================================================

/*
PROBLEM: Reverse Linked List
DIFFICULTY: Easy
PATTERN: Iterative / Recursive pointer manipulation
SOURCE: LeetCode #206

DESCRIPTION:
Reverse a singly linked list.

EXAMPLES:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = []
Output: []

APPROACH 1: Iterative with 3 pointers
APPROACH 2: Recursive
Time Complexity: O(n)
Space Complexity: O(1) iterative, O(n) recursive

EDGE CASES:
- Empty list
- Single node
- Two nodes
*/

// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// 
// function reverseList(head) {
//   // Your solution here
// }


/*
PROBLEM: Merge Two Sorted Lists
DIFFICULTY: Easy
PATTERN: Two Pointers / Dummy Node
SOURCE: LeetCode #21

DESCRIPTION:
Merge two sorted linked lists into one sorted list.

EXAMPLES:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

APPROACH: Use dummy node to simplify edge cases
Time Complexity: O(n + m)
Space Complexity: O(1)

REAL WORLD: Merge sorted data streams, database joins
*/

// function mergeTwoLists(list1, list2) {
//   // Your solution here
// }


/*
PROBLEM: Detect Cycle in Linked List
DIFFICULTY: Easy
PATTERN: Floyd's Cycle Detection (Fast/Slow Pointers)
SOURCE: LeetCode #141

DESCRIPTION:
Return true if linked list has a cycle, false otherwise.

EXAMPLES:
Input: head = [3,2,0,-4], pos = 1 (cycle back to node 1)
Output: true

Input: head = [1], pos = -1 (no cycle)
Output: false

APPROACH: Fast pointer moves 2x, slow moves 1x
Time Complexity: O(n)
Space Complexity: O(1)

INTERVIEW TIP: Classic algorithm to know by heart
*/

// function hasCycle(head) {
//   // Your solution here
// }


// ================================================================================
// SECTION 12: STACK & QUEUE PROBLEMS
// ================================================================================

/*
PROBLEM: Valid Parentheses
DIFFICULTY: Easy
PATTERN: Stack
SOURCE: LeetCode #20

DESCRIPTION:
Determine if input string has valid bracket matching. 
Open brackets must be closed in correct order.

EXAMPLES:
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

Input: s = "([)]"
Output: false

APPROACH: Use stack to match pairs
Time Complexity: O(n)
Space Complexity: O(n)

REAL WORLD: Parser validation, code linting, HTML validation
*/

// function isValid(s) {
//   // Your solution here
// }
// 
// console.log(isValid("()")); // Expected: true
// console.log(isValid("()[]{}")); // Expected: true
// console.log(isValid("(]")); // Expected: false


/*
PROBLEM: Min Stack
DIFFICULTY: Medium
PATTERN: Stack with tracking
SOURCE: LeetCode #155

DESCRIPTION:
Design a stack that supports push, pop, top, and retrieving minimum element in O(1).

EXAMPLES:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

APPROACH: Use second stack to track minimums
Time Complexity: O(1) for all operations
Space Complexity: O(n)

REAL WORLD: Financial data tracking, monitoring systems
*/

// class MinStack {
//   constructor() {
//     // Your solution here
//   }
//   
//   push(val) {
//     // Your solution here
//   }
//   
//   pop() {
//     // Your solution here
//   }
//   
//   top() {
//     // Your solution here
//   }
//   
//   getMin() {
//     // Your solution here
//   }
// }


// ================================================================================
// SECTION 13: TREE PROBLEMS
// ================================================================================

/*
PROBLEM: Maximum Depth of Binary Tree
DIFFICULTY: Easy
PATTERN: DFS / BFS
SOURCE: LeetCode #104

DESCRIPTION:
Find the maximum depth (height) of a binary tree.

EXAMPLES:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2

APPROACH 1: Recursive DFS
APPROACH 2: Iterative BFS with queue
Time Complexity: O(n)
Space Complexity: O(h) where h is height

EDGE CASES:
- Empty tree
- Single node
- Skewed tree
*/

// class TreeNode {
//   constructor(val = 0, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }
// 
// function maxDepth(root) {
//   // Your solution here
// }


/*
PROBLEM: Invert Binary Tree
DIFFICULTY: Easy
PATTERN: DFS / BFS
SOURCE: LeetCode #226

DESCRIPTION:
Invert (mirror) a binary tree.

EXAMPLES:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

APPROACH: Swap left and right children recursively
Time Complexity: O(n)
Space Complexity: O(h)

INTERVIEW TIP: Famous for being asked at Google
*/

// function invertTree(root) {
//   // Your solution here
// }


/*
PROBLEM: Validate Binary Search Tree
DIFFICULTY: Medium
PATTERN: DFS with range validation
SOURCE: LeetCode #98

DESCRIPTION:
Determine if binary tree is a valid BST.
Left subtree values < node < right subtree values.

EXAMPLES:
Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false

APPROACH: Track min/max range for each node
Time Complexity: O(n)
Space Complexity: O(h)

EDGE CASES:
- Duplicate values
- Single node
- Values at Integer.MIN/MAX
*/

// function isValidBST(root) {
//   // Your solution here
// }


// ================================================================================
// SECTION 14: DYNAMIC PROGRAMMING - Beginner
// ================================================================================

/*
PROBLEM: Climbing Stairs
DIFFICULTY: Easy
PATTERN: Dynamic Programming / Fibonacci
SOURCE: LeetCode #70

DESCRIPTION:
You're climbing stairs. Takes n steps to reach top. Each time you can climb 1 or 2 steps.
How many distinct ways can you climb to the top?

EXAMPLES:
Input: n = 2
Output: 2
Explanation: 1+1 or 2

Input: n = 3
Output: 3
Explanation: 1+1+1, 1+2, or 2+1

APPROACH: DP - ways[i] = ways[i-1] + ways[i-2]
Time Complexity: O(n)
Space Complexity: O(1) with optimization

REAL WORLD: Counting paths, decision trees
*/

// function climbStairs(n) {
//   // Your solution here
// }
// 
// console.log(climbStairs(2)); // Expected: 2
// console.log(climbStairs(3)); // Expected: 3


/*
PROBLEM: House Robber
DIFFICULTY: Medium
PATTERN: Dynamic Programming
SOURCE: LeetCode #198

DESCRIPTION:
Rob houses along street. Can't rob adjacent houses (alarm). 
Return maximum amount you can rob.

EXAMPLES:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (1) + house 3 (3) = 4

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (2), house 3 (9), and house 5 (1) = 12

APPROACH: DP - max(rob this + skip prev, skip this)
Time Complexity: O(n)
Space Complexity: O(1)

REAL WORLD: Resource allocation, scheduling
*/

// function rob(nums) {
//   // Your solution here
// }
// 
// console.log(rob([1,2,3,1])); // Expected: 4
// console.log(rob([2,7,9,3,1])); // Expected: 12


/*
PROBLEM: Coin Change
DIFFICULTY: Medium
PATTERN: Dynamic Programming (Unbounded Knapsack)
SOURCE: LeetCode #322

DESCRIPTION:
Given coins of different denominations and total amount.
Return fewest number of coins needed. Return -1 if impossible.

EXAMPLES:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Input: coins = [2], amount = 3
Output: -1

APPROACH: DP bottom-up, build solutions for 0 to amount
Time Complexity: O(amount * coins.length)
Space Complexity: O(amount)

REAL WORLD: Making change, resource optimization
*/

// function coinChange(coins, amount) {
//   // Your solution here
// }
// 
// console.log(coinChange([1,2,5], 11)); // Expected: 3
// console.log(coinChange([2], 3)); // Expected: -1


// ================================================================================
// SECTION 15: REAL-WORLD APPLICATION PROBLEMS
// ================================================================================

/*
PROBLEM: Design URL Shortener
DIFFICULTY: Medium
PATTERN: Hash Map, Encoding
REAL WORLD: bit.ly, TinyURL

DESCRIPTION:
Design a system to shorten URLs and retrieve original URLs.

REQUIREMENTS:
- encode(longUrl) -> shortUrl
- decode(shortUrl) -> longUrl
- Handle collisions
- Unique short codes

APPROACH: Base62 encoding with counter or hash
Time Complexity: O(1) for both operations
Space Complexity: O(n) where n is number of URLs

CONSIDERATIONS:
- Collision handling
- URL validation
- Expiration (if needed)
- Scale to millions of URLs
*/

// class URLShortener {
//   constructor() {
//     // Your solution here
//   }
//   
//   encode(longUrl) {
//     // Your solution here
//   }
//   
//   decode(shortUrl) {
//     // Your solution here
//   }
// }


/*
PROBLEM: LRU Cache
DIFFICULTY: Medium
PATTERN: Hash Map + Doubly Linked List
SOURCE: LeetCode #146
REAL WORLD: Redis, browser cache, CDN

DESCRIPTION:
Implement Least Recently Used cache with O(1) get and put operations.

REQUIREMENTS:
- get(key): Return value if exists, -1 if not
- put(key, value): Update or insert. Evict LRU item if at capacity.

EXAMPLES:
LRUCache cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);    // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2);    // returns -1 (not found)

APPROACH: HashMap for O(1) access + DLL for O(1) reordering
Time Complexity: O(1) for both operations
Space Complexity: O(capacity)

INTERVIEW TIP: Very common system design implementation
*/

// class LRUCache {
//   constructor(capacity) {
//     // Your solution here
//   }
//   
//   get(key) {
//     // Your solution here
//   }
//   
//   put(key, value) {
//     // Your solution here
//   }
// }


/*
PROBLEM: Rate Limiter
DIFFICULTY: Medium
PATTERN: Sliding Window / Token Bucket
REAL WORLD: API throttling, DDoS protection

DESCRIPTION:
Implement a rate limiter that allows max N requests per time window.

REQUIREMENTS:
- allowRequest(userId): Return true if request allowed, false if rate limit exceeded
- Track requests per user
- Configurable window (e.g., 100 requests per minute)

EXAMPLES:
RateLimiter limiter = new RateLimiter(3, 60); // 3 requests per 60 seconds
limiter.allowRequest("user1"); // true
limiter.allowRequest("user1"); // true
limiter.allowRequest("user1"); // true
limiter.allowRequest("user1"); // false (exceeded)

APPROACH 1: Sliding window with timestamps
APPROACH 2: Token bucket
Time Complexity: O(1) amortized
Space Complexity: O(users)

REAL WORLD: Stripe API, Twitter API, AWS rate limiting
*/

// class RateLimiter {
//   constructor(maxRequests, windowSeconds) {
//     // Your solution here
//   }
//   
//   allowRequest(userId) {
//     // Your solution here
//   }
// }


/*
PROBLEM: Design Task Scheduler
DIFFICULTY: Hard
PATTERN: Priority Queue / Greedy
SOURCE: LeetCode #621
REAL WORLD: CPU task scheduling, job queues

DESCRIPTION:
Given tasks and a cooldown period, find minimum time to complete all tasks.
Same task must wait n intervals between executions.

EXAMPLES:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B

Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6

APPROACH: Greedy with frequency counting
Time Complexity: O(n)
Space Complexity: O(1) - max 26 tasks

REAL WORLD: Process scheduling, resource management
*/

// function leastInterval(tasks, n) {
//   // Your solution here
// }
// 
// console.log(leastInterval(["A","A","A","B","B","B"], 2)); // Expected: 8


// ================================================================================
// SECTION 16: YOUR PRACTICE PROBLEMS
// ================================================================================
// Add your own problems below using the template from the top of the file
// Track your progress, time taken, and difficulty level




// ================================================================================
// TEST RUNNER - Uncomment to run specific sections
// ================================================================================
/*
console.log("\n=== RUNNING ALL TESTS ===\n");

// Add custom test suites here
*/