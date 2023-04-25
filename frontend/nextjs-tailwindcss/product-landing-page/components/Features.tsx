function Features() {
  const featureItems = [
    { title: '고품질 재활용 소재', description: '재활용 가능한 원단과 뛰어난 내구성을 자랑합니다.' },
    { title: '다양한 디자인', description: '고급스러운 컬러와 패턴으로 다양한 스타일의 옷에 잘 어울립니다.' },
    { title: '넉넉한 수납 공간', description: '쇼핑, 피크닉, 운동, 여행 등 다양한 활동에 필요한 소지품을 손쉽게 담아줍니다.' },
    { title: '편리한 사용성', description: '어깨에 메기 좋은 길이의 스트랩으로 편안하게 착용할 수 있습니다.' },
  ];

  return (
    <section className="py-10 md:py-16 lg:py-24">
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold mb-10">주요 특징</h2>
      <div className="flex flex-wrap justify-center">
        {featureItems.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">{item.title}</h3>
            <p className="text-md md:text-xl lg:text-2xl">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
