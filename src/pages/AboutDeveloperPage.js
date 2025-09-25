import React from 'react';
import Navbar from '../components/Navbar';
import { Mail, LinkIcon, Linkedin, MessageSquare, Github, Phone } from 'lucide-react';

const AboutDeveloperPage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden md:flex">
          
          {/* Developer Image Section */}
          <div className="md:flex-shrink-0 md:w-1/3 bg-gray-200 p-6 flex items-center justify-center">
            <img 
              src="/home image/adams.jpg" 
              alt="Adams S. Momoh" 
              className="w-full h-full object-cover rounded-full md:rounded-lg shadow-md" 
            />
          </div>

          {/* Developer Info Section */}
          <div className="p-8 md:p-12 md:w-2/3">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Adams S. Momoh</h2>
            <p className="text-lg text-gray-600 mb-6">Web Developer • Sierra Leone (Koidu City, Kono District)</p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              I am a passionate and detail-oriented web developer specializing in 
              <strong className="font-semibold text-gray-800"> modern, responsive, and user-friendly web applications</strong>. 
              With expertise in <strong className="font-semibold text-gray-800">custom website development, e-commerce platforms, and performance optimization</strong>, 
              I build digital solutions that help businesses grow and connect with their audience.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Core Skills</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              <li>Full-stack web development (Frontend & Backend)</li>
              <li>Responsive, mobile-first design</li>
              <li>SEO-friendly coding practices</li>
              <li>Custom e-commerce solutions</li>
              <li>Fast turnaround and clear communication</li>
              <li>Also with responsive mobile-app</li>
              <li>Cybersecurity student</li>
              <li>AI student</li>
            </ul>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <strong className="font-semibold">Email:</strong> <a href="mailto:adamssmomoh89@gmail.com" className="text-blue-600 hover:underline ml-2">adamssmomoh89@gmail.com</a>
              </li>
              <li className="flex items-center text-gray-700">
                <LinkIcon className="w-5 h-5 mr-3 text-blue-600" />
                <strong className="font-semibold">Portfolio:</strong> <a href="https://adamssmomoh.github.io/adams-portfolio/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">yourportfolio.com</a>
              </li>
              <li className="flex items-center text-gray-700">
                <Linkedin className="w-5 h-5 mr-3 text-blue-600" />
                <strong className="font-semibold">LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">linkedin.com/in/yourprofile</a>
              </li>
              <li className="flex items-center text-gray-700">
                <MessageSquare className="w-5 h-5 mr-3 text-blue-600" />
                <strong className="font-semibold">WhatsApp:</strong> <a href="https://wa.me/+23272279276" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">Chat on WhatsApp</a>
              </li>
              <li className="flex items-center text-gray-700">
                <Github className="w-5 h-5 mr-3 text-blue-600" />
                <strong className="font-semibold">GitHub:</strong> <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">yourgithub.com</a>
              </li>
              <li className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <strong className="font-semibold">Phone 1:</strong> <a href="tel:+23272279276" className="text-blue-600 hover:underline ml-2">+232 72279276</a>
              </li>
              <li className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <strong className="font-semibold">Phone 2:</strong> <a href="tel:+23280621186" className="text-blue-600 hover:underline ml-2">+232 80621186</a>
              </li>
            </ul>

            <a 
              href="mailto:adamssmomoh89@gmail.com" 
              className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Let's Build Yours!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDeveloperPage;