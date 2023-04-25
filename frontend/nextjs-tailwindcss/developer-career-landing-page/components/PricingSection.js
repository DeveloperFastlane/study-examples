export default function PricingSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plan 1 */}
        <div className="bg-white shadow-md rounded p-6 text-center">
          <h3 className="font-semibold text-xl mb-2">Basic</h3>
          <p className="text-4xl font-bold mb-6">$0</p>
          <ul className="mb-6">
            <li>Access to Blog</li>
            <li>Public Chat</li>
            <li>Some Resources</li>
          </ul>
          <button className="bg-blue-500 text-white font-semibold px-8 py-3 rounded">Get Started</button>
        </div>
        {/* Plan 2 */}
        <div className="bg-white shadow-md rounded p-6 text-center">
          <h3 className="font-semibold text-xl mb-2">Pro</h3>
          <p className="text-4xl font-bold mb-6">$49</p>
          <ul className="mb-6">
            <li>All Basic Features</li>
            <li>Access to Premium Resources</li>
            <li>Private Chat</li>
            <li>Personalized Career Guidance</li>
          </ul>
          <button className="bg-blue-500 text-white font-semibold px-8 py-3 rounded">Get Started</button>
        </div>
        {/* Plan 3 */}
        <div className="bg-white shadow-md rounded p-6 text-center">
          <h3 className="font-semibold text-xl mb-2">Enterprise</h3>
          <p className="text-4xl font-bold mb-6">Custom</p>
          <ul className="mb-6">
            <li>All Pro Features</li>
            <li>Team Access</li>
            <li>Dedicated Support</li>
            <li>Custom Integrations</li>
          </ul>
          <button className="bg-blue-500 text-white font-semibold px-8 py-3 rounded">Contact Us</button>
        </div>
      </div>
    </div>
  );
}