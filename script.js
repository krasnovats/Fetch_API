      // Функция для получения пользователей
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.ir/users');
                if (!response.ok) {
                    throw new Error('Сеть не отвечает');
                }
                const users = await response.json();
                displayUsers(users);
            } catch (error) {
                console.error('Ошибка:', error);
                document.getElementById('id').innerText = 'Не удалось загрузить пользователей';
            }
        }

        // Функция для отображения пользователей в вёрстке
        function displayUsers(users) {
            const usersDiv = document.getElementById('users');
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user';
                userDiv.innerHTML = `
                    <h2>${user.username}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Телефон: ${user.phone}</p>
                    <p>Адрес: ${user.address.street}, ${user.address.city}</p>
                `;
                usersDiv.appendChild(userDiv);
            });
        }

        // Вызов функции для получения пользователей
        fetchUsers();
