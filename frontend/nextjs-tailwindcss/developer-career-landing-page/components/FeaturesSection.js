export default function FeaturesSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="font-semibold text-xl mb-2">Career Growth</h3>
          <p>Discover the best career paths and resources to help you excel in your developer career.</p>
        </div>
        {/* Feature 2 */}
        <div className="text-center">
          <div className="text-6xl mb-4">🔧</div>
          <h3 className="font-semibold text-xl mb-2">Skill Development</h3>
          <p>Learn the latest technologies and programming languages to stay ahead in the industry.</p>
        </div>
        {/* Feature 3 */}
        <div className="text-center">
          <div className="text-6xl mb-4">🤝</div>
          <h3 className="font-semibold text-xl mb-2">Networking</h3>
          <p>Connect with professionals, mentors, and peers to expand your network and opportunities.</p>
        </div>
      </div>
    </div>
  );
}