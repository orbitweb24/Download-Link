document.getElementById("verifyButton").addEventListener("click", function () {
  const userVerified = confirm(
    "Have you followed on Instagram, subscribed on YouTube, and joined the WhatsApp group?"
  );

  if (userVerified) {
    document.getElementById("message").textContent =
      "Verification successful! You can now download the file.";
    document.getElementById("downloadButton").style.display = "inline-block";
    document.getElementById("verifyButton").disabled = true;
  } else {
    document.getElementById("message").textContent =
      "Please complete all steps first.";
  }
});
// Enable verify button after some delay to simulate time spent on actions
setTimeout(() => {
  document.getElementById("verifyButton").disabled = false;
}, 3000);

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    window.location.href =
      "https://drive.google.com/file/d/1neJ26L6eTmKXz8uoDRq2jskpAmkTV0CV/view?usp=sharing";
  });

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

if (getCookie("verified") === "true") {
  document.getElementById("verifyButton").disabled = true;
  document.getElementById("downloadButton").style.display = "inline-block";
  document.getElementById("message").textContent = "You have already verified!";
}

document.getElementById("verifyButton").addEventListener("click", function () {
  const userVerified = confirm(
    "Have you followed on Instagram, subscribed on YouTube, and joined the WhatsApp group?"
  );
  if (userVerified) {
    setCookie("verified", "true", 7);
    document.getElementById("message").textContent =
      "Verification successful! You can now download the file.";
    document.getElementById("downloadButton").style.display = "inline-block";
    document.getElementById("verifyButton").disabled = true;
  }
});
