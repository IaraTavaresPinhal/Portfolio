const filterButtons = document.querySelectorAll(".filter-btn");
const galeries = document.querySelectorAll(".galery");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Activate selected button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    galeries.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
