'use client'

import { useState } from 'react'

export default function Contact() {
  const [quickForm, setQuickForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setQuickForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Message sent! (This is a demo)')
    console.log('Quick form data:', quickForm)
    setQuickForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Address</h3>
              <p className="text-gray-700">
                P.O. Box 502<br />
                Mamprobi, Accra<br />
                Ghana - West Africa<br /><br />
                Located at: Korle Gonno<br />
                Close to Dr. F. N. Nanka Bruce (JHS)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Phone Numbers</h3>
              <p className="text-gray-700">
                <a href="tel:030-266-9452" className="hover:text-blue-600 transition">030-266-9452</a><br />
                <a href="tel:024-479-1664" className="hover:text-blue-600 transition">024-479-1664</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Email</h3>
              <p className="text-gray-700">
                <a href="mailto:NanaYawNkrumahJnr@yahoo.com" className="hover:text-blue-600 transition">
                  NanaYawNkrumahJnr@yahoo.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-blue-900">Quick Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={quickForm.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={quickForm.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={quickForm.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
