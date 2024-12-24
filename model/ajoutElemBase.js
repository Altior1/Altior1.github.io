document.addEventListener("DOMContentLoaded", afficheElem);


function afficheElem () {
    afficheNav();
    afficheFoot();
}
async function afficheNav () {
    const nav = document.getElementById("navbar");
    let dataNav = await fetch("../vue/navbar.html").then(res => res.text());
    nav.innerHTML = dataNav;
}

function afficheFoot () {
    const foot = document.getElementById("foot");
    foot.innerHTML = "Copyrigth 2024 Altior1";
}