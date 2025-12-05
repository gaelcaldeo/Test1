document.getElementById("helloBtn").addEventListener("click", function() {
    alert("Hello! Welcome to my portfolio!");
});
// Contact form submission
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submit
    const action = form.getAttribute("action");
    fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if(response.ok){
            document.getElementById("successMsg").style.display = "block";
            form.reset();
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    }).catch(error => {
        alert("Oops! There was a problem submitting your form.");
    });
});
