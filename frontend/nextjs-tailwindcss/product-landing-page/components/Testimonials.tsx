import React from 'react';

interface Testimonial {
  name: string;
  jobTitle: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: '김철수',
    jobTitle: 'CEO, ABC Company',
    quote: '친환경 에코백은 환경보호에 이바지하는 제품이며, 우리 회사에서도 프로모션용으로 사용하고 있습니다. 고품질의 제품과 탁월한 서비스를 제공해주셔서 감사합니다.',
  },
  {
    name: '이영희',
    jobTitle: '마케팅 담당자, XYZ Corporation',
    quote: '친환경 에코백의 제품은 매우 만족스럽습니다. 맞춤형 제작을 해주셔서 우리 기업의 브랜딩에 큰 도움이 되었습니다. 향후에도 계속해서 사용하려고 합니다.',
  },
  {
    name: '박민수',
    jobTitle: '운영진, 123 Association',
    quote: '우리 단체에서는 친환경 에코백을 주문하여 이벤트에서 나눠드리고 있습니다. 참가자들의 반응이 매우 좋았고, 일회용품 대신 환경보호를 위한 제품을 사용하는 것이 좋은 느낌을 주었습니다.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl lg:px-6 xl:max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">고객 평가</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg font-medium mb-4">{testimonial.quote}</p>
              <p className="text-base font-medium">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.jobTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
