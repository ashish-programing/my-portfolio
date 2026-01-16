// Show welcome alert when page loads
window.onload = function() {
    alert("Welcome to Jhasketan's Profile Page 🚀");
    animateLikes();
};

// Toggle Dark Mode
document.getElementById("darkModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")) {
        alert("Dark Mode Activated 🌙");
    } else {
        alert("Light Mode Activated ☀️");
    }
});

// Profile Picture Click Event
document.getElementById("profilePic").addEventListener("click", function() {
    alert("Hey! That’s me 😎");
});

// Animate Likes List
function animateLikes() {
    const likes = document.querySelectorAll("#likesList li");
    let i = 0;
    setInterval(() => {
        likes.forEach(like => like.style.color = "black"); // reset
        likes[i].style.color = "#0077b6"; // highlight
        likes[i].style.fontWeight = "bold";
        i = (i + 1) % likes.length;
    }, 1500);
}

// Animate Likes List with dark mode awareness
function animateLikes() {
    const likes = document.querySelectorAll("#likesList li");
    let i = 0;
    setInterval(() => {
        likes.forEach(like => {
            like.style.color = document.body.classList.contains("dark-mode") ? "#f5f5f5" : "black";
            like.style.fontWeight = "normal";
        });
        likes[i].style.color = "#ffcc00"; // Highlight in gold for visibility
        likes[i].style.fontWeight = "bold";
        i = (i + 1) % likes.length;
    }, 1500);
}

// Toggle Dark Mode
document.getElementById("darkModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});