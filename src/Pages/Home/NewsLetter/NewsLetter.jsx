import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to submit the email (e.g., send it to an API)
    console.log("Email submitted:", email);
    setEmail(""); // Clear the input after submission
  };

  return (
    <div className="w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[75%] mx-auto flex flex-col items-center justify-center gradient-bg-2 py-8 px-4 sm:px-6 lg:px-8">
      <div className="p-8 w-full max-w-md bg-white rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center gradient-text-2">
          Exclusive offer on your email <br />
          Subscribe to our newsletter and stay updated
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 gradient-btn text-black rounded-lg uppercase"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
