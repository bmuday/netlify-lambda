const fetchUsers = async () =>
  await (await fetch("./netlify/functions/getusers")).json();

fetchUsers()
  .then((data) => {
    usersList = document.querySelector("#users");
    console.log(data);
    data.forEach((user) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      const link = document.createElement("a");
      link.appendChild(document.createTextNode(user.login));
      link.href = user.html_url;
      link.target = "_blank";
      li.appendChild(link);
      usersList.appendChild(li);
    });
  })
  .catch((err) => console.log(err.message));
