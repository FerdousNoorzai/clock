const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");

// check if the mode is already set to "Dark Mode" in localStorage
if (localStorage.getItem("mode") === "Dark Mode") {
  // add "dark" class to body and set modeSwitch text to "Light Mode"
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;

  // Rotate the clock hands to the appropriate degree based on the current time
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();