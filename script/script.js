// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

const contactButton = document.getElementById('contactButton');

        if (contactButton) {
            contactButton.addEventListener('click', sendEmail);
        }

        function sendEmail() {
            // Get form data
            var name = document.getElementById("nameInput").value;
            var email = document.getElementById("emailInput").value;
            var subject = document.getElementById("subjectInput").value;
            var message = document.getElementById("comment").value;

            // Initialize Email.js
            emailjs.init("PLzxh1j6zDIKI_nW1");

            // Prepare email parameters
            var params = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            // Send email
             emailjs.send("service_0ak6hzi", "template_64xnjbr", params)
        .then(function (response) {
            console.log("Email sent successfully", response);

            // Display success message within the form
            displaySuccessMessage();

            // Reset the form
            document.getElementById("myForm").reset();

            // You can add a success message or other actions here
        }, function (error) {
            console.log("Email sending failed", error);
            // Handle errors here
			
			displayErrorMessage();

            // Reset the form
            document.getElementById("myForm").reset();

        });
}

function displaySuccessMessage() {
    
    var successMessage = document.createElement("div");
    successMessage.className = "alert alert-success";
    successMessage.innerHTML = "Email sent successfully!";

   
    document.getElementById("myForm").appendChild(successMessage);

   
}

function displayErrorMessage() {
  
    var successMessage = document.createElement("div");
    successMessage.className = "alert alert-danger";
    successMessage.innerHTML = "Email sending failed. Please send an email to pr24071@gmail.com";

  
    document.getElementById("myForm").appendChild(successMessage);

   
}
