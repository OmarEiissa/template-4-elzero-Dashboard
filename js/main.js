document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const targetScroll = 170;

  const filesStatsElement = document.querySelector(".files-stats");
  const filesContentElement = document.querySelector(".files-content");

  if (scrollPosition > targetScroll) {
    filesStatsElement.classList.add("scroll");
    filesContentElement.classList.add("scroll");
  } else {
    filesStatsElement.classList.remove("scroll");
    filesContentElement.classList.remove("scroll");
  }
});

document.querySelectorAll("a[href='#']").forEach((e) => {
  e.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
