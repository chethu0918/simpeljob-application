// JobListScreen.js
import React from 'react';
import JobListItem from './JobListItem';
import img from "../img/Emlblem.png";

const JobListScreen = ({ onApplyClick }) => {
  const jobs = [
    {
      id: 1,
      logo: 'company1_logo.png',
      title: 'Frontend Developer',
      company: 'ABC Inc.',
      experience: 2,
      skills: ['React', 'JavaScript', 'HTML', 'CSS','Bootstrap'],
      description: ' "Software Engineer", description: "We are looking for a skilled software engineer to join our team',
      applied: false,
    },
    {
      id: 2,
      logo: '/img/company1_logo.png', 
      title: 'Backend Developer',
      company: 'INFO Tech.',
      experience: 2,
      skills: ['.net', 'JavaScript', 'Python', 'PHP'],
      description: '"Software Engineer", description: "We are looking for a skilled software engineer to join our team',
      applied: false,
    },
    {
      id: 3,
      logo: '/img/company1_logo.png', 
      title: 'UI/UX Designer',
      company: 'IBMM Tech.',
      experience: 2,
      skills: ['UX', 'Figma', 'basic coding'],
      description: '"Software Engineer", description: "We are looking for a skilled software engineer to join our team',
      applied: false,
    },
    {
      id: 4,
      logo: '/img/company2_logo.png', 
      title: 'Data Scientist',
      company: 'DataTech Inc.',
      experience: 3,
      skills: ['Machine Learning', 'Python', 'Data Analysis'],
      description: '"Data Scientist", description: "Exciting opportunity for a data scientist with experience in machine learning',
      applied: false,
    },
    // Add more job objects here
  ];

  return (
    <div className="row row-cols-1 row-cols-md-2" style={{marginLeft:'250px'}}>
      {jobs.map((job) => (
        <div className="col" key={job.id}>
           <img src={img} alt="Company Logo" />
          <JobListItem job={job} onApplyClick={() => onApplyClick(job)} />
        </div>
      ))}
    </div>
  );
};

export default JobListScreen;
