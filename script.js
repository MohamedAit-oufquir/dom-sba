


// Cache at least one element using selectElementById. 5%

const title = document.getElementById("title");

// Cache at least one element using querySelector or querySelectorAll. 5%

const toggleBtn = document.querySelector("#toggleBtn");
const output = document.getElementById("output");

// DOM Traversal
const body = document.body;
console.log(body.firstChild); // just an example

// Create element
const para = document.createElement("p");
para.textContent = "Welcome to the theme switcher!";
output.appendChild(para);

// Modify text on click
toggleBtn.addEventListener("click", () => {
  const currentClass = body.classList.contains("light-mode") ? "light" : "dark";
  if (currentClass === "light") {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});