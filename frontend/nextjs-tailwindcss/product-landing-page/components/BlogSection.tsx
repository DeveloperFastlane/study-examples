function BlogSection() {
  const blogPosts = [
    { title: '에코백 사용의 장점', url: '#' },
    { title: '친환경 에코백 소재 이야기', url: '#' },
    { title: '에코백의 다양한 활용 방법', url: '#' },
    { title: '환경을 위한 지속 가능한 소비', url: '#' },
  ];

  return (
    <section className="py-10 md:py-16 lg:py-24">
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold mb-10">블로그</h2>
      <div className="flex flex-wrap justify-center">
        {blogPosts.map((post, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <a className="text-xl md:text-2xl lg:text-3xl font-semibold hover:text-green-500" href={post.url}>
              {post.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
