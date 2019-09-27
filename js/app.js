const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "Iv1.e1fcdec707a6e340";
const client_secret = "930612375a150aa3d890fbc6a7341ffa1c63feb2";

const fetchUsers = async (user) => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

const data = await api_call.json();
return { data }
};

const showData = () => {
  fetchUsers(inputValue.value).then((res) => {
    console.log(res);
  })
}


searchButton.addEventListener("click", () => {
  showData();
})
