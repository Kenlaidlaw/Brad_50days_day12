// collect toggle for targetting
const toggles = document.querySelectorAll(".faq-toggle");
// loop through toggles
toggles.forEach((toggle) => {
  // add an event listener to recognize click for drop down
  toggle.addEventListener("click", () => {
    // actions the drop down by adding or taking away the class of active on the parent.
    toggle.parentNode.classList.toggle("active");
  });
});
