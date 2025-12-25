// Sample problem data - extract from your files
const problems = [
    {
        id: 'char-frequency',
        title: 'Character Frequency Counter',
        difficulty: 'Easy',
        category: 'String',
        pattern: 'Hash Map',
        description: 'Given a string, count how many times each character appears.',
        examples: `Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }

Input: "aabbcc"
Output: { a: 2, b: 2, c: 2 }`,
        hints: `Approach: Hash Map for O(n) solution
1. Create an empty object to store character counts
2. Loop through each character in the string
3. If character exists in map, increment count
4. If not, initialize count to 1
5. Return the frequency map

Time Complexity: O(n) where n is string length
Space Complexity: O(k) where k is unique characters`,
        starterCode: `function countCharacters(string) {
  // Your solution here
}

// Test cases
console.log(countCharacters("hello"));
console.log(countCharacters("aabbcc"));`,
        solution: `function countCharacters(string) {
  let charCount = {}
  for(let i = 0; i < string.length; i++) {
    if(charCount[string[i]]) {
      charCount[string[i]]++;
    } else {
      charCount[string[i]] = 1;
    }
  }
  return charCount;
}`,
        testCases: [
            { input: ["hello"], expected: { h: 1, e: 1, l: 2, o: 1 } },
            { input: ["aabbcc"], expected: { a: 2, b: 2, c: 2 } },
            { input: [""], expected: {} },
            { input: ["a"], expected: { a: 1 } }
        ]
    },
    {
        id: 'two-sum',
        title: 'Two Sum',
        difficulty: 'Easy',
        category: 'Array',
        pattern: 'Hash Map',
        description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        examples: `Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9

Input: nums = [3,2,4], target = 6
Output: [1,2]`,
        hints: `Approach: Hash Map for O(n) solution
1. Create a map to store numbers we've seen and their indices
2. For each number, calculate complement (target - num)
3. Check if complement exists in map
4. If yes, return [map[complement], currentIndex]
5. If no, add current number to map
6. Continue until pair found

Time Complexity: O(n)
Space Complexity: O(n)`,
        starterCode: `function twoSum(nums, target) {
  // Your solution here
}

// Test cases
console.log(twoSum([2,7,11,15], 9)); // Expected: [0,1]
console.log(twoSum([3,2,4], 6)); // Expected: [1,2]`,
        testCases: [
            { input: [[2,7,11,15], 9], expected: [0,1] },
            { input: [[3,2,4], 6], expected: [1,2] },
            { input: [[3,3], 6], expected: [0,1] }
        ]
    },
    {
        id: 'valid-anagram',
        title: 'Valid Anagram',
        difficulty: 'Easy',
        category: 'String',
        pattern: 'Hash Map',
        description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
        examples: `Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false`,
        hints: `Approach: Character frequency comparison
1. Check if lengths are different - return false
2. Create frequency map for first string
3. Decrease counts using second string
4. If any count goes negative or key doesn't exist, return false
5. Return true if all counts match

Alternative: Sort both strings and compare

Time Complexity: O(n)
Space Complexity: O(1) - max 26 letters`,
        starterCode: `function isAnagram(s, t) {
  // Your solution here
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
        testCases: [
            { input: ["anagram", "nagaram"], expected: true },
            { input: ["rat", "car"], expected: false },
            { input: ["", ""], expected: true },
            { input: ["a", "ab"], expected: false }
        ]
    },
    {
        id: 'reverse-string',
        title: 'Reverse String',
        difficulty: 'Easy',
        category: 'Array',
        pattern: 'Two Pointers',
        description: 'Write a function that reverses a string in-place. The input string is given as an array of characters.',
        examples: `Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]`,
        hints: `Approach: Two pointers from both ends
1. Initialize left pointer at start (0)
2. Initialize right pointer at end (length - 1)
3. While left < right:
   - Swap elements at left and right
   - Increment left
   - Decrement right
4. Modify array in place, no return needed

Time Complexity: O(n)
Space Complexity: O(1)`,
        starterCode: `function reverseString(s) {
  // Your solution here - modify array in place
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]`,
        testCases: [
            { input: [["h","e","l","l","o"]], expected: ["o","l","l","e","h"], modifiesInput: true },
            { input: [["H","a","n","n","a","h"]], expected: ["h","a","n","n","a","H"], modifiesInput: true },
            { input: [["a"]], expected: ["a"], modifiesInput: true }
        ]
    },
    {
        id: 'contains-duplicate',
        title: 'Contains Duplicate',
        difficulty: 'Easy',
        category: 'Array',
        pattern: 'Hash Set',
        description: 'Given an integer array nums, return true if any value appears at least twice, and return false if every element is distinct.',
        examples: `Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false`,
        hints: `Approach: Use Set to track seen numbers
1. Create a new Set
2. Loop through array
3. For each number:
   - Check if it exists in Set
   - If yes, return true (duplicate found)
   - If no, add to Set
4. If loop completes, return false (no duplicates)

Time Complexity: O(n)
Space Complexity: O(n)`,
        starterCode: `function containsDuplicate(nums) {
  // Your solution here
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false`,
        testCases: [
            { input: [[1,2,3,1]], expected: true },
            { input: [[1,2,3,4]], expected: false },
            { input: [[]], expected: false },
            { input: [[1,1,1,1]], expected: true }
        ]
    },
    {
        id: 'best-time-stock',
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        category: 'Array',
        pattern: 'Tracking Min/Max',
        description: 'You want to maximize profit by buying on one day and selling on a future day. Return the maximum profit. If no profit possible, return 0.',
        examples: `Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price=1), sell on day 5 (price=6), profit = 5

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: No profit possible`,
        hints: `Approach: Track minimum price and maximum profit
1. Initialize minPrice to Infinity
2. Initialize maxProfit to 0
3. For each price:
   - Update minPrice if current price is lower
   - Calculate potential profit (price - minPrice)
   - Update maxProfit if potential profit is higher
4. Return maxProfit

Time Complexity: O(n)
Space Complexity: O(1)`,
        starterCode: `function maxProfit(prices) {
  // Your solution here
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
        testCases: [
            { input: [[7,1,5,3,6,4]], expected: 5 },
            { input: [[7,6,4,3,1]], expected: 0 },
            { input: [[2,4,1]], expected: 2 },
            { input: [[1]], expected: 0 }
        ]
    },
    {
        id: 'valid-palindrome',
        title: 'Valid Palindrome',
        difficulty: 'Easy',
        category: 'String',
        pattern: 'Two Pointers',
        description: 'Return true if string is a palindrome after converting to lowercase and removing non-alphanumeric characters.',
        examples: `Input: s = "A man, a plan, a canal: Panama"
Output: true

Input: s = "race a car"
Output: false`,
        hints: `Approach: Two pointers from ends, skip non-alphanumeric
1. Convert string to lowercase
2. Initialize left = 0, right = length - 1
3. While left < right:
   - Skip non-alphanumeric from left
   - Skip non-alphanumeric from right
   - Compare characters
   - If different, return false
   - Move pointers
4. Return true

Time Complexity: O(n)
Space Complexity: O(1)`,
        starterCode: `function isPalindrome(s) {
  // Your solution here
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false`,
        testCases: [
            { input: ["A man, a plan, a canal: Panama"], expected: true },
            { input: ["race a car"], expected: false },
            { input: [""], expected: true },
            { input: [" "], expected: true }
        ]
    },
    {
        id: 'valid-parentheses',
        title: 'Valid Parentheses',
        difficulty: 'Easy',
        category: 'Stack',
        pattern: 'Stack',
        description: 'Determine if input string has valid bracket matching. Open brackets must be closed in correct order.',
        examples: `Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false`,
        hints: `Approach: Use stack to match pairs
1. Create empty stack
2. Create map of closing to opening brackets
3. For each character:
   - If opening bracket, push to stack
   - If closing bracket:
     - Check if stack is empty (no match)
     - Pop from stack and verify it matches
4. After loop, stack should be empty

Time Complexity: O(n)
Space Complexity: O(n)`,
        starterCode: `function isValid(s) {
  // Your solution here
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
        testCases: [
            { input: ["()"], expected: true },
            { input: ["()[]{}"], expected: true },
            { input: ["(]"], expected: false },
            { input: ["([)]"], expected: false },
            { input: ["{[]}"], expected: true }
        ]
    },

    // --- Super Easy Warmups ---
    {
        id: 'hello-name',
        title: 'Hello, Name!',
        difficulty: 'Easy',
        category: 'String',
        pattern: 'Basics',
        description: 'Return a greeting string in the format: "Hello, <name>!"',
        examples: `Input: "Nick"
Output: "Hello, Nick!"

Input: ""
Output: "Hello, !"`,
        hints: `Approach:
1. Use string interpolation / concatenation
2. Return the formatted string

Time Complexity: O(n)
Space Complexity: O(n)`,
        starterCode: `function helloName(name) {
  // Your solution here
}

// Test cases
console.log(helloName("Nick")); // "Hello, Nick!"
console.log(helloName("")); // "Hello, !"`,
        testCases: [
            { input: ["Nick"], expected: "Hello, Nick!" },
            { input: ["Ada"], expected: "Hello, Ada!" },
            { input: [""], expected: "Hello, !" }
        ]
    },
    {
        id: 'is-even',
        title: 'Is Even',
        difficulty: 'Easy',
        category: 'Array',
        pattern: 'Math',
        description: 'Return true if the number is even, otherwise false.',
        examples: `Input: 4
Output: true

Input: 7
Output: false`,
        hints: `Approach:
Use modulus: n % 2 === 0

Time Complexity: O(1)
Space Complexity: O(1)`,
        starterCode: `function isEven(n) {
  // Your solution here
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false`,
        testCases: [
            { input: [4], expected: true },
            { input: [7], expected: false },
            { input: [0], expected: true },
            { input: [-2], expected: true }
        ]
    },
    {
        id: 'sum-two',
        title: 'Sum of Two Numbers',
        difficulty: 'Easy',
        category: 'Array',
        pattern: 'Basics',
        description: 'Return the sum of two numbers a and b.',
        examples: `Input: a=2, b=3
Output: 5

Input: a=-1, b=1
Output: 0`,
        hints: `Approach:
Return a + b

Time Complexity: O(1)
Space Complexity: O(1)`,
        starterCode: `function sumTwo(a, b) {
  // Your solution here
}

console.log(sumTwo(2, 3)); // 5
console.log(sumTwo(-1, 1)); // 0`,
        testCases: [
            { input: [2, 3], expected: 5 },
            { input: [-1, 1], expected: 0 },
            { input: [0, 0], expected: 0 },
            { input: [10, -4], expected: 6 }
        ]
    },
    {
        id: 'first-element',
        title: 'First Element',
        difficulty: 'Easy',
        category: 'Array',
        pattern: 'Basics',
        description: 'Return the first element of the array. If the array is empty, return null.',
        examples: `Input: [5, 6, 7]
Output: 5

Input: []
Output: null`,
        hints: `Approach:
1. If array length is 0, return null
2. Otherwise return arr[0]

Time Complexity: O(1)
Space Complexity: O(1)`,
        starterCode: `function firstElement(arr) {
  // Your solution here
}

console.log(firstElement([5,6,7])); // 5
console.log(firstElement([])); // null`,
        testCases: [
            { input: [[5, 6, 7]], expected: 5 },
            { input: [[]], expected: null },
            { input: [["a"]], expected: "a" }
        ]
    },
    {
        id: 'last-element',
        title: 'Last Element',
        difficulty: 'Easy',
        category: 'Array',
        pattern: 'Basics',
        description: 'Return the last element of the array. If the array is empty, return null.',
        examples: `Input: [5, 6, 7]
Output: 7

Input: []
Output: null`,
        hints: `Approach:
1. If array length is 0, return null
2. Otherwise return arr[arr.length - 1]

Time Complexity: O(1)
Space Complexity: O(1)`,
        starterCode: `function lastElement(arr) {
  // Your solution here
}

console.log(lastElement([5,6,7])); // 7
console.log(lastElement([])); // null`,
        testCases: [
            { input: [[5, 6, 7]], expected: 7 },
            { input: [[]], expected: null },
            { input: [["a"]], expected: "a" }
        ]
    },
    {
        id: 'count-vowels',
        title: 'Count Vowels',
        difficulty: 'Easy',
        category: 'String',
        pattern: 'Looping',
        description: 'Return how many vowels (a, e, i, o, u) are in the string. Case-insensitive.',
        examples: `Input: "hello"
Output: 2

Input: "WHY"
Output: 0`,
        hints: `Approach:
1. Lowercase the string
2. Loop over characters
3. Count if char is in a set of vowels

Time Complexity: O(n)
Space Complexity: O(1)`,
        starterCode: `function countVowels(s) {
  // Your solution here
}

console.log(countVowels("hello")); // 2
console.log(countVowels("WHY")); // 0`,
        testCases: [
            { input: ["hello"], expected: 2 },
            { input: ["WHY"], expected: 0 },
            { input: ["AeiOu"], expected: 5 },
            { input: [""], expected: 0 }
        ]
    },
    {
        id: 'to-upper-case',
        title: 'To Uppercase',
        difficulty: 'Easy',
        category: 'String',
        pattern: 'Built-ins',
        description: 'Return the string converted to uppercase.',
        examples: `Input: "abc"
Output: "ABC"

Input: "Hello!"
Output: "HELLO!"`,
        hints: `Approach:
Use s.toUpperCase()

Time Complexity: O(n)
Space Complexity: O(n)`,
        starterCode: `function toUpperCaseString(s) {
  // Your solution here
}

console.log(toUpperCaseString("abc")); // "ABC"
console.log(toUpperCaseString("Hello!")); // "HELLO!"`,
        testCases: [
            { input: ["abc"], expected: "ABC" },
            { input: ["Hello!"], expected: "HELLO!" },
            { input: [""], expected: "" }
        ]
    },
    {
        id: 'clamp-number',
        title: 'Clamp a Number',
        difficulty: 'Easy',
        category: 'Array',
        pattern: 'Math',
        description: 'Clamp a number n between min and max. If n is below min return min; if above max return max; otherwise return n.',
        examples: `Input: n=5, min=0, max=10
Output: 5

Input: n=-2, min=0, max=10
Output: 0`,
        hints: `Approach:
Use Math.min and Math.max:
return Math.min(max, Math.max(min, n))

Time Complexity: O(1)
Space Complexity: O(1)`,
        starterCode: `function clamp(n, min, max) {
  // Your solution here
}

console.log(clamp(5, 0, 10)); // 5
console.log(clamp(-2, 0, 10)); // 0`,
        testCases: [
            { input: [5, 0, 10], expected: 5 },
            { input: [-2, 0, 10], expected: 0 },
            { input: [99, 0, 10], expected: 10 },
            { input: [10, 0, 10], expected: 10 }
        ]
    }
];

