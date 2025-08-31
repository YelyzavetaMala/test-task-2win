const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");
const gallery = document.querySelector(".gallery");
const sortedSection = document.querySelector(".sorted-section");
const pagination = document.querySelector(".pagination");
const page = document.body;

// функція перемикання вигляду таблиці карток
function switchView(mode) {
  if (mode === "grid") {
    gallery.classList.remove("list-view");
    gallery.classList.add("grid-view");

    sortedSection.classList.remove("list-style");
    sortedSection.classList.add("grid-style");

    pagination.classList.remove("list-style");

    page.classList.remove("list-mode");
    page.classList.add("grid-mode");

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  } else {
    gallery.classList.remove("grid-view");
    gallery.classList.add("list-view");

    sortedSection.classList.remove("grid-style");
    sortedSection.classList.add("list-style");

    pagination.classList.add("list-style");

    page.classList.remove("grid-mode");
    page.classList.add("list-mode");

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  }
}

gridBtn.addEventListener("click", () => switchView("grid"));
listBtn.addEventListener("click", () => switchView("list"));
