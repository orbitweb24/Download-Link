// Progress tracking
let progress = 0;
const progressFill = document.getElementById("progressFill");
const messageEl = document.getElementById("message");

function updateProgress(value) {
  progress = value;
  progressFill.style.width = progress + "%";
}

function showMessage(text, type = "info") {
  messageEl.textContent = text;
  messageEl.className = `show message-${type}`;
  setTimeout(() => {
    messageEl.classList.remove("show");
  }, 5000);
}

// Initially disable the verify button
document.getElementById("verifyButton").disabled = true;

// Monitor when the WhatsApp link is clicked
document.querySelector(".whatsapp-link").addEventListener("click", function () {
  // Mark step 3 as completed
  document.getElementById("step3").style.background =
    "linear-gradient(135deg, #d4edda, #c3e6cb)";
  document.getElementById("step3").style.borderLeftColor = "#28a745";

  // Simulate the user completing the third task
  setTimeout(() => {
    showMessage(
      "You have joined the WhatsApp group. You can now verify the actions.",
      "success"
    );
    document.getElementById("verifyButton").disabled = false;
    document.getElementById("verifyButton").classList.remove("pulse");
    updateProgress(33);
  }, 2000);
});

// Verify actions when the verify button is clicked
document.getElementById("verifyButton").addEventListener("click", function () {
  const instagramFollowed = confirm("Did you follow us on Instagram?");
  const youtubeSubscribed = confirm(
    "Did you subscribe to our YouTube channel?"
  );

  if (instagramFollowed && youtubeSubscribed) {
    // Mark steps 1 and 2 as completed
    if (instagramFollowed) {
      document.getElementById("step1").style.background =
        "linear-gradient(135deg, #d4edda, #c3e6cb)";
      document.getElementById("step1").style.borderLeftColor = "#28a745";
    }
    if (youtubeSubscribed) {
      document.getElementById("step2").style.background =
        "linear-gradient(135deg, #d4edda, #c3e6cb)";
      document.getElementById("step2").style.borderLeftColor = "#28a745";
    }

    updateProgress(100);
    showMessage(
      "Verification successful! You can now download the file.",
      "success"
    );
    document.getElementById("downloadButton").style.display = "inline-block";
    document.getElementById("verifyButton").disabled = true;

    // Add animation to download button
    setTimeout(() => {
      document.getElementById("downloadButton").classList.add("pulse");
    }, 500);
  } else {
    showMessage("Please complete all steps before downloading.", "error");
    updateProgress(33); // Reset to WhatsApp step only
  }
});

// Handle file download
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    window.location.href =
      "https://drive.usercontent.google.com/download?id=17rbiDBRFL5pvs7TAIJ0oj9btBNtfPjrC&export=download&authuser=0";

    this.innerHTML = '<i class="fas fa-check"></i> File Downloaded';
    this.disabled = true;
    this.classList.remove("pulse");
    showMessage("File download started successfully!", "success");
    updateProgress(100);
  });

// Add click tracking for social links
document.querySelectorAll(".step-link").forEach((link) => {
  link.addEventListener("click", function () {
    const step = this.closest(".step");
    step.style.transform = "scale(0.98)";
    setTimeout(() => {
      step.style.transform = "";
    }, 150);
  });
});

// Optional: Add keyboard accessibility
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    const activeElement = document.activeElement;
    if (activeElement.tagName === "BUTTON" && !activeElement.disabled) {
      activeElement.click();
    }
  }
});

// Optional: Add smooth scrolling for better UX
window.addEventListener("load", function () {
  document.body.style.scrollBehavior = "smooth";
});

// Optional: Add loading state management
function setLoadingState(element, isLoading) {
  if (isLoading) {
    element.style.opacity = "0.7";
    element.style.pointerEvents = "none";
  } else {
    element.style.opacity = "1";
    element.style.pointerEvents = "auto";
  }
}
