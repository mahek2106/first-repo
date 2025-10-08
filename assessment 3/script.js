function validateForm() {
  let valid = true;

  // Reset previous errors
  document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Name Validation
  if (name === "") {
    document.getElementById("nameError").innerHTML = "Please Enter Your Name";
    valid = false;
  }

  // Email Validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").innerHTML = "Please Enter Your Email";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML = "Please Enter a Valid Email";
    valid = false;
  }

  // Phone Validation
  const phonePattern = /^[0-9]{10}$/;
  if (phone === "") {
    document.getElementById("phoneError").innerHTML = "Please Enter Your Phone";
    valid = false;
  } else if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").innerHTML = "Enter a Valid 10-digit Phone Number";
    valid = false;
  }

  // Subject Validation
  if (subject === "") {
    document.getElementById("subjectError").innerHTML = "Please Enter Your Subject";
    valid = false;
  }

  // Message Validation
  if (message === "") {
    document.getElementById("messageError").innerHTML = "Please Enter Your Message";
    valid = false;
  }

  if (valid) {
    alert("Form Submitted Successfully!");
  }

  return valid;
}
