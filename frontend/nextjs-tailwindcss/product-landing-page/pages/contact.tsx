export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16 lg:py-24">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-10 text-center">문의하기</h1>
      <form className="w-full max-w-lg mx-auto">
        <div className="mb-6">
          <label className="block text-xl md:text-2xl lg:text-3xl font-semibold mb-2" htmlFor="name">
            이름
          </label>
          <input className="w-full px-4 py-2 text-md md:text-xl lg:text-2xl border rounded" type="text" id="name" />
        </div>
        <div className="mb-6">
          <label className="block text-xl md:text-2xl lg:text-3xl font-semibold mb-2" htmlFor="email">
            이메일
          </label>
          <input className="w-full px-4 py-2 text-md md:text-xl lg:text-2xl border rounded" type="email" id="email" />
        </div>
        <div className="mb-6">
          <label className="block text-xl md:text-2xl lg:text-3xl font-semibold mb-2" htmlFor="message">
            메시지
          </label>
          <textarea className="w-full px-4 py-2 text-md md:text-xl lg:text-2xl border rounded" id="message" rows={5} />
        </div>
        <button className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded" type="submit">문의하기</button>
      </form>
    </div>
  );
}
