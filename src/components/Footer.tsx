import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Dan. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;