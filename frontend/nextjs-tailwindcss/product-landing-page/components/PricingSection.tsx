function PricingSection() {
  const pricingItems = [
    { title: '소형 에코백', price: '15,000원' },
    { title: '중형 에코백', price: '20,000원' },
    { title: '대형 에코백', price: '25,000원' },
  ];

  return (
    <section className="py-10 md:py-16 lg:py-24">
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold mb-10">가격</h2>
      <div className="flex flex-wrap justify-center">
        {pricingItems.map((item, index) => (
          <div key={index} className="w-full md:w-1/3 px-4 mb-8">
            <div className="border border-gray-200 rounded p-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-md md:text-xl lg:text-2xl mb-6">{item.price}</p>
              <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded">구매하기</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
