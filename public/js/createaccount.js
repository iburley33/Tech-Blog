const signupFormHandler = async (event) => {
        
        event.preventDefault();
      
        const name = document.querySelector('.new-name-input').value.trim();
        const email = document.querySelector('.new-username-input').value.trim();
        const password = document.querySelector('.new-password-input').value.trim();
      
        if (name && email && password) {
          const response = await fetch('/api/users', {  //Ask roman about this fetch route
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }, // This line
          });
      
          if (response.ok) {
            document.location.replace('/'); // db query?
          } else {
            alert(response.statusText);
          }
        }
    };

  document
  .querySelector('.new-user-div')
  .addEventListener('submit', signupFormHandler);

/*   const logoutHandler = async () => {
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
  


  document.querySelector("#logout-button").addEventListener("click", logoutHandler);
  document.querySelector("#login-button").addEventListener("click", redirectLogin);
  document.querySelector("#dashboard-button").addEventListener("click", redirectDashboard);
  document.querySelector("#homepage-button").addEventListener("click", redirectHomepage);
  
  
   */