// State management
let currentProblem = null;
let completedProblems = new Set();
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;

// Load completed problems from localStorage
function loadProgress() {
    const saved = localStorage.getItem('completedProblems');
    if (saved) {
        completedProblems = new Set(JSON.parse(saved));
    }
}

// Save completed problems to localStorage
function saveProgress() {
    localStorage.setItem('completedProblems', JSON.stringify([...completedProblems]));
}

// Initialize the app
function init() {
    loadProgress();
    renderProblemsList();
    updateStats();
    setupEventListeners();
}

// Render problems list in sidebar
function renderProblemsList(filter = {}) {
    const problemsList = document.getElementById('problems-list');
    problemsList.innerHTML = '';

    let filteredProblems = problems;

    // Apply difficulty filter
    if (filter.difficulty && filter.difficulty !== 'all') {
        filteredProblems = filteredProblems.filter(p => p.difficulty === filter.difficulty);
    }

    // Apply category filter
    if (filter.category && filter.category !== 'all') {
        filteredProblems = filteredProblems.filter(p => p.category === filter.category);
    }

    // Apply search filter
    if (filter.search) {
        const searchLower = filter.search.toLowerCase();
        filteredProblems = filteredProblems.filter(p => 
            p.title.toLowerCase().includes(searchLower) ||
            p.pattern.toLowerCase().includes(searchLower)
        );
    }

    filteredProblems.forEach(problem => {
        const item = document.createElement('div');
        item.className = 'problem-item';
        if (completedProblems.has(problem.id)) {
            item.classList.add('completed');
        }
        if (currentProblem && currentProblem.id === problem.id) {
            item.classList.add('active');
        }

        item.innerHTML = `
            <div class="problem-item-title">${problem.title}</div>
            <div class="problem-item-meta">
                <span class="problem-item-difficulty ${problem.difficulty}">${problem.difficulty}</span>
                <span class="problem-item-pattern">${problem.pattern}</span>
            </div>
        `;

        item.addEventListener('click', () => loadProblem(problem));
        problemsList.appendChild(item);
    });
}

