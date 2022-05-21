const contactForm = document.querySelector(".contact-form");

let fullName = document.getElementById("name");
let email = document.getElementById("email");
let contactNo = document.getElementById("contactNo");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: fullName.value,
    email: email.value,
    contact: contactNo.value,
    subject: subject.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Your enquiry has been sent. We will respond ASAP.");
      fullName.value = "";
      email.value = "";
      contactNo.value = "";
      subject.value = "";
      message.value = "";
    } else {
      alert("Something went wrong!");
    }
  };

  xhr.send(JSON.stringify(formData));
});
