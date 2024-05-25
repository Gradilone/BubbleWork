document.addEventListener('DOMContentLoaded', function() {
    const postButton = document.querySelector('.btn-submity');

    const heartEmptySrc = "/Img/hearth_empty.png"; // Caminho do ícone de coração vazio
    const heartFilledSrc = '/Img/hearth.png'; // Caminho do ícone de coração cheio
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        const likeIcon = button.querySelector('.like-icon');
        
        button.addEventListener('click', function() {
            if (likeIcon.src.includes('hearth_empty.png')) {
                likeIcon.src = heartFilledSrc; // Troca para ícone de coração cheio
            } else {
                likeIcon.src = heartEmptySrc; // Troca para ícone de coração vazio
            }
        });
    });

     // Função para alternar a visibilidade da seção de comentários
     const comentButtons = document.querySelectorAll('.coment-btn');
     comentButtons.forEach(button => {
         button.addEventListener('click', function() {
             const post = button.closest('.new-post');
             const commentsSection = post.querySelector('.comments-section');
             commentsSection.classList.toggle('hidden');
         });
     });

    const publishButton = document.querySelector('.publish-btn');
    const commentInput = document.querySelector('.comment-input');
    const commentsSection = document.querySelector('.comments-section');

    publishButton.addEventListener('click', function() {
        const commentText = commentInput.value.trim();

        if (commentText) {
            const newComment = document.createElement('div');
            newComment.classList.add('comment');

            newComment.innerHTML = `
                <div class="comment-profile-container">
                    <img src="/Img/image 30.png" alt="Foto de Perfil" class="comment-profile-img">
                    <div class="comment-user-details">
                        <p class="comment-username">Você</p>
                        <p class="comment-user-area">Designer</p>
                        <p class="comment-user-at">@voce.silva</p>
                    </div>
                </div>
                <p class="comment-text">${commentText}</p>
            `;

            commentsSection.insertBefore(newComment, document.querySelector('.new-comment'));
            commentInput.value = ''; // Limpa o campo de texto após adicionar o comentário
        }
    });

    function createNewPost(title, body) {
        // Verifica se o elemento pai existe
        const postCreationSection = document.querySelector('.post-area');
        if (!postCreationSection) {
            console.error('Elemento pai não encontrado.');
            return;
        }
    
        // Cria uma nova estrutura de postagem
        const newPost = document.createElement('div');
        newPost.classList.add('new-post');
    
        newPost.innerHTML = `
            <div class="post-header-view">
                <img src="/Img/Vector.png" class="home-type" alt="Imagem 1" class="top-left-image">
                <img src="Img/🦆 icon _setting 4_.png" class="icon" alt="Imagem 2" class="top-right-image">
            </div>
    
            <div class="profile-container">
                <img src="/Img/image 30.png" alt="Foto de Perfil" class="profile-img">
                <div class="user-details">
                    <p class="username">Você</p>
                    <p class="user-area">Designer</p>
                    <p class="user-at">@voce.silva</p>
                </div>
            </div>
    
            <div class="post-content">
                <h2>${title}</h2>
                <hr>
                <p>${body}</p>
            </div>
    
            <div class="post-footer-view">
                <button class="icon-btn like-btn">
                    <img src="/Img/hearth_empty.png" alt="Like" class="icon like-icon">
                </button>
                <button class="icon-btn coment-btn">
                    <img src="/Img/🦆 icon _messages 2_.png" alt="Coment" class="icon coment-icon">
                </button>
                <button class="icon-btn send-btn">
                    <img src="/Img/🦆 icon _send 2_.png" alt="Send" class="icon send-icon">
                </button>
            </div>
    
            <div class="comments-section hidden">
                <div class="new-comment">
                    <input type="text" class="comment-input" placeholder="Comente algo">
                    <button class="publish-btn">Publicar</button>
                </div>
            </div>
        `;
    
        // Adiciona a nova postagem logo abaixo do campo de criação de postagem
        postCreationSection.parentNode.insertBefore(newPost, postCreationSection.nextSibling);
    }
    // Evento de clique no botão "Publicar"
    const btnPost = document.querySelector('.btn-submity');
    btnPost.addEventListener('click', function() {
        const title = document.querySelector('.title-area').value.trim();
        const body = document.querySelector('.write-area').value.trim();

        if (title && body) {
            createNewPost(title, body);
            // Limpa os campos de entrada após a publicação
            document.querySelector('.title-area').value = '';
            document.querySelector('.write-area').value = '';
        }
    });
});