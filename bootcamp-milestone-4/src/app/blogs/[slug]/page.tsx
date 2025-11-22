import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';
import style from '@/components/BlogPreview.module.css';
import Comment from '@/components/Comment';

type Props = {
  params: { slug: string };
};

export default async function BlogPage({params: { slug }}: Props) {
  await connectDB();

  // DB slug format is blogs/slug-value
  const fullSlug = 'blogs/' + slug;

  let post: Blog = {} as Blog;
  try {
    post = await Blog.findOne({ slug: fullSlug }).orFail();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
      return <p>Nothing Here...</p>;
    } else {
      console.error('An unknown error occurred:', err);
    }
  }

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
        : post.comments.map((comment, index) => {
            return (
              <Comment
                key={index}
                username={comment.username}
                date={comment.date}
                content={comment.comment}
              />
            );
          })}
    </div>
  );
}
