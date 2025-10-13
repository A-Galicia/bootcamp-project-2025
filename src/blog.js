var blogs = [
    {
        title: 'Health',
        date: '10/9/2025',
        description: 'A blog about health',
        image: '../public/EGA.png',
        imageAlt: 'Eagle, Globe, and Anchor',
        slug: 'blogs/health.html',
    },
    {
        title: 'Lifting',
        date: '11/9/2022',
        description: 'A blog about lifting',
        image: '../public/OpenPowerlifting.png',
        imageAlt: 'Open Powerlifting logo',
        slug: 'blogs/lifting.html',
    },
];
function appendBlogs() {
    var divMain = document.querySelector('.blog-main');
    blogs.forEach(function (blog) {
        var div = document.createElement('div');
        div.className = 'blog-div about';
        var title = document.createElement('h1');
        title.textContent = blog.title;
        title.className = 'blog-title';
        div.appendChild(title);
        var img = document.createElement('img');
        img.src = blog.image;
        img.alt = blog.imageAlt;
        img.className = 'blog-img';
        div.appendChild(img);
        var description = document.createElement('p');
        description.className = 'blog-description';
        description.textContent = blog.date;
        var slug = document.createElement('a');
        slug.textContent = 'See it Here!';
        slug.href = blog.slug;
        description.appendChild(slug);
        var descriptionWriting = document.createElement('p');
        descriptionWriting.textContent = blog.description;
        description.appendChild(descriptionWriting);
        div.appendChild(description);
        if (divMain)
            divMain.appendChild(div);
        var hr = document.createElement('hr');
        hr.className = 'blog-breakline';
        //div.appendChild(hr);
    });
}
appendBlogs();
