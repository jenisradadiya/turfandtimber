import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result)
      if (result.status === 1) {
        // toast.success("Thank you for contacting us. We will get back to you soon.");
        window.location.href = '/thank';
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send the message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-14 lg:py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 justify-center items-center">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              src="/images/contact-us.jpg" // Replace this with your actual image path
              alt="Contact Us"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 px-4">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-6 text-3xl font-bold text-black">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="mobile" className="block mb-2 text-sm font-medium">
                    Mobile Number
                  </label>
                  <input
                    required
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Enter your message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 px-4 ${loading ? 'bg-opacity-50 bg-orange' : 'bg-orange hover:bg-opacity-90'} text-white font-semibold rounded-md  transition-colors duration-300`}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">

                      <div role="status">
                        <svg aria-hidden="true" className="w-6 h-6 text-white animate-spin dark:text-gray-600 fill-orange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>

                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
