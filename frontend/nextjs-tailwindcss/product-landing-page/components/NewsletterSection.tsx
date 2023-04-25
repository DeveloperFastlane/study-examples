function NewsletterSection() {
  return (
    <section className="bg-gray-200 text-center py-10 md:py-16 lg:py-24">
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold">뉴스레터 구독</h2>
      <form className="mt-4">
        <input
          className="px-4 py-2 rounded-l-lg text-md md:text-xl lg:text-2xl"
          type="email"
          placeholder="이메일 주소 입력"
        />
        <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-r-lg">
          구독하기
        </button>
      </form>
    </section>
  );
}

export default NewsletterSection;
