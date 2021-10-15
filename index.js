const arrayUsers = [];

async function users() {
  const responsive = await fetch(
    "https://randomuser.me/api/?seed='people'&results=3"
  );
  const data = await responsive.json();
  arrayUsers.push(...data.results);
}


users().then(() => {
  console.log(arrayUsers);
  const window1 = document.querySelector(".window1");

  for (let index = 0; index < arrayUsers.length; index++) {
    console.log("Hello", arrayUsers[index]);

    // 
    const user = arrayUsers[index]

    const userCard = document.createElement("article");
    userCard.className = "userCard";

    const header = document.createElement("header");
    header.className = "header";
    userCard.appendChild(header);

    const headerFirstLine = document.createElement("div");
    headerFirstLine.className = "headerFirstLine";

    //
    headerFirstLine.textContent = 'WANTED'

    const headerSecondLine = document.createElement("div");
    headerSecondLine.className = "headerSecondLine";

    //
    headerSecondLine.textContent = `${user.name.first} ${user.name.last}`

    header.appendChild(headerFirstLine);
    header.appendChild(headerSecondLine);

    const main = document.createElement("main");
    main.className = "main";
    userCard.appendChild(main);

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    main.appendChild(avatar);

    const footer = document.createElement("footer");
    footer.className = "footer";
    userCard.appendChild(footer);

    const footerFirstLine = document.createElement("div");
    footerFirstLine.className = "footerFirstLine";
    const footerSecondLine = document.createElement("div");
    footerSecondLine.className = "footerSecondLine";

    footer.appendChild(footerFirstLine);
    footer.appendChild(footerSecondLine);

    window1.appendChild(userCard);
  }
});
