export default function NewsletterSection() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg md:text-xl mb-8">Subscribe to our newsletter to receive the latest news and updates.</p>
        <form>
          <input
            className="w-full md:w-1/2 px-4 py-2 rounded-l"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-blue-500 text-white font-semibold px-8 py-2 rounded-r">Subscribe</button>
        </form>
      </div>
    </div>
  );
}