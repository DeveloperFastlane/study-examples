import React from 'react';
import { FiInfo } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl lg:px-6 xl:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <FiInfo size={300} className="text-green-500" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              친환경 에코백은 어떤 회사인가요?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-4">
              친환경 에코백은 2010년부터 지속가능한 환경을 위한 제품을 만들어왔습니다. 저희가 만드는 에코백은 일회용품 대신 재사용이 가능한 제품으로, 환경 보호에 이바지할 뿐만 아니라 각종 행사 및 기업, 단체의 프로모션용으로 사용되기도 합니다.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-4">
              우리 회사는 제품 생산부터 판매까지 모두 직접 수행하는 제조업체입니다. 이를 통해 고품질의 제품을 합리적인 가격으로 제공할 수 있으며, 맞춤형 제작도 가능합니다.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-4">
              친환경 에코백은 지속가능한 미래를 위해 노력하고 있습니다. 저희 제품은 환경을 보호하고 지속가능한 소비 문화를 이끌어 내는 데 기여할 것입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
