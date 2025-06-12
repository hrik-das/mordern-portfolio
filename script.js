const project_containers = document.querySelectorAll(".project-video");

project_containers.forEach((container) => {
  const video = container.querySelector("video");
  const hover = container.querySelector(".hover");

  container.addEventListener("mouseover", function () {
    hover.classList.add("active");

    video.muted = true;
    video.play().catch((e) => console.warn("play() failed", e));
  });

  container.addEventListener("mouseout", function () {
    hover.classList.remove("active");
    video.pause();
  });
});