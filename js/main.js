document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("html").classList.add("is-loaded");

  clickCounter();
});

function clickCounter() {
  const clickButton1 = document.querySelector("[data-case-1]");
  const clickCountElement1 = clickButton1.querySelector(".case__counter");

  const clickButton2 = document.querySelector("[data-case-2]");
  const clickCountElement2 = clickButton2.querySelector(".case__counter");

  const sendClick = async (url, countElement) => {
    try {
      const response = await fetch(url, {
        method: "POST",
      });

      const data = await response.json();
      countElement.textContent = data.clickCount;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getClickCount = async (url, countElement) => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });

      const data = await response.json();
      countElement.textContent = data.clickCount;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getClickCount("counter.php?button=1", clickCountElement1);
  getClickCount("counter.php?button=2", clickCountElement2);

  clickButton1.addEventListener("click", () =>
    sendClick("counter.php?button=1", clickCountElement1)
  );
  clickButton2.addEventListener("click", () =>
    sendClick("counter.php?button=2", clickCountElement2)
  );
}
