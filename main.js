function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_71vfh47";
  const templateID = "template_fbwf5tk";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
// Scroll

function aboutScroll() {
  window.scrollTo(0, 650);
}
function skillsScroll() {
  window.scrollTo(0, 1300);
}
function FAQScroll() {
  window.scrollTo(0, 1950);
}
function contactScroll() {
  window.scrollTo(0, 2600);
}
