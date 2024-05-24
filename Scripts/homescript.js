document.addEventListener('DOMContentLoaded', function() {
    const postButton = document.querySelector('.btn-submity');

    postButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        const title = document.querySelector('.title-area').value;
        const description = document.querySelector('.write-area').value;

        createNewPost(title, description);
    });

    function createNewPost(title, description) {
        const newPostContainer = document.createElement('div');
        newPostContainer.classList.add('new-post');

        const postHeaderView = document.createElement('div');
        postHeaderView.classList.add('post-header-view');

        const homeTypeImg = document.createElement('img');
        homeTypeImg.src = '/Img/Vector.png';
        homeTypeImg.classList.add('home-type');
        homeTypeImg.alt = 'Imagem 1';

        const iconImg = document.createElement('img');
        iconImg.src = '/Img/🦆 icon _setting 4_.png';
        iconImg.classList.add('icon');
        iconImg.alt = 'Imagem 2';

        postHeaderView.appendChild(homeTypeImg);
        postHeaderView.appendChild(iconImg);

        const profileContainer = document.createElement('div');
        profileContainer.classList.add('profile-container');

        const profileImg = document.createElement('img');
        profileImg.src = '/Img/image 30.png';
        profileImg.alt = 'Foto de Perfil';
        profileImg.classList.add('profile-img');

        const userDetails = document.createElement('div');
        userDetails.classList.add('user-details');

        const username = document.createElement('p');
        username.classList.add('username');
        username.textContent = 'Lucas Garcia';

        const userArea = document.createElement('p');
        userArea.classList.add('user-area');
        userArea.textContent = 'Design gráfico';

        const userAt = document.createElement('p');
        userAt.classList.add('user-at');
        userAt.textContent = '@luligarcia';

        userDetails.appendChild(username);
        userDetails.appendChild(userArea);
        userDetails.appendChild(userAt);

        profileContainer.appendChild(profileImg);
        profileContainer.appendChild(userDetails);

        const postContent = document.createElement('div');
        postContent.classList.add('post-content');

        const postTitle = document.createElement('h2');
        postTitle.textContent = title;

        const hr = document.createElement('hr');

        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = description;

        postContent.appendChild(postTitle);
        postContent.appendChild(hr);
        postContent.appendChild(descriptionParagraph);

        const postFooterView = document.createElement('div');
        postFooterView.classList.add('post-footer-view');

        const heartIcon = document.createElement('img');
        heartIcon.src = '/Img/🦆 icon _heart_.png';
        heartIcon.alt = 'Imagem 2';
        heartIcon.classList.add('icon', 'like');

        const messagesIcon = document.createElement('img');
        messagesIcon.src = '/Img/🦆 icon _messages 2_.png';
        messagesIcon.alt = 'Imagem 3';
        messagesIcon.classList.add('icon', 'coment');

        const sendIcon = document.createElement('img');
        sendIcon.src = '/Img/🦆 icon _send 2_.png';
        sendIcon.alt = 'Imagem 4';
        sendIcon.classList.add('icon', 'send');

        postFooterView.appendChild(heartIcon);
        postFooterView.appendChild(messagesIcon);
        postFooterView.appendChild(sendIcon);

        newPostContainer.appendChild(postHeaderView);
        newPostContainer.appendChild(profileContainer);
        newPostContainer.appendChild(postContent);
        newPostContainer.appendChild(postFooterView);

        const postArea = document.querySelector('.post-area');
        postArea.insertAdjacentElement('afterend', newPostContainer);
    }
});