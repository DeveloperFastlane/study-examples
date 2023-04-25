export default function TestimonialsSection() {
  // Sample testimonial data - replace this with your actual testimonials or fetch from an API
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Software Engineer',
      text: 'This platform helped me find the right resources and network with professionals, which boosted my career growth.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Web Developer',
      text: 'I learned about the latest web development frameworks and improved my skills, thanks to Developer Career Developments.',
    },
    {
      id: 3,
      name: 'Alice Brown',
      role: 'Data Scientist',
      text: 'The career advice and resources I found on this platform were invaluable in helping me advance in my data science career.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div className="bg-white shadow-md rounded p-6" key={testimonial.id}>
            <p className="italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
            <h3 className="font-semibold text-xl mb-1">{testimonial.name}</h3>
            <p>{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}