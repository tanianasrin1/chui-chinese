import React from "react";
import BlogCard from "./BlogCard";
import Category from "./Category";

const BlogEvent = () => {
  // const [recentSearch, setRecentSearch] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchData = async (search) => {
  //   setLoading(true);
  //   const response = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?search=${search}`);
  //   const jsonData = await response.json();

  //   setRecentSearch(jsonData);
  //   setLoading(false);
  // };

  // useEffect(() => {

  //     fetchData("");

  // }, []);
  return (
    <div className=" bg-[url('/images/aboutBanner.png')] bg-scroll bg-cover bg-center  ">
      <div className="min-h-[72vh]   ">
        <div className="container-sk py-8 md:py-14">
          <p className="lg:text-[32px] md:text-3xl text-2xl font-semibold text-secondary ">
            Explore Our
          </p>
          <p className="lg:text-[72px]  lg:leading-[82px] w-full md:text-6xl text-5xl text-black font-medium mt-2">
            Blog & Events
          </p>
          <div className="flex lg:flex-row flex-col gap-4">
            <div className="lg:w-8/12 w-full">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-5">
                {/* {loading ? (
                  <p>Loading</p>
                ) : (
                  recentSearch?.data?.map((item, index) => (
                    <>
                      <BlogCard key={index} item={item} />
                    </>
                  ))
                )} */}
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
              </div>
            </div>
            <div className="lg:w-4/12 w-full lg:mt-10 mt-5">
              {/* <Category recentBlog={recentBlog} fetchData={fetchData} /> */}

              <Category/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEvent;
