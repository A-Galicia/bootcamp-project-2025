import connectDB from '@/database/db';
import blogSchema from '@/database/blogSchema';
import Blog from '@/database/blogSchema';
import style from '@/components/BlogPreview.module.css';

//type PageProps = { params: { slug: string } };

type IParams = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: IParams) {
  await connectDB();
  const { slug } = await params;

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
        : post.comments.map((comment: string) => {
            return (
              <p key={comment} className={style.comment}>
                {comment}
              </p>
            );
          })}
    </div>
  );
}
