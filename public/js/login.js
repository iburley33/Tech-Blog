const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector(".username-input").value.trim();
  const password = document.querySelector(".password-input").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert("Your credentials were not accepted. Please try again.");
    }
  }
  
};

const redirectCreate = (event) => {
  event.preventDefault();
  console.log("clicked")
  document.location.replace("/newuser");
  console.log("got here")
}

document
  .getElementById("login-submit-btn")
  .addEventListener("click", loginFormHandler);

document
  .getElementById("create-account-btn")
  .addEventListener("click", redirectCreate);

  const logoutHandler = async () => {
    fetch("/api/users/logout", {
      method: "POST",
    }).then(res => {
      if (res.status==204) {
        document.location.replace("/login")
      }
    });
    // add logic to hide logout button and show login button
  };
  
  
  const redirectLogin = (event) => {
    event.preventDefault();
    console.log("clicked")
    document.location.replace("/login");
    console.log("got here")
  };
  
  
  const redirectDashboard = (event) => {
    event.preventDefault();
    console.log("clicked")
    document.location.replace("/dashboard");
    console.log("got here")
  };
  
  const redirectHomepage = (event) => {
    event.preventDefault();
    console.log("clicked")
    document.location.replace("/");
    console.log("got here")
  };
  


  /* document.querySelector(".saveButton").addEventListener("click", saveLocation);
   */
  document.querySelector("#login-button").addEventListener("click", redirectLogin);
  document.querySelector("#dashboard-button").addEventListener("click", redirectDashboard);
  document.querySelector("#homepage-button").addEventListener("click", redirectHomepage);
  
  
  