// Load a problem into the main view
function loadProblem(problem) {
    currentProblem = problem;
    
    // Reset timer
    stopTimer();
    resetTimer();
    
    // Update UI
    document.getElementById('problem-title').textContent = problem.title;
    document.getElementById('difficulty-badge').textContent = problem.difficulty;
    document.getElementById('difficulty-badge').style.backgroundColor = 
        problem.difficulty === 'Easy' ? 'var(--easy-color)' :
        problem.difficulty === 'Medium' ? 'var(--medium-color)' :
        'var(--hard-color)';
    document.getElementById('pattern-badge').textContent = problem.pattern;

    // Update tab content
    document.getElementById('problem-description').innerHTML = `
        <p>${problem.description}</p>
    `;
    
    document.getElementById('problem-examples').innerHTML = `
        <h3>Examples:</h3>
        <pre>${problem.examples}</pre>
    `;
    
    document.getElementById('problem-hints').innerHTML = `
        <h3>Approach & Hints:</h3>
        <pre>${problem.hints}</pre>
    `;

    // Load starter code
    const savedCode = localStorage.getItem(`code_${problem.id}`);
    document.getElementById('code-editor').value = savedCode || problem.starterCode;

    // Update line numbers
    updateLineNumbers();

    // Update active state in sidebar
    renderProblemsList();

    // Clear console
    clearConsole();
}

