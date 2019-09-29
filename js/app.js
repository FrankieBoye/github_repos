const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const fetchUsers = async (user) => {
  const api_call = await fetch(`https://api.github.com/users/${user}`);

const data = await api_call.json();
return { data }
};

const showData = () => {
  fetchUsers(inputValue.value).then((res) => {
    console.log(res);

    nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;

    unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;

    reposContainer.innerHTML = `Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;

    urlContainer.innerHTML = `Dominant language: <span class="main__profile-value"><div>Couldn't complete this section</div></span>`;

  })
};

searchButton.addEventListener("click", () => {
  showData();
})
