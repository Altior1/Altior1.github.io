document.addEventListener("DOMContentLoaded", afficheElem);


function afficheElem () {
    afficheNav();
    afficheFoot();
    ajoutEffetBtn()
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

function ajoutEffetBtn () {
    let btnkisuisje = document.getElementById("btnkisuisje");
    let btnouvaije = document.getElementById("btnouvaije");
    btnkisuisje.addEventListener("click", function () {
        let laDiv = document.getElementById("kisuisje");
        if (laDiv.style.display === "block") {
            laDiv.style.display = "none";
        }
        else {
            laDiv.style.display = "block";
        }
    });
    btnouvaije.addEventListener("click", function () {
        let laDiv = document.getElementById("ouvaije");
        if (laDiv.style.display === "block") {
            laDiv.style.display = "none";
        }
        else {
            laDiv.style.display = "block";
        }
    });
}