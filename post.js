function allpost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
    
}
allpost();
function displayPost(posts) {
    const postSection = document.getElementById('post-section');
    for (const post of posts) {
    
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h1> ${post.title} </h1>
        <p>${post.body} </p>
        `;
        postSection.appendChild(div);
        
    }
}