import React from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';

const LinkedInPost: React.FC<{ title: string, date: string, preview: string, link: string }> = ({ title, date, preview, link }) => (
  <div className="card mb-6" data-aos="fade-up">
    <div className="flex items-center mb-2">
      <Linkedin className="text-blue-600 mr-2" size={20} />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-500 text-sm mb-2">{date}</p>
    <p className="text-gray-700 mb-4">{preview}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
      Read More <ArrowRight size={16} className="ml-1" />
    </a>
  </div>
);

const LinkedInPosts: React.FC = () => {
  const posts = [
    {
      title: "Automating Jenkins Updates: A DevOps Journey",
      date: "March 15, 2024",
      preview: "Learn how we automated Jenkins master node updates using Packer, Terraform, and AWS S3, significantly reducing downtime and improving security.",
      link: "https://www.linkedin.com/pulse/automating-jenkins-updates-devops-journey-dan"
    },
    {
      title: "Securing Your Cloud Infrastructure: Best Practices",
      date: "February 28, 2024",
      preview: "Discover the top security practices for cloud infrastructure, including IAM policies, network segmentation, and continuous monitoring.",
      link: "https://www.linkedin.com/pulse/securing-your-cloud-infrastructure-best-practices-dan"
    },
    {
      title: "From CI to CD: Implementing GitOps with ArgoCD",
      date: "January 10, 2024",
      preview: "Explore how we transitioned from traditional CI/CD to GitOps using ArgoCD, improving deployment consistency and reducing human errors.",
      link: "https://www.linkedin.com/pulse/from-ci-cd-implementing-gitops-argocd-dan"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Latest LinkedIn Articles</h2>
        <div className="max-w-3xl mx-auto">
          {posts.map((post, index) => (
            <LinkedInPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInPosts;