import Button from "./Button";

function BlogCard({
  image,
  category,
  title,
  date,
  readTime,
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-md">

      {/* Image */}
      <div className="h-[180px] w-full overflow-hidden sm:h-[190px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">

        {/* Category */}
        <Button
          variant="outline"
          size="sm"
          radius="full"
          className="h-[24px] px-3 py-0 text-[9px] font-medium"
        >
          {category}
        </Button>

        {/* Title */}
        <h3 className="mt-3 font-roboto text-base font-bold leading-5 text-primary sm:text-lg sm:leading-6">
          {title}
        </h3>

        {/* Date + Read Time */}
        <div className="mt-4 flex items-center gap-2 text-[10px] text-body sm:text-xs">
          <span>{date}</span>

          <span className="h-1 w-1 rounded-full bg-gray-400" />

          <span>{readTime}</span>
        </div>

      </div>
    </section>
  );
}

export default BlogCard;