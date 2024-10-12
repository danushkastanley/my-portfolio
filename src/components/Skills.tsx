import React from 'react';
import { Server, Shield, Code } from 'lucide-react';

const SkillCategory: React.FC<{ title: string, skills: string[], icon: React.ReactNode }> = ({ title, skills, icon }) => (
  <div className="card" data-aos="fade-up">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <div className="w-full">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{skill}</span>
              <span className="text-sm font-medium text-gray-500">90%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress bg-blue-600" style={{ width: '90%' }}></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Skills: React.FC = () => {
  const devOpsSkills = ['AWS', 'Azure DevOps', 'Terraform', 'Ansible', 'ArgoCD', 'Jenkins', 'Docker', 'Kubernetes', 'CI/CD Automation'];
  const securitySkills = ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Web Application Security', 'CTF Challenges'];
  const otherSkills = ['Python', 'Bash Scripting', 'Git', 'Linux Administration', 'Agile Methodologies'];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="DevOps" skills={devOpsSkills} icon={<Server className="text-blue-600" size={24} />} />
          <SkillCategory title="Security" skills={securitySkills} icon={<Shield className="text-green-600" size={24} />} />
          <SkillCategory title="Other Skills" skills={otherSkills} icon={<Code className="text-purple-600" size={24} />} />
        </div>
      </div>
    </section>
  );
};

export default Skills;