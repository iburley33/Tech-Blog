/* const logoutHandler = async () => {
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

document.querySelector("#logout-button").addEventListener("click", logoutHandler);
document.querySelector("#login-button").addEventListener("click", redirectLogin);
document.querySelector("#dashboard-button").addEventListener("click", redirectDashboard);
document.querySelector("#homepage-button").addEventListener("click", redirectHomepage);


 */


const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('.new-comment').value.trim();

  if (comment) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create blog post');
    }
  }
};



document
  .querySelector('.new-comment')
  .addEventListener('submit', newFormHandler);



const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};