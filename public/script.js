const apiUrl = 'http://localhost:5000/api';

async function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value;

    const response = await fetch(`${apiUrl}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    console.log(data);
}

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    console.log(data);
}

async function createPost() {
    const content = document.getElementById('post-content').value;

    const response = await fetch(`${apiUrl}/posts/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    });

    const data = await response.json();
    console.log(data);
}

async function loadPosts() {
    const response = await fetch(`${apiUrl}/posts`);
    const posts = await response.json();

    let postsHtml = '';
    posts.forEach(post => {
        postsHtml += `<div><p>${post.content}</p></div>`;
    });

    document.getElementById('posts').innerHTML = postsHtml;
}

loadPosts();
