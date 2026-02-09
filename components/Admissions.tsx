'use client'

import { useState } from 'react'

const fees = {
  nursery: 500,
  primary: 800,
  jhs: 1000
}

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    program: '',
    studentId: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    reason: '',
    paymentMethod: '',
    mtnNumber: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    terms: false
  })

  const [paymentDetails, setPaymentDetails] = useState({
    showMtn: false,
    showCard: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Show/hide payment details
    if (name === 'paymentMethod') {
      setPaymentDetails({
        showMtn: value === 'mtn',
        showCard: value === 'card'
      })
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Form submitted! (This is a demo)')
    console.log('Form data:', formData)
  }

  const currentFee = fees[formData.program as keyof typeof fees] || 0
  const programDisplay = formData.program ? formData.program.charAt(0).toUpperCase() + formData.program.slice(1) : 'Select a program'

  return (
    <section id="admissions" className="py-16 md:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Online Admission Form</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Student Information */}
          <fieldset className="border border-gray-300 rounded-lg p-6">
            <legend className="text-lg font-bold text-blue-900 px-2">Student Information</legend>

            <div className="space-y-4">
              <div>
                <label htmlFor="studentName" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-semibold mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-semibold mb-2">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-semibold mb-2">
                  Program Level *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Program</option>
                  <option value="nursery">Nursery</option>
                  <option value="primary">Primary</option>
                  <option value="jhs">Junior High School</option>
                </select>
              </div>

              <div>
                <label htmlFor="studentId" className="block text-sm font-semibold mb-2">
                  Student ID (if applicable)
                </label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </fieldset>

          {/* Parent/Guardian Information */}
          <fieldset className="border border-gray-300 rounded-lg p-6">
            <legend className="text-lg font-bold text-blue-900 px-2">Parent/Guardian Information</legend>

            <div className="space-y-4">
              <div>
                <label htmlFor="parentName" className="block text-sm font-semibold mb-2">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold mb-2">
                  Residential Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
          </fieldset>

          {/* Academic Information */}
          <fieldset className="border border-gray-300 rounded-lg p-6">
            <legend className="text-lg font-bold text-blue-900 px-2">Academic Information</legend>

            <div className="space-y-4">
              <div>
                <label htmlFor="previousSchool" className="block text-sm font-semibold mb-2">
                  Previous School (if any)
                </label>
                <input
                  type="text"
                  id="previousSchool"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-semibold mb-2">
                  Reason for Application *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={3}
                  required
                  placeholder="Tell us why your child would be a great fit for our school..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
          </fieldset>

          {/* Fees Section */}
          <fieldset className="border border-gray-300 rounded-lg p-6">
            <legend className="text-lg font-bold text-blue-900 px-2">Admission Fee Payment</legend>

            <div className="mb-6 bg-blue-50 p-4 rounded-lg">
              <p className="mb-2">
                Selected Program: <span className="font-bold text-blue-900">{programDisplay}</span>
              </p>
              <p>
                Admission Fee: <span className="font-bold text-blue-900">GHS {currentFee.toFixed(2)}</span>
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="paymentMethod" className="block text-sm font-semibold mb-2">
                  Payment Method *
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Payment Method</option>
                  <option value="mtn">MTN Mobile Money</option>
                  <option value="vodafone">Vodafone Cash</option>
                  <option value="airtel">Airtel Money</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="card">Credit/Debit Card</option>
                </select>
              </div>

              {paymentDetails.showMtn && (
                <div>
                  <label htmlFor="mtnNumber" className="block text-sm font-semibold mb-2">
                    MTN Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mtnNumber"
                    name="mtnNumber"
                    value={formData.mtnNumber}
                    onChange={handleChange}
                    placeholder="024-xxx-xxxx"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              {paymentDetails.showCard && (
                <div>
                  <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-sm font-semibold mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-semibold mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-semibold mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        maxLength={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </fieldset>

          {/* Terms and Conditions */}
          <fieldset className="border border-gray-300 rounded-lg p-6">
            <legend className="text-lg font-bold text-blue-900 px-2">Agreement</legend>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the school&apos;s terms and conditions and confirm that all information provided is accurate.
              </label>
            </div>
          </fieldset>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Complete Admission & Process Payment
          </button>

          <p className="text-sm text-gray-600 text-center">* Required fields</p>
        </form>
      </div>
    </section>
  )
}
