import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const teamMembers = [
    { name: 'RAKSHIKA BATRA', email: 'rakshikabatra@gmail.com' },
    { name: 'PRASEN SHINDE', email: 'prasenshinde3@gmail.com' },
    { name: 'PARAS PAWAR', email: 'paras0419@gmail.com' },
  ];

  return (
    <div className=" min-h-screen p-8 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">OUR TEAM</h1>
      <div className="flex justify-between gap-12">
        <div className="w-full md:w-1/2 mb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#043039] rounded-lg p-4 mb-4 ">
              <h2 className="text-xl font-semibold text-white">{member.name}</h2>
              <p className="text-sm">{member.email}</p>
              <div className="flex mt-2">
                <Instagram className="mr-2" size={20} />
                <Linkedin className="mr-2" size={20} />
                <Twitter size={20} />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-[#043039] rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white">Connect With Us</h2>
            <p className="mb-4">We would love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-white">Name:</label>
                <input type="text" id="name" placeholder="Your name..." className="w-full p-2 rounded  border-2 border-white bg-[#043039] text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-white">Email:</label>
                <input type="email" id="email" placeholder="Your email..." className="w-full p-2 border-2 border-white rounded bg-[#043039] text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-white">Message:</label>
                <textarea id="message" placeholder="Your message..." rows="4" className="w-full p-2 border-2 border-white rounded bg-[#043039] text-white"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;