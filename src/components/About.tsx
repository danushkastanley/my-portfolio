import React from 'react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
              alt="Dan - DevOps Engineer"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12" data-aos="fade-left">
            <h1 className="text-4xl font-bold mb-4 text-gradient">Dan</h1>
            <h2 className="text-2xl text-gray-600 mb-6">Senior DevOps Engineer & Cybersecurity Enthusiast</h2>
            <p className="text-gray-700 mb-6">
              As a seasoned DevOps engineer with a passion for cybersecurity, I specialize in bridging the gap between development and operations while ensuring robust security practices. With extensive experience in cloud services (AWS, Azure), configuration management tools (Ansible, Terraform), and a keen interest in ethical hacking, I strive to create efficient, scalable, and secure infrastructures.
            </p>
            <p className="text-gray-700 mb-6">
              Recently, I was honored with the High Achiever Award for 2023 at Eight25 Pvt Ltd, recognizing my contributions to streamlining deployment processes and enhancing security protocols.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="btn btn-primary">Get in Touch</a>
              <a href="/path-to-your-resume.pdf" download className="btn btn-outline flex items-center">
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;