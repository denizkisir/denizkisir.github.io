(() => {
  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");
  const trigger = document.querySelector(".trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });

  trigger.addEventListener("click", function () {
    const area = document.querySelector(".wrapper");
    cbox.checked = false;
    area.classList.remove("blurry");
  });
})();
