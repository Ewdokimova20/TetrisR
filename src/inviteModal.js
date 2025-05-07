// inviteModal.js

export function setupInviteModal() {
  const modal = document.getElementById("inviteModal");
  const modeButtons = document.querySelectorAll("#modeButtons button");
  const sendInviteBtn = document.getElementById("sendInviteBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const statusText = document.getElementById("statusText");

  let selectedMode = null;
  let currentTargetUser = null;

  // Обработчик открытия модалки при клике на пользователя
  document.querySelector(".listUser").addEventListener("click", (e) => {
    const userDiv = e.target.closest(".listUser-li");
    if (!userDiv) return;

    const username = userDiv.querySelector("span").innerText;
    const btnText = e.target.innerText;

    if (btnText.toLowerCase().includes("офлайн")) {
      alert(
        "Этот пользователь в оффлайне или в режиме комнаты и не может быть приглашен."
      );
      return;
    }

    currentTargetUser = username;
    selectedMode = null;

    document.getElementById(
      "modalTitle"
    ).innerText = `Пригласить ${username} в игру`;
    statusText.innerText = "";
    modeButtons.forEach((b) => (b.style.backgroundColor = ""));

    modal.style.display = "flex";
  });

  // Выбор режима
  modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modeButtons.forEach((b) => (b.style.backgroundColor = ""));
      btn.style.backgroundColor = "#ddd";
      selectedMode = btn.dataset.mode;
    });
  });

  // Отправка приглашения
  document.getElementById("sendInviteBtn").addEventListener("click", () => {
    if (!currentTargetUser || !selectedMode) {
      alert("Выберите режим и пользователя");
      return;
    }

    // Тут вставьте вашу логику отправки (например, WebSocket)
    console.log("Приглашение:", currentTargetUser, selectedMode);
    statusText.innerText = `Приглашение отправлено ${currentTargetUser} в режиме "${selectedMode}"`;
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  });

  // Отмена
  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
