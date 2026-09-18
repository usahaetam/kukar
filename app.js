document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("lessonCarousel");
  const car = bootstrap.Carousel.getOrCreateInstance(el, {
    interval: false,
    wrap: false,
    touch: true,
  });
  const links = [...document.querySelectorAll(".materi-link")],
    counter = document.getElementById("slideCounter"),
    bar = document.getElementById("progressBar"),
    side = document.getElementById("sidebar");
  function set(i) {
    links.forEach((x, j) => x.classList.toggle("active", i === j));
    counter.textContent = `Materi ${i + 1} dari 16`;
    bar.style.width = `${(i + 1) * 16}%`;
  }
  links.forEach(
    (x) =>
      (x.onclick = () => {
        let i = +x.dataset.slide;
        car.to(i);
        set(i);
        side.classList.remove("open");
      }),
  );
  el.addEventListener("slid.bs.carousel", (e) => set(e.to));
  document
    .getElementById("menuToggle")
    ?.addEventListener("click", () => side.classList.toggle("open"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") car.next();
    if (e.key === "ArrowLeft") car.prev();
  });
});
