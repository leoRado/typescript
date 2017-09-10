for (var i = 1; i <= 5; i++) {
    setTimeout(function() {console.log("hello var: " + i);}, 1000);
}

for (let i = 1; i <= 5; i++) {
    setTimeout(function() {console.log("hello let: " + i);}, 1000);
}