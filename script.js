const welcome = document.querySelector("#welcome");
const loading = document.querySelector("#loading");
const result = document.querySelector("#result");
const nextButton = document.querySelector("#next");
const againButton = document.querySelector("#again");

const readCount = (key) => Number(localStorage.getItem(key) || 0);
const writeCount = (key, value) => localStorage.setItem(key, String(value));

writeCount("demoVisits", readCount("demoVisits") + 1);

function show(section) {
  [welcome, loading, result].forEach((el) => el.classList.add("hidden"));
  section.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  writeCount("demoNextClicks", readCount("demoNextClicks") + 1);
  show(loading);
  window.setTimeout(() => {
    document.querySelector("#visitCount").textContent = readCount("demoVisits");
    document.querySelector("#nextCount").textContent = readCount("demoNextClicks");
    show(result);
  }, 1300);
});

againButton.addEventListener("click", () => show(welcome));
