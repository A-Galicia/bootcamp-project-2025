import styles from './page.module.css';
import blogs from '../blogData';
import BlogPreview from '@/components/BlogPreview';

export default function Blog() {
  return (
    <div>
      {blogs.map(
        (blog) => (
          <BlogPreview
          key={blog.title}
          title={blog.title}
          date={blog.date}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}
          slug={blog.slug}
          />
      ))}
    </div>
  );
}
