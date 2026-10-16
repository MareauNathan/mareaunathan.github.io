const barre = document.querySelector(".xp");

function majBarre() {
    const page = document.documentElement;
    const max = Math.max(1, page.scrollHeight - page.clientHeight);
    barre.style.width = (page.scrollTop / max) * 100 + "%";
}

addEventListener("scroll", majBarre, { passive: true });
majBarre();

document.querySelectorAll("main h2").forEach(titre => {
    const lien = document.createElement("a");
    lien.href = "#";
    lien.className = "haut";
    lien.textContent = "↑";
    lien.setAttribute("aria-label", "Revenir en haut de la page");
    lien.title = "Revenir en haut";
    titre.append(" ", lien);
});