import React from 'react';
import { Code, Server, Cloud } from 'lucide-react';

const ProjectCard: React.FC<{ title: string, description: string, tools: string[], icon: React.ReactNode }> = ({ title, description, tools, icon }) => (
  <div className="card" data-aos="fade-up">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tools.map((tool, index) => (
        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {tool}
        </span>
      ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Jenkins Master Nodes Update Automation",
      description: "Developed a solution to automate Jenkins master node updates using Packer for creating AMIs, Terraform for infrastructure provisioning, and AWS S3 for storing configurations.",
      tools: ["Packer", "Terraform", "AWS S3", "Jenkins", "Bash"],
      icon: <Server className="text-blue-600" size={24} />
    },
    {
      title: "Elastic Beanstalk CI/CD Pipeline",
      description: "Designed and implemented a CI/CD pipeline for Elastic Beanstalk deployments using GitHub Actions, supporting multiple environments and automated rollbacks.",
      tools: ["GitHub Actions", "AWS Elastic Beanstalk", "Docker", "Node.js"],
      icon: <Cloud className="text-green-600" size={24} />
    },
    {
      title: "Security Scanning Integration",
      description: "Integrated automated security scanning tools into the CI/CD pipeline, including SAST, DAST, and container vulnerability scanning, to ensure secure deployments.",
      tools: ["SonarQube", "OWASP ZAP", "Trivy", "Jenkins", "Python"],
      icon: <Code className="text-purple-600" size={24} />
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;