// Run the code
function runCode() {
    const code = document.getElementById('code-editor').value;
    const consoleOutput = document.getElementById('console-output');
    consoleOutput.innerHTML = '';

    // Save code to localStorage
    if (currentProblem) {
        localStorage.setItem(`code_${currentProblem.id}`, code);
    }

    // Measure execution time
    const startTime = performance.now();

    // Capture console.log output
    const logs = [];
    const originalLog = console.log;
    console.log = function(...args) {
        logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
        originalLog.apply(console, args);
    };

    try {
        // Execute the code
        eval(code);
        
        const endTime = performance.now();
        const executionTime = (endTime - startTime).toFixed(2);
        
        // Display execution time
        document.getElementById('execution-time').textContent = `Executed in ${executionTime}ms`;
        
        // Display output
        if (logs.length === 0) {
            const successLine = document.createElement('div');
            successLine.className = 'console-line success';
            successLine.textContent = '✓ Code executed successfully. No output.';
            consoleOutput.appendChild(successLine);
        } else {
            logs.forEach(log => {
                const line = document.createElement('div');
                line.className = 'console-line';
                line.textContent = log;
                consoleOutput.appendChild(line);
            });
        }

        // Run automated tests if available
        if (currentProblem && currentProblem.testCases) {
            runTests();
        }

        // Mark as completed
        if (currentProblem && !completedProblems.has(currentProblem.id)) {
            completedProblems.add(currentProblem.id);
            saveProgress();
            updateStats();
            renderProblemsList();
        }

    } catch (error) {
        const endTime = performance.now();
        const executionTime = (endTime - startTime).toFixed(2);
        document.getElementById('execution-time').textContent = `Failed after ${executionTime}ms`;
        
        const errorLine = document.createElement('div');
        errorLine.className = 'console-line error';
        errorLine.textContent = `❌ Error: ${error.message}`;
        consoleOutput.appendChild(errorLine);
    } finally {
        // Restore console.log
        console.log = originalLog;
    }
}

