export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">About Our School</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Our Vision</h3>
            <p className="text-gray-700">Nurturing young minds, shaping the future star</p>
          </div>

          {/* Mission Card */}
          <div className="bg-green-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Our Mission</h3>
            <p className="text-gray-700">To provide a supportive and inclusive learning environment that fosters academic excellence, creativity, and social growth, empowering students to become confident, curious, and compassionate individuals.</p>
          </div>

          {/* Location Card */}
          <div className="bg-amber-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Location</h3>
            <p className="text-gray-700">
              Korle Gonno<br />
              Close to Dr. F. N. Nanka Bruce (JHS)<br />
              Accra, Ghana - West Africa
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
