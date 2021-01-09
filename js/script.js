const inputElement = document.getElementsByName('login')[0];
const displayInfo = document.getElementById('infos');

function performAction(){
    const url = `https://api.github.com/users/${inputElement.value}`
    fetch(url)
        .then(data => data.json())
        .then(user => {
            // Creating and Organizing Infos
            const imgElement = document.createElement('img');
            imgElement.src = user.avatar_url;
            imgElement.style.width = '150px';
            imgElement.style.height = '150px';
            const nameElement = document.createElement('div');
            nameElement.textContent = user.name;
            nameElement.style.fontSize = '18px';
            const blog_urlElement = document.createElement('a');
            if(!user.blog.startsWith('http')){
                blog_urlElement.href = `https://${user.blog}`;
            }
            else {
                blog_urlElement.href = user.blog;
            }
            blog_urlElement.target = '_blank';
            blog_urlElement.textContent = user.blog;
            // Displaying Infos
            displayInfo.innerHTML = '';
            displayInfo.appendChild(imgElement);
            displayInfo.appendChild(nameElement);
            displayInfo.appendChild(blog_urlElement);
        })
        .catch(error => console.error(error.message));
}

inputElement.addEventListener('keyup', () => {
    performAction();
});