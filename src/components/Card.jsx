export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: "https://www.gstatic.com/search-labs/db4f78ea-3bda-4c6b-971d-cfea7e9af409.png",
      title: "Viola the Bird",
      description:
        "Unleash your inner musician with Viola the Bird. This AI experiment by artist David Li lets anyone play a cello-inspired instrument – no musical skill needed.",
      link: "#",
    },
    {
      id: 2,
      image: "https://www.gstatic.com/search-labs/9bbb3ab7-1572-4999-8ea1-2ea42e9d42d8.png",
      title: "AI-Powered Creativity",
      description:
        "Explore how AI is transforming creative expression through innovative digital tools and experiments.",
      link: "#",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "The Future of AI Experiments",
      description:
        "Discover groundbreaking AI experiments that are shaping the future of technology and design.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-light mb-8 text-center">Latest Experiments</h2>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{blog.description}</p>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <a href={blog.link} className="text-blue-500 font-medium hover:underline">Learn More</a>
                <button className="px-3 py-1 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg text-sm">
                  Feedback
                </button>
                <button className="px-3 py-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">
                  Play
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
