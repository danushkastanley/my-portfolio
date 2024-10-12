import React from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'LinkedIn Posts', to: 'linkedin-posts' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="about" smooth={true} duration={500} className="text-2xl font-bold text-gradient cursor-pointer">
          Dan
        </Link>

        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <Linkedin size={24} />
          </a>
          <button onClick={toggleMenu} className="md:hidden text-gray-600 hover:text-blue-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;