// handles redirects for form submissions

document.addEventListener("DOMContentLoaded", function() {
    console.log("Function called");
    var form = document.getElementById("contact-form", function(e) {
        e.preventDefault();

        var data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                window.location.href = "https://ecostruv.tech/success";
                console.log("Success");
            } else {
                alert("Oops! There was an erorr submitting your form.");
                console.log("Failure");
            }
        }).catch(error => {
            alert("Oops! Second error message");
            console.log("Failure 2");
        });
    });
});