import React, { useState, FormEvent } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
      hasErrors = true;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      hasErrors = true;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    
    setErrors({ name: '', email: '', message: '' });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="font-Poppins pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-medium text-gray-900 mb-2">Address</h2>
              <p className="text-gray-600 mb-8">
                236 5th SE Avenue, New York NY10000, United States
              </p>

              <h2 className="text-2xl font-medium text-gray-900 mb-2">Phone</h2>
              <p className="text-gray-600 mb-8">
                Mobile: +(84) 546-6789<br/>
                Hotline: +(84) 456-6789
              </p>

              <h2 className="text-2xl font-medium text-gray-900 mb-2">Working Time</h2>
              <p className="text-gray-600">
                Monday-Friday: 9:00 - 22:00<br/>
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          
          <div className="bg-white p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-transparent`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-transparent`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject (optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full px-4 py-3 border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-[#B88E2F] focus:border-transparent`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#B88E2F] text-white py-3 rounded-lg hover:bg-[#a07d29] transition-colors duration-300 font-medium"
              >
                Submit
              </button>

              {isSubmitted && (
                <p className="text-green-600 text-center mt-4">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
