const markRead = document.querySelector("#mark-read");

markRead.onclick = function () {
  const notificationNumber = document.querySelector("p");
  notificationNumber.textContent = `0`;
};
