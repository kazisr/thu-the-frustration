import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const router = useRouter();

  const handleClick = () => {
    localStorage.setItem("selectedBlog", JSON.stringify(blog));
    router.push(`/blog-details/?id=${blog.id}`);
  };

  const { title, paragraph, person, tags, publishDate } = blog;
  return (
    <>
      <div onClick={handleClick}
        className="h-full cursor-pointer wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <div
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image
            fill
            className="object-cover w-full h-full"
            src={person?.image} alt="image" />
        </div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <div
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </div>
          </h3>
          <p className="mb-6 border-b truncate border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  To {person?.name}
                </h4>
                <p className="text-xs text-body-color">{person?.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
