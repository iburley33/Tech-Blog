const logoutHandler = async () => {
  fetch("/api/users/logout", {
    method: "POST",
  }).then(res => {
    if (res.status == 204) {
      document.location.replace("/login")
    }
  });
  // add logic to hide logout button and show login button
};

const postBlog = async () =>
  fetch('')
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
document.querySelector("#logout-button").addEventListener("click", logoutHandler);
document.querySelector("#login-button").addEventListener("click", redirectLogin);
document.querySelector("#dashboard-button").addEventListener("click", redirectDashboard);
document.querySelector("#homepage-button").addEventListener("click", redirectHomepage);


