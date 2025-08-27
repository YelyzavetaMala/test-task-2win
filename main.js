const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");
const gallery = document.querySelector(".gallery");

gridBtn.addEventListener("click", () => {
  gallery.classList.remove("list-view");
  gallery.classList.add("grid-view");
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
  gallery.classList.remove("grid-view");
  gallery.classList.add("list-view");
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
});
