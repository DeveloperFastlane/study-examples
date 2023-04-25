import Link from 'next/link';

export default function BlogSection() {
  // Sample blog data - replace this with your actual blog data or fetch from an API
  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Right Programming Language',
      excerpt: 'Discover the factors to consider when choosing a programming language for your next project or career move.',
      link: '/blog/how-to-choose-the-right-programming-language',
    },
    {
      id: 2,
      title: 'Top 5 Web Development Frameworks in 2022',
      excerpt: 'Explore the top web development frameworks that are shaping the industry and making developers\' lives easier.',
      link: '/blog/top-5-web-development-frameworks-in-2022',
    },
    {
      id: 3,
      title: 'The Importance of Networking for Developers',
      excerpt: 'Learn the benefits of networking and how it can help you advance your career and find new opportunities.',
      link: '/blog/the-importance-of-networking-for-developers',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div className="bg-white shadow-md rounded p-6" key={post.id}>
            <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link href={post.link} className="text-blue-500 mt-4 inline-block">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}