// Run automated tests
function runTests() {
    if (!currentProblem || !currentProblem.testCases) return;

    const consoleOutput = document.getElementById('console-output');
    const code = document.getElementById('code-editor').value;
    
    // Add separator
    const separator = document.createElement('div');
    separator.className = 'console-line';
    separator.style.borderTop = '2px solid var(--border-color)';
    separator.style.marginTop = '10px';
    separator.style.paddingTop = '10px';
    separator.textContent = '🧪 Running Automated Tests...';
    separator.style.fontWeight = 'bold';
    consoleOutput.appendChild(separator);

    let passedTests = 0;
    let totalTests = currentProblem.testCases.length;

    try {
        // Extract function name from code
        const functionMatch = code.match(/function\s+(\w+)\s*\(/);
        if (!functionMatch) {
            const errorLine = document.createElement('div');
            errorLine.className = 'console-line error';
            errorLine.textContent = '❌ No function found in code';
            consoleOutput.appendChild(errorLine);
            return;
        }

        const functionName = functionMatch[1];

        // Execute code to define the function
        eval(code);
        const userFunction = eval(functionName);

        // Run each test case
        currentProblem.testCases.forEach((testCase, index) => {
            try {
                let result;
                
                // Handle functions that modify input (like reverseString)
                if (testCase.modifiesInput) {
                    const inputCopy = JSON.parse(JSON.stringify(testCase.input[0]));
                    userFunction(...testCase.input);
                    result = testCase.input[0];
                    testCase.input[0] = inputCopy; // Restore for next run
                } else {
                    result = userFunction(...testCase.input);
                }

                const expected = testCase.expected;
                const passed = deepEqual(result, expected);

                const testLine = document.createElement('div');
                testLine.className = `console-line ${passed ? 'success' : 'error'}`;
                
                if (passed) {
                    passedTests++;
                    testLine.textContent = `✓ Test ${index + 1} passed`;
                } else {
                    testLine.innerHTML = `✗ Test ${index + 1} failed<br>` +
                        `   Input: ${formatValue(testCase.input)}<br>` +
                        `   Expected: ${formatValue(expected)}<br>` +
                        `   Got: ${formatValue(result)}`;
                }
                
                consoleOutput.appendChild(testLine);
            } catch (error) {
                const testLine = document.createElement('div');
                testLine.className = 'console-line error';
                testLine.textContent = `✗ Test ${index + 1} error: ${error.message}`;
                consoleOutput.appendChild(testLine);
            }
        });

        // Summary
        const summaryLine = document.createElement('div');
        summaryLine.className = 'console-line';
        summaryLine.style.fontWeight = 'bold';
        summaryLine.style.marginTop = '10px';
        
        if (passedTests === totalTests) {
            summaryLine.className = 'console-line success';
            summaryLine.textContent = `🎉 All ${totalTests} tests passed!`;
        } else {
            summaryLine.className = 'console-line error';
            summaryLine.textContent = `${passedTests}/${totalTests} tests passed`;
        }
        
        consoleOutput.appendChild(summaryLine);

    } catch (error) {
        const errorLine = document.createElement('div');
        errorLine.className = 'console-line error';
        errorLine.textContent = `❌ Test setup error: ${error.message}`;
        consoleOutput.appendChild(errorLine);
    }
}

// Deep equality check for objects and arrays
function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || b == null) return false;
    
    if (typeof a !== 'object' || typeof b !== 'object') return false;
    
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    
    if (keysA.length !== keysB.length) return false;
    
    for (let key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }
    
    return true;
}

