type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
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
  const divMain = document.querySelector('.blog-main');
  blogs.forEach((blog) => {
    const div = document.createElement('div');

    let title = document.createElement('h1');
    title.textContent = blog.title;
    div.appendChild(title);

    let date = document.createElement('p');
    date.textContent = blog.date;
    div.appendChild(date);

    let description = document.createElement('p');
    description.textContent = blog.description;
    div.appendChild(description);

    let img = document.createElement('img');
    img.src = blog.image;
    img.alt = blog.imageAlt;
    div.appendChild(img);

    let slug = document.createElement('a');
    slug.textContent = blog.slug;
    slug.href = blog.slug;
    div.appendChild(slug);

    divMain.appendChild(div);
  });
}

appendBlogs();
