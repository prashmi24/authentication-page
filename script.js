document.addEventListener("DOMContentLoaded", function () {
  // Enroll Now button functionality
  const enrollButton = document.querySelector(".enroll-button");
  const enrollSection = document.querySelector(".enroll");

  // Show enroll section on button hover
  enrollButton.addEventListener("mouseover", function () {
    enrollSection.style.display = "block";
  });

  // Hide enroll section when mouse leaves the button area
  enrollButton.addEventListener("mouseout", function () {
    enrollSection.style.display = "none";
  });

  // Basic form validation
  const loginForm = document.querySelector(".auth-form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const onlineId = document.getElementById("online-id").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simple validation checks
    if (!onlineId || !password) {
      alert("Please fill in both Online ID and Password fields.");
      return;
    }

    // If validation passes, submit the form (you may want to handle actual authentication here)
    alert("Form submitted successfully!");
    // loginForm.submit(); // Uncomment if you want the form to be submitted
  });

  // Remember Me functionality
  const rememberMeCheckbox = document.getElementById("remember-me");

  rememberMeCheckbox.addEventListener("change", function () {
    if (rememberMeCheckbox.checked) {
      alert("You have selected to be remembered!");
      // Code to handle remembering user credentials (not secure in production)
    }
  });

  // Dynamic footer date (if needed)
  const footerYear = document.querySelector(".footer p");
  footerYear.textContent = `© ${new Date().getFullYear()} Regions Financial Corporation. All Rights Reserved.`;
});
