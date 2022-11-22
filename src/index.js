const markRead = document.querySelector("#mark-read");

markRead.onclick = function () {
  const notificationNumber = document.querySelector("p");
  const markRed1 = document.getElementById("mark1");
  const markRed2 = document.getElementById("mark2");
  const markRed3 = document.getElementById("mark3");
  const notif1 = document.getElementById("notif1");
  const notif2 = document.getElementById("notif2");
  const notif3 = document.getElementById("notif3");

  notificationNumber.textContent = `0`;
  markRed1.textContent = ``;
  markRed2.textContent = ``;
  markRed3.textContent = ``;
  notif1.style.backgroundColor = "hsl(0, 0%, 100%)";
  notif2.style.backgroundColor = "hsl(0, 0%, 100%)";
  notif3.style.backgroundColor = "hsl(0, 0%, 100%)";
};
