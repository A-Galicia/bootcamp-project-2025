var blogs = [
    {
        title: 'Health',
        date: '10/9/2025',
        description: 'A blog about health',
        image: '../public/EGA.png',
        imageAlt: 'Eagle, Globe, and Anchor',
        slug: 'https://example.com/blogs/how-to-build-a-react-application-in-2024',
    },
    {
        title: 'Lifting',
        date: '11/9/2022',
        description: 'A blog about lifting',
        image: '../public/GitHub.png',
        imageAlt: 'GitHub logo',
        slug: 'https://example.com/blogs/how-to-build-a-react-application-in-2024',
    },
];
function appendBlogs() {
    var divMain = document.querySelector('.blog-main');
    blogs.forEach(function (blog) {
        var div = document.createElement('div');
        var title = document.createElement('h1');
        title.textContent = blog.title;
        div.appendChild(title);
        var date = document.createElement('p');
        date.textContent = blog.date;
        div.appendChild(date);
        var description = document.createElement('p');
        description.textContent = blog.description;
        div.appendChild(description);
        var img = document.createElement('img');
        img.src = blog.image;
        img.alt = blog.imageAlt;
        div.appendChild(img);
        var slug = document.createElement('a');
        slug.textContent = blog.slug;
        slug.href = blog.slug;
        div.appendChild(slug);
        divMain.appendChild(div);
    });
}
appendBlogs();
