import BlogCard from "../components/BlogCard";
import { Blog1, Blog2, Blog3 } from "../assets/images";

function Blog() {

  const blogs = [
    {
      image: Blog1,
      category: "Learning Tips",
      title: "How to Stay Motivated While Learning Online",
      date: "May 10, 2024",
      readTime: "5 min read",
    },

    {
      image: Blog2,
      category: "Career Growth",
      title: "Top Skills to Learn in 2024 and Beyond",
      date: "May 8, 2024",
      readTime: "6 min read",
    },

    {
      image: Blog3,
      category: "Study Guide",
      title: "Effective Study Habits for Better Results",
      date: "May 5, 2024",
      readTime: "4 min read",
    },
  ];

  return (
    <section id="blog" className="bg-white scroll-mt-28">

      <div className="max-container padding-x py-12 sm:py-16 lg:py-20">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="font-roboto text-3xl font-bold text-primary sm:text-4xl">
            Latest Learning Insights
          </h2>

          <p className="mt-2 text-xs text-body sm:text-sm">
            Tips, guides, and trends to help you grow.
          </p>

        </div>

        {/* Blog Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog) => (
            <BlogCard
              key={blog.title}
              image={blog.image}
              category={blog.category}
              title={blog.title}
              date={blog.date}
              readTime={blog.readTime}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Blog;