// Format value for display
function formatValue(value) {
    if (Array.isArray(value)) {
        if (value.length === 1 && typeof value[0] !== 'object') {
            return JSON.stringify(value[0]);
        }
        return JSON.stringify(value);
    }
    if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value);
    }
    return String(value);
}

// Reset code to starter
function resetCode() {
    if (currentProblem && confirm('Reset code to starter template?')) {
        document.getElementById('code-editor').value = currentProblem.starterCode;
        localStorage.removeItem(`code_${currentProblem.id}`);
        clearConsole();
    }
}

// Clear console
function clearConsole() {
    document.getElementById('console-output').innerHTML = 
        '<p class="console-placeholder">Output will appear here when you run your code...</p>';
    document.getElementById('execution-time').textContent = '';
}

// Update statistics
function updateStats() {
    document.getElementById('completed-count').textContent = completedProblems.size;
    document.getElementById('total-count').textContent = problems.length;
}

// Timer functions
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        document.getElementById('timer-btn').classList.add('running');
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

function stopTimer() {
    if (timerRunning) {
        timerRunning = false;
        document.getElementById('timer-btn').classList.remove('running');
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
}

function toggleTimer() {
    if (timerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer-display').textContent = display;
}

// Line numbers
function updateLineNumbers() {
    const editor = document.getElementById('code-editor');
    const lineNumbers = document.getElementById('line-numbers');
    const lines = editor.value.split('\n').length;
    lineNumbers.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('\n');
}

// Save code to file
function saveCodeToFile() {
    if (!currentProblem) {
        alert('No problem selected');
        return;
    }
    
    const code = document.getElementById('code-editor').value;
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentProblem.id}.js`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success message
    const consoleOutput = document.getElementById('console-output');
    const savedMsg = document.createElement('div');
    savedMsg.className = 'console-line success';
    savedMsg.textContent = `✓ Saved to ${currentProblem.id}.js`;
    consoleOutput.insertBefore(savedMsg, consoleOutput.firstChild);
}

// Copy output to clipboard
function copyOutput() {
    const output = document.getElementById('console-output').innerText;
    navigator.clipboard.writeText(output).then(() => {
        const btn = document.getElementById('copy-output-btn');
        const originalText = btn.textContent;
        btn.textContent = '✓';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 1500);
    });
}

// Reset all progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This will clear all completed problems and saved code.')) {
        completedProblems.clear();
        localStorage.clear();
        saveProgress();
        updateStats();
        renderProblemsList();
        if (currentProblem) {
            document.getElementById('code-editor').value = currentProblem.starterCode;
        }
        alert('Progress reset successfully!');
    }
}

// Toggle line comment
function toggleComment() {
    const editor = document.getElementById('code-editor');
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const text = editor.value;
    
    // Get selected lines
    const beforeSelection = text.substring(0, start);
    const selection = text.substring(start, end);
    const afterSelection = text.substring(end);
    
    const startLine = beforeSelection.lastIndexOf('\n') + 1;
    const endLine = beforeSelection.length + selection.lastIndexOf('\n');
    
    const selectedLines = text.substring(startLine, endLine === -1 ? end : endLine + 1);
    const lines = selectedLines.split('\n');
    
    // Check if all lines are commented
    const allCommented = lines.every(line => line.trim().startsWith('//'));
    
    // Toggle comments
    const newLines = lines.map(line => {
        if (allCommented) {
            return line.replace(/^(\s*)\/\/\s?/, '$1');
        } else {
            return line.replace(/^(\s*)/, '$1// ');
        }
    });
    
    const newSelection = newLines.join('\n');
    editor.value = text.substring(0, startLine) + newSelection + text.substring(endLine === -1 ? end : endLine + 1);
    
    // Restore selection
    editor.focus();
    editor.setSelectionRange(start, start + newSelection.length);
}

// Modal functions
function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Update statistics
function updateStats() {
    document.getElementById('completed-count').textContent = completedProblems.size;
    document.getElementById('total-count').textContent = problems.length;
}

// Setup event listeners
function setupEventListeners() {
    // Run button
    document.getElementById('run-btn').addEventListener('click', runCode);

    // Test button
    document.getElementById('test-btn').addEventListener('click', () => {
        if (!currentProblem || !currentProblem.testCases) {
            alert('No test cases available for this problem');
            return;
        }
        
        const code = document.getElementById('code-editor').value;
        const consoleOutput = document.getElementById('console-output');
        
        // Save code
        if (currentProblem) {
            localStorage.setItem(`code_${currentProblem.id}`, code);
        }
        
        // Clear console and run tests
        consoleOutput.innerHTML = '';
        runTests();
    });

    // Reset button
    document.getElementById('reset-btn').addEventListener('click', resetCode);

    // Save button
    document.getElementById('save-btn').addEventListener('click', saveCodeToFile);

    // Timer button
    document.getElementById('timer-btn').addEventListener('click', toggleTimer);

    // Clear console button
    document.getElementById('clear-console').addEventListener('click', clearConsole);

    // Copy output button
    document.getElementById('copy-output-btn').addEventListener('click', copyOutput);

    // Reset progress button
    document.getElementById('reset-progress-btn').addEventListener('click', resetProgress);

    // Help button
    document.getElementById('help-btn').addEventListener('click', () => showModal('shortcuts-modal'));
    document.getElementById('close-shortcuts').addEventListener('click', () => hideModal('shortcuts-modal'));

    // Close modal on background click
    document.getElementById('shortcuts-modal').addEventListener('click', (e) => {
        if (e.target.id === 'shortcuts-modal') {
            hideModal('shortcuts-modal');
        }
    });

    // Code editor - update line numbers
    const editor = document.getElementById('code-editor');
    editor.addEventListener('input', updateLineNumbers);
    editor.addEventListener('scroll', () => {
        document.getElementById('line-numbers').scrollTop = editor.scrollTop;
    });

    // Difficulty filter
    document.getElementById('difficulty-filter').addEventListener('change', (e) => {
        renderProblemsList({
            difficulty: e.target.value,
            category: document.getElementById('category-filter').value,
            search: document.getElementById('search-input').value
        });
    });

    // Category filter
    document.getElementById('category-filter').addEventListener('change', (e) => {
        renderProblemsList({
            difficulty: document.getElementById('difficulty-filter').value,
            category: e.target.value,
            search: document.getElementById('search-input').value
        });
    });

    // Search input
    document.getElementById('search-input').addEventListener('input', (e) => {
        renderProblemsList({
            difficulty: document.getElementById('difficulty-filter').value,
            category: document.getElementById('category-filter').value,
            search: e.target.value
        });
    });

    // Tab switching
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;
            
            // Update buttons
            document.querySelectorAll('.tab-button').forEach(btn => 
                btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update content
            document.querySelectorAll('.tab-pane').forEach(pane => 
                pane.classList.remove('active'));
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter to run code
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
        
        // Ctrl/Cmd + Shift + T to run tests
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            document.getElementById('test-btn').click();
        }
        
        // Ctrl/Cmd + S to save
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveCodeToFile();
        }
        
        // Ctrl/Cmd + K to clear console
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            clearConsole();
        }
        
        // Ctrl/Cmd + / to toggle comment
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
            e.preventDefault();
            toggleComment();
        }
        
        // ? to show help
        if (e.key === '?' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            const activeElement = document.activeElement;
            if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                e.preventDefault();
                showModal('shortcuts-modal');
            }
        }
        
        // Escape to close modal
        if (e.key === 'Escape') {
            hideModal('shortcuts-modal');
        }
    });

    // Tab key for indentation
    editor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            const value = editor.value;
            
            if (e.shiftKey) {
                // Shift+Tab: Unindent
                const beforeCursor = value.substring(0, start);
                const afterCursor = value.substring(end);
                const lineStart = beforeCursor.lastIndexOf('\n') + 1;
                const line = value.substring(lineStart, end);
                
                if (line.startsWith('  ')) {
                    editor.value = value.substring(0, lineStart) + line.substring(2) + afterCursor;
                    editor.selectionStart = editor.selectionEnd = start - 2;
                }
            } else {
                // Tab: Indent
                editor.value = value.substring(0, start) + '  ' + value.substring(end);
                editor.selectionStart = editor.selectionEnd = start + 2;
            }
            
            updateLineNumbers();
        }
    });
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
