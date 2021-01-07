function sendEmail(contactForm) {
    emailjs.send("service_k93x9k9", "template_sc29si6", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }, "user_8HlRxslkboMpSfraHqGLC")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}