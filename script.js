// document.getElementById("verifyButton").addEventListener("click", function () {
//   const userVerified = confirm(
//     "Have you followed on Instagram, subscribed on YouTube, and joined the WhatsApp group?"
//   );

//   if (userVerified) {
//     document.getElementById("message").textContent =
//       "Verification successful! You can now download the file.";
//     document.getElementById("downloadButton").style.display = "inline-block";
//     document.getElementById("verifyButton").disabled = true;
//   } else {
//     document.getElementById("message").textContent =
//       "Please complete all steps first.";
//   }
// });
// // Enable verify button after some delay to simulate time spent on actions
// setTimeout(() => {
//   document.getElementById("verifyButton").disabled = false;
// }, 3000);

// document
//   .getElementById("downloadButton")
//   .addEventListener("click", function () {
//     window.location.href =
//       "https://drive.google.com/file/d/17rbiDBRFL5pvs7TAIJ0oj9btBNtfPjrC/view?usp=sharing";
//   });

// function setCookie(name, value, days) {
//   let expires = "";
//   if (days) {
//     let date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + value + expires + "; path=/";
// }

// function getCookie(name) {
//   let nameEQ = name + "=";
//   let ca = document.cookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) === " ") c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// if (getCookie("verified") === "true") {
//   document.getElementById("verifyButton").disabled = true;
//   document.getElementById("downloadButton").style.display = "inline-block";
//   document.getElementById("message").textContent = "You have already verified!";
// }

// document.getElementById("verifyButton").addEventListener("click", function () {
//   const userVerified = confirm(
//     "Have you followed on Instagram, subscribed on YouTube, and joined the WhatsApp group?"
//   );
//   if (userVerified) {
//     setCookie("verified", "true", 7);
//     document.getElementById("message").textContent =
//       "Verification successful! You can now download the file.";
//     document.getElementById("downloadButton").style.display = "inline-block";
//     document.getElementById("verifyButton").disabled = true;
//   }
// });

// document.getElementById("verifyButton").addEventListener("click", function () {
//   // Prompt user to confirm if they have followed and subscribed
//   const instagramFollowed = confirm("Did you follow us on Instagram?");
//   const youtubeSubscribed = confirm(
//     "Did you subscribe to our YouTube channel?"
//   );
//   const whatsappJoined = confirm("Did you join our WhatsApp group?");

//   if (instagramFollowed && youtubeSubscribed && whatsappJoined) {
//     document.getElementById("message").textContent =
//       "Verification successful! You can now download the file.";
//     document.getElementById("downloadButton").style.display = "inline-block";
//     document.getElementById("verifyButton").disabled = true;
//   } else {
//     document.getElementById("message").textContent =
//       "Please complete all steps before downloading.";
//   }
// });

// // Enable the verify button after a delay (optional simulation for more realistic interaction)
// setTimeout(() => {
//   document.getElementById("verifyButton").disabled = false;
// }, 3000);

// document
//   .getElementById("downloadButton")
//   .addEventListener("click", function () {
//     // Allow download only if the verification was successful
//     window.location.href =
//       "https://drive.google.com/uc?export=download&id=1neJ26L6eTmKXz8uoDRq2jskpAmkTV0CV";
//   });

// document.getElementById("verifyButton").addEventListener("click", function () {
//   // Prompt user to confirm if they have followed and subscribed
//   const instagramFollowed = confirm("Did you follow us on Instagram?");
//   const youtubeSubscribed = confirm(
//     "Did you subscribe to our YouTube channel?"
//   );
//   const whatsappJoined = confirm("Did you join our WhatsApp group?");

//   if (instagramFollowed && youtubeSubscribed && whatsappJoined) {
//     document.getElementById("message").textContent =
//       "Verification successful! You can now download the file.";
//     document.getElementById("downloadButton").style.display = "inline-block";
//     document.getElementById("verifyButton").disabled = true;
//   } else {
//     document.getElementById("message").textContent =
//       "Please complete all steps before downloading.";
//   }
// });

// // Enable the verify button after a delay (optional simulation for more realistic interaction)
// setTimeout(() => {
//   document.getElementById("verifyButton").disabled = false;
// }, 3000);

// document
//   .getElementById("downloadButton")
//   .addEventListener("click", function () {
//     // Allow download only if the verification was successful
//     window.location.href =
//       "https://drive.google.com/uc?export=download&id=1neJ26L6eTmKXz8uoDRq2jskpAmkTV0CV";

//     // Disable the download button after the file is downloaded
//     document.getElementById("downloadButton").textContent = "File Downloaded";
//     document.getElementById("downloadButton").disabled = true;
//   });

// Initially disable the verify button
document.getElementById("verifyButton").disabled = true;

// Monitor when the WhatsApp link is clicked
document.querySelector(".whatsapp-link").addEventListener("click", function () {
  // Simulate the user completing the third task (joining WhatsApp group)
  setTimeout(() => {
    document.getElementById("message").textContent =
      "You have joined the WhatsApp group. You can now verify the actions.";
    document.getElementById("verifyButton").disabled = false; // Enable the verify button after the WhatsApp link is clicked
  }, 2000); // Optional delay to simulate action completion
});

// Verify actions when the verify button is clicked
document.getElementById("verifyButton").addEventListener("click", function () {
  // Prompt user to confirm if they have followed and subscribed
  const instagramFollowed = confirm("Did you follow us on Instagram?");
  const youtubeSubscribed = confirm(
    "Did you subscribe to our YouTube channel?"
  );

  if (instagramFollowed && youtubeSubscribed) {
    document.getElementById("message").textContent =
      "Verification successful! You can now download the file.";
    document.getElementById("downloadButton").style.display = "inline-block";
    document.getElementById("verifyButton").disabled = true;
  } else {
    document.getElementById("message").textContent =
      "Please complete all steps before downloading.";
  }
});

// Handle file download and disable the download button after downloading
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1neJ26L6eTmKXz8uoDRq2jskpAmkTV0CV";
    document.getElementById("downloadButton").textContent = "File Downloaded";
    document.getElementById("downloadButton").disabled = true;
  });
