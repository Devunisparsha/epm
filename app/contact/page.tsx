// pages/contact.tsx

import React from "react";
import Head from "next/head";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="mb-6 text-center">
          We'd love to hear from you! Please feel free to reach out to us with
          any questions, concerns, or feedback.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className= " bg-fourth p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Office Location</h2>
            <p>Plot number 1</p>
            <p>Shanti Nagar</p>
            <p>Bhagyalatha Colony</p>
            <p>Vanasthapuram, Hyderabad-500070</p>
            <p>Telangana, India</p>
          </div>
          <div className=" bg-fourth p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>Phone: 96666 66249</p>
            <p>Email: mail2church@gmail.com</p>
          </div>
        </div>
        <form className="mt-8 bg-fourth p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="prayer"
              className="block text-sm font-medium text-gray-700"
            >
              Prayer Request
            </label>
            <textarea
              id="prayer"
              name="prayer"
              rows={4}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Prayer Request"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-3 px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Prayer Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
