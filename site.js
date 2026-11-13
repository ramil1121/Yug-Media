
(function(){

var pages=[
["index.html","Главная"],
["news.html","Новости"],
["society.html","Общество"],
["zhkh.html","ЖКХ"],
["law.html","Закон"],
["incidents.html","Происшествия"],
["fraud.html","Мошенники"],
["crime.html","Криминал"],
["economy.html","Экономика"],
["video.html","Видео"],
["contacts.html","Контакты"]
];

var cur=location.pathname.split("/").pop()||"index.html";

function a(p){
return '<a href="'+p[0]+'"'+(p[0]==cur?' class="on"':'')+'>'+p[1]+'</a>';
}

var main=document.querySelector("main");
var s=document.createElement("div");

s.className="sheet";

s.innerHTML=`
<div class="sheet-top">
    <div class="pill"></div>

    <nav class="links" aria-label="Разделы">
        <button class="burger" type="button" aria-expanded="false">МЕНЮ</button>

        <div class="menu">
            <div class="l">${pages.slice(0,5).map(a).join("")}</div>
            <div class="g"></div>
            <div class="r">${pages.slice(5).map(a).join("")}</div>
        </div>
    </nav>

    <img class="top" src="top.png" alt="Горожанин ЮГ">
</div>

<div class="sheet-body"></div>

<div class="sheet-bottom">
    <img src="bottom.png" alt="">
    <p>© 2026 Горожанин ЮГ</p>
</div>
`;

main.parentNode.insertBefore(s,main);

s.querySelector(".sheet-body").appendChild(main);

var n=s.querySelector(".links");
var b=s.querySelector(".burger");

b.onclick=function(){
var opened=n.classList.toggle("open");
b.setAttribute("aria-expanded",opened);
};

})();
