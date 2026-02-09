export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Excellence</h2>
        <p className="text-xl md:text-2xl font-semibold mb-2 text-blue-100">RIGHTEOUSNESS AND TRUTH</p>
        <p className="text-lg md:text-xl mb-8 text-blue-50">Nurturing Young Minds, Shaping the Future Star</p>
        <a
          href="#admissions"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  )
}
