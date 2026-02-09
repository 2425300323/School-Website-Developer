export default function Programs() {
  const programs = [
    {
      icon: '👶',
      title: 'Nursery',
      description: 'Early childhood education focusing on foundational skills and social development',
      age: 'Ages 3-5'
    },
    {
      icon: '📚',
      title: 'Primary',
      description: 'Comprehensive primary education with emphasis on academics and character development',
      age: 'Ages 6-11'
    },
    {
      icon: '🎓',
      title: 'Junior High School',
      description: 'Advanced curriculum preparing students for secondary education and beyond',
      age: 'Ages 12-14'
    }
  ]

  return (
    <section id="programs" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Admission Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <p className="text-sm font-semibold text-blue-600">{program.age}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
