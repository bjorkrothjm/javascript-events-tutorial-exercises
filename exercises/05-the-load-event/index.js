// your function goes here
window.onload = function loadListener(){
    alert("loading finished... - this alert was loaded using .onload + normal function");
};

// Using onload + anonymous function
window.onload = function() {
    alert("loading finished... - this alert was loaded using .onload + anonymous function");
};

// Using onload + Arrow function 
window.onload = () => {
    alert("loading finished... - this alert was loaded using .onload + Arrow function");
};

window.addEventListener("load", function loadListener2() {
    alert("loading finished... - this alert was loaded using addEventListener");
});

// Using addEventListener + anonymous function
window.addEventListener("load", function() {
    alert("loading finished... - this alert was loaded using addEventListener + anonymous function");
});

// Using addEventListener + anonymous function
window.addEventListener("load", () => {
    alert("loading finished... - this alert was loaded using addEventListener + Arrow function")
})




