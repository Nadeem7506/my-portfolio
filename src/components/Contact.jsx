import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ username: "", phone: "", email: "" });
  };

  return (
    <section className="relative border-2 mt-14 rounded-sm  overflow-hidden p-12">
      {/* Background Image Overlay */}
      <div className="absolute  inset-0 bg-[url('./images/bgImg.jpg')] bg-cover bg-center opacity-30"></div>

      {/* Form Content */}
      <div className="relative z-10  flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-white/30 border p-8 rounded-2xl shadow-lg max-w-lg w-full"
        >
          <h1 className="font-bold text-2xl text-center underline mb-6">Contact</h1>

          <div className="flex flex-col gap-5 text-lg">
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter your name"
              onChange={handleInput}
              className="border border-gray-400 p-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="number"
              name="phone"
              value={formData.phone}
              placeholder="Enter your phone number"
              onChange={handleInput}
              className="border border-gray-400 p-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleInput}
              className="border border-gray-400 p-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
