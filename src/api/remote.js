const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts/';

function fetchUsers() {
  return fetch(usersUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.json();
    });
}

function fetchPosts(userId) {
  return fetch(postsUrl + userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.json();
    });
}

const getRandomId = () => Math.floor(Math.random() * 5) + 1;

export {
  fetchUsers,
  fetchPosts,
  getRandomId
};