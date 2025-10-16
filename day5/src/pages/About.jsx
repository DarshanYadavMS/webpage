import React from "react";

const About = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Welcome to our platform! We are passionate about creating meaningful
            experiences and delivering exceptional value to our users. Our
            journey began with a simple idea and has grown into something we're
            truly proud of.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To empower individuals and businesses with innovative solutions
              that make their lives easier and more productive.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To become the leading platform in our field, known for excellence,
              innovation, and user-centered design.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions or want to learn more? We'd love to hear from you!
            Reach out to us at{" "}
            <a
              href="mailto:contact@example.com"
              className="text-blue-600 hover:text-blue-800"
            >
              contact@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
