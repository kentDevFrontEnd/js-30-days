let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log(panel);
    let activePanel = document.querySelector(".active");

    if (activePanel) {
      activePanel.classList.remove("active");
    }
    panel.classList.add("active");
  });
});
