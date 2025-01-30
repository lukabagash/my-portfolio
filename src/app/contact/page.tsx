// app/contact/page.tsx

'use client' // if you're handling client-side form submission or JS-based solutions

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (client-side or to an API route)
    console.log(formData)
    alert('Form submitted!')
  }

  return (
    <div className="mt-8 max-w-xl">
      <h2 className="text-3xl md:text-5xl font-bold text-glow">Contact Me</h2>
      <p className="mt-2 mb-6">
        Whether you have a question or just want to say hi, my inbox is always
        open!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="w-full px-3 py-2 rounded-lg text-black"
            placeholder="Your name..."
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            className="w-full px-3 py-2 rounded-lg text-black"
            placeholder="Your email..."
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full h-32 px-3 py-2 rounded-lg text-black"
            placeholder="Say hello..."
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold"
        >
          Send
        </button>
      </form>
    </div>
  )
}
