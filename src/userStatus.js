export function initUserStatus(containerSelector, websocketUrl) {
  const listContainer = document.querySelector(containerSelector);

  const socket = new WebSocket(websocketUrl);

  socket.onopen = () => {
    console.log('WebSocket подключен');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    renderUserList(data);
  };

  socket.onerror = (error) => {
    console.error('WebSocket ошибка', error);
  };

  socket.onclose = () => {
    console.log('WebSocket закрыт');
  };

  function renderUserList(users) {
    listContainer.innerHTML = '';

    users.forEach(user => {
      if (user.mode === 'room') {
        // Не отображать пользователей в режиме "комнат"
        return;
      }

      const userDiv = document.createElement('div');
      userDiv.className = 'listUser-li';

      const nameSpan = document.createElement('span');
      nameSpan.innerText = user.username;

      const btn = document.createElement('button');
      btn.innerText = user.status === 'online' ? 'Онлайн' : 'Оффлайн';

      // Установка цвета кнопки в зависимости от режима
      switch (user.mode) {
        case 'classic':
          btn.style.backgroundColor = '#45AEE'; // классический
          break;
        case 'batlClassik':
          btn.style.backgroundColor = '#4005A0'; // батл классик
          break;
        case 'batlSession':
          btn.style.backgroundColor = 'red'; // битва сессии
          break;
        default:
          // стандартный цвет, если не играет или режим не Recognized
          btn.style.backgroundColor = user.status === 'online' ? 'green' : 'gray';
      }

      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.borderRadius = '4px';
      btn.style.padding = '4px 8px';

      userDiv.appendChild(nameSpan);
      userDiv.appendChild(btn);

      listContainer.appendChild(userDiv);
    });
  }
}
