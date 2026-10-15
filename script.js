const barre = document.querySelector(".xp");

function majBarre() {
    const page = document.documentElement;
    const max = Math.max(1, page.scrollHeight - page.clientHeight);
    barre.style.width = (page.scrollTop / max) * 100 + "%";
}

addEventListener("scroll", majBarre, { passive: true });
majBarre();