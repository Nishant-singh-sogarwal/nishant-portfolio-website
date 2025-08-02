// Set dynamic copyright
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Optional: Change text on click
document.getElementById("username").addEventListener("click", function () {
  alert("Welcome to Nishant's Portfolio!");
});

// Optional: Console log a message
console.log("Thanks for visiting Nishant's portfolio!");
