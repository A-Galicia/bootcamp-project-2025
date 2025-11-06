import connectDB from '@/database/db';
import blogSchema from '@/database/blogSchema';
import Blog from '@/database/blogSchema';
import style from '@/components/BlogPreview.module.css';
import Image from 'next/image';

type PageProps = { params: { slug: string } };

export default async function BlogPage({ params }: PageProps) {
  await connectDB();
  const slug = "blogs/" + await params.slug;
  const post = await Blog.findOne({ slug: slug }).orFail();

  if (!post) return <p>Nothing Here...</p>;

  return (
    <div className={style.div}>
      <h1>{post.title}</h1>
      <p>{new Date(post.date).toDateString()}</p>
      <hr className={style.hr} />
      <div>{post.content}</div>
      <br />
      <hr className={style.hr} />
      <div>Comments:</div>
      {!post.comments
        ? null
        : post.comments.map((comment) => {
            return (
              <p key={comment} className={style.comment}>
                {comment}
              </p>
            );
          })}
    </div>
  );
}
