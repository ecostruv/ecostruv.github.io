// handles redirects for form submissions

document.addEventListener("DOMContentLoaded", function() {
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
            } else {
                alert("Oops! There was an erorr submitting your form.");
            }
        }).catch(error => {
            alert("Oops! Second error message");
        })
    })
});