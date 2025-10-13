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
    image: '/public/Corpman.jpeg',
    imageAlt: 'Eagle, Globe, and Anchor',
    slug: 'blogs/health.html',
  },
  {
    title: 'Lifting',
    date: '11/9/2022',
    description: 'A blog about lifting',
    image: '/public/OpenPowerlifting.png',
    imageAlt: 'Open Powerlifting logo',
    slug: 'blogs/lifting.html',
  },
];

function appendBlogs() {
  // get div by class name
  const divMain = document.querySelector('.blog-main');

  blogs.forEach((blog) => {
    const div = document.createElement('div');
    div.className = 'blog-div about';

    const title = document.createElement('h1');
    title.textContent = blog.title;
    title.className = 'blog-title';
    div.appendChild(title);

    const img = document.createElement('img');
    img.src = blog.image;
    img.alt = blog.imageAlt;
    img.className = 'blog-img';
    div.appendChild(img);

    // Append anchor to and description to description paragraph,
    // which has the date
    const description = document.createElement('p');
    description.className = 'blog-description';
    description.textContent = blog.date;
    const slug = document.createElement('a');
    slug.textContent = 'See it Here!';
    slug.href = blog.slug;
    description.appendChild(slug);
    const descriptionWriting = document.createElement('p');
    descriptionWriting.textContent = blog.description;
    description.appendChild(descriptionWriting);

    // Append to main div, which exists
    // if statement to get rid of warning
    div.appendChild(description);
    if (divMain) divMain.appendChild(div);
  });
}

appendBlogs();
