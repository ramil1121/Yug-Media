(function () {
  const pages = [
    ["index.html","Главная"],["news.html","Новости"],["society.html","Общество"],
    ["zhkh.html","ЖКХ"],["law.html","Закон"],["incidents.html","Происшествия"],
    ["fraud.html","Мошенники"],["crime.html","Криминал"],["economy.html","Экономика"],
    ["video.html","Видео"],["contacts.html","Контакты"]
  ];
  const stories = [
    {title:"Почему жительница Темрюка обратилась за помощью к злоумышленникам",category:"Криминал",image:"news-temryuk.jpg",href:"crime.html"},
    {title:"Семье пострадавших при атаке в Новороссийске девочек дадут жильё",category:"Происшествия",image:"news-novorossiysk.jpg",href:"incidents.html"},
    {title:"В Краснодарском крае открылся новый молодежный центр",category:"Общество",image:"news-temryuk.jpg",href:"news.html"}
  ];
  const current = location.pathname.split("/").pop() || "index.html";
  const makeLink = ([file,label]) => '<a href="'+file+'"'+(file===current?' class="on" aria-current="page"':'')+'>'+label+'</a>';
  const main = document.querySelector("main");
  if (!main) return;

  const shell = document.createElement("div");
  shell.className = "page-layout";
  const sheet = document.createElement("div");
  sheet.className = "sheet";
  sheet.innerHTML = `
    <div class="sheet-top">
      <div class="pill"></div>
      <nav class="links" aria-label="Разделы сайта">
        <button class="burger" type="button" aria-expanded="false">МЕНЮ</button>
        <div class="menu">${pages.map(makeLink).join("")}</div>
      </nav>
      <img class="top" src="top.png" alt="Горожанин ЮГ">
    </div>
    <div class="sheet-body"></div>
    <div class="sheet-bottom"><img src="bottom.png" alt=""><p>© 2026 Горожанин ЮГ</p></div>`;
  main.parentNode.insertBefore(shell, main);
  shell.appendChild(sheet);
  sheet.querySelector(".sheet-body").appendChild(main);

  // Создаем левый блок (первые 2 новости)
  const leftSidebar = document.createElement("aside");
  leftSidebar.className = "sidebar sidebar-left";
  leftSidebar.setAttribute("aria-label","Читайте также");
  leftSidebar.innerHTML = '<h2>Читайте также</h2>' + stories.slice(0, 2).map(story => `
    <a class="side-card" href="${story.href}">
      <img src="${story.image}" alt="">
      <span class="side-category">${story.category}</span>
      <strong>${story.title}</strong>
    </a>`).join("");
  shell.appendChild(leftSidebar);

  // Создаем правый блок (3-я новость + дубль для объема)
  const rightSidebar = document.createElement("aside");
  rightSidebar.className = "sidebar sidebar-right";
  rightSidebar.setAttribute("aria-label","Интересное");
  rightSidebar.innerHTML = '<h2>Рекомендуем</h2>' + [stories[2], stories[0]].map(story => `
    <a class="side-card" href="${story.href}">
      <img src="${story.image}" alt="">
      <span class="side-category">${story.category}</span>
      <strong>${story.title}</strong>
    </a>`).join("");
  shell.appendChild(rightSidebar);

  const nav = sheet.querySelector(".links");
  const burger = sheet.querySelector(".burger");
  burger.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(opened));
  });
})();
