import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceItem: React.FC<{ title: string, company: string, period: string, description: string[] }> = ({ title, company, period, description }) => (
  <div className="card mb-8" data-aos="fade-up">
    <div className="flex items-center mb-2">
      <Briefcase className="text-blue-600 mr-2" size={20} />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-2">{company}</p>
    <div className="flex items-center text-gray-500 mb-4">
      <Calendar className="mr-2" size={16} />
      <span>{period}</span>
    </div>
    <ul className="list-disc list-inside text-gray-700">
      {description.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Petvisor Pvt Ltd",
      period: "2022 - Present",
      description: [
        "Lead the implementation of CI/CD pipelines using Jenkins and Azure DevOps",
        "Architected and maintained cloud infrastructure on AWS and Azure using Terraform",
        "Implemented Kubernetes for container orchestration and ArgoCD for GitOps workflows",
        "Conducted regular security audits and implemented best practices for cloud security"
      ]
    },
    {
      title: "Team Lead",
      company: "Eight25 Pvt Ltd",
      period: "2019 - 2022",
      description: [
        "Led a team of 5 DevOps engineers, mentoring and guiding their professional development",
        "Automated Jenkins master node updates using Packer, Terraform, and AWS S3",
        "Designed and implemented Elastic Beanstalk CI/CD pipelines for multi-environment deployments",
        "Received High Achiever Award for 2023 for outstanding contributions to the team and company"
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;