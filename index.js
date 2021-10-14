const arrayUsers = [];

async function users() {
  const responsive = await fetch(
    "https://randomuser.me/api/?seed='people'&results=3"
  );
  const data = await responsive.json();
  arrayUsers.push(...data.results);
}
users();

const window1 = document.querySelector(".window1");

for (let index = 0; index <= arrayUsers.length; index++) {
  console.log("Hello");

  const userCard = document.createElement("article");

  const headerText = document.createElement("header");

  userCard.appendChild(headerText)
  const headerFirstLine = document.createElement("div");
  const headerSecondLine = document.createElement("div");
  headerText.appendChild(headerFirstLine)
  headerText.appendChild(headerSecondLine)

  const main = document.createElement("main");
  userCard.appendChild(main)
  const avatar = document.createElement("div");
  main.appendChild(avatar)

  const footerText = document.createElement("footer");
  userCard.appendChild(footerText)
  const footerFirstLine = document.createElement("div");
  const footerSecondLine = document.createElement("div");
  footerText.appendChild(footerFirstLine)
  footerText.appendChild(footerSecondLine)

  window1.appendChild(userCard);
}
