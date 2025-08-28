/**
 * 📂 script.js
 * Assignment: Mastering JavaScript Fundamentals
 * Author: Eugene
 *
 * This file demonstrates:
 * Part 1: Variables, Data Types, Conditionals
 * Part 2: Functions
 * Part 3: Loops
 * Part 4: DOM Manipulation
 */

// -------------------------------
// ✅ PART 1: VARIABLES & CONDITIONALS
// -------------------------------

/**
 * Function: checkAge
 * Purpose: Gets user age and displays eligibility message.
 */
function checkAge() {
  const ageInput = document.getElementById("ageInput").value;
  const resultElement = document.getElementById("ageResult");
  const age = parseInt(ageInput);

  // Reset previous result
  resultElement.textContent = "";

  // Validate input
  if (isNaN(age) || age < 0) {
    resultElement.textContent = "❌ Please enter a valid age.";
    resultElement.style.color = "red";
    return;
  }

  // Conditional logic
  if (age < 18) {
    resultElement.textContent = "🚫 You are under 18. Access denied.";
    resultElement.style.color = "red";
  } else if (age >= 18 && age < 65) {
    resultElement.textContent = "✅ You are an adult. Welcome!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "👴 You are a senior. Special access granted!";
    resultElement.style.color = "blue";
  }
}

// -------------------------------
// ✅ PART 2: REUSABLE FUNCTIONS
// -------------------------------

/**
 * Function: formatName
 * Purpose: Takes first and last name, returns formatted full name.
 */
function formatName() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const output = document.getElementById("nameOutput");

  if (!firstName || !lastName) {
    output.textContent = "⚠️ Please enter both first and last name.";
    output.style.color = "orange";
    return;
  }

  // Capitalize first letters
  const formattedName = `${firstName.charAt(0).toUpperCase()}${firstName
    .slice(1)
    .toLowerCase()} ${lastName.charAt(0).toUpperCase()}${lastName
    .slice(1)
    .toLowerCase()}`;
  output.textContent = `Hello, ${formattedName}!`;
  output.style.color = "purple";
}

/**
 * Function: calculateDiscount
 * Purpose: Calculates discounted price based on user input.
 */
function calculateDiscount() {
  const price = parseFloat(document.getElementById("priceInput").value);
  const discountPercent = parseFloat(
    document.getElementById("discountInput").value
  );
  const output = document.getElementById("priceOutput");

  if (
    isNaN(price) ||
    isNaN(discountPercent) ||
    price < 0 ||
    discountPercent < 0 ||
    discountPercent > 100
  ) {
    output.textContent = "❌ Invalid price or discount percentage.";
    output.style.color = "red";
    return;
  }

  const discountAmount = (price * discountPercent) / 100;
  const finalPrice = price - discountAmount;

  output.textContent = `✅ Original: $${price.toFixed(
    2
  )} → Discount: ${discountPercent}% → Final: $${finalPrice.toFixed(2)}`;
  output.style.color = "green";
}

// -------------------------------
// ✅ PART 3: LOOPS
// -------------------------------

/**
 * Function: generateList
 * Purpose: Uses a for loop to generate a numbered list.
 */
function generateList() {
  const countInput = document.getElementById("listCount").value;
  const count = parseInt(countInput);
  const listElement = document.getElementById("numberList");

  // Clear previous list
  listElement.innerHTML = "";

  if (isNaN(count) || count <= 0) {
    const item = document.createElement("li");
    item.textContent = "Please enter a positive number.";
    item.style.color = "red";
    listElement.appendChild(item);
    return;
  }

  // For loop to generate items
  for (let i = 1; i <= count; i++) {
    const item = document.createElement("li");
    item.textContent = `Item ${i}`;
    listElement.appendChild(item);
  }
}

/**
 * Function: startCountdown
 * Purpose: Uses a while loop to simulate a countdown.
 */
function startCountdown() {
  const startInput = document.getElementById("countdownStart").value;
  let num = parseInt(startInput);
  const output = document.getElementById("countdownOutput");

  if (isNaN(num) || num <= 0) {
    output.textContent = "❌ Please enter a positive number.";
    output.style.color = "red";
    return;
  }

  output.textContent = ""; // Clear previous

  // While loop to build countdown string
  let countdownStr = "";
  while (num > 0) {
    countdownStr += num + " ⏳ ";
    num--;
  }
  countdownStr += "Blast off! 🚀";

  output.textContent = countdownStr;
  output.style.color = "#d63031";
}

// -------------------------------
// ✅ PART 4: DOM MANIPULATION
// -------------------------------

/**
 * Function: changeHeading
 * Purpose: Changes the main page title dynamically.
 */
function changeHeading() {
  const heading = document.querySelector("h1");
  const currentText = heading.textContent;

  if (currentText === "📚 JavaScript Fundamentals Playground") {
    heading.textContent = "🎉 You Changed Me!";
    heading.style.color = "#e67e22";
  } else {
    heading.textContent = "📚 JavaScript Fundamentals Playground";
    heading.style.color = "#2c3e50";
  }
}

/**
 * Function: toggleMode
 * Purpose: Toggles dark mode on the entire page.
 */
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

/**
 * Function: addElement
 * Purpose: Creates and appends a new paragraph dynamically.
 */
function addElement() {
  const container = document.getElementById("dynamicContent");
  const newParagraph = document.createElement("p");
  const timestamp = new Date().toLocaleTimeString();
  newParagraph.textContent = `Dynamic paragraph added at ${timestamp}.`;
  newParagraph.style.opacity = "0";
  container.appendChild(newParagraph);

  // Animate in
  setTimeout(() => {
    newParagraph.style.transition = "opacity 0.5s";
    newParagraph.style.opacity = "1";
  }, 10);
}
