// JobListItem.js
import React from 'react';

const JobListItem = ({ job, onApplyClick }) => {
  return (
    <div>
      <img src={job.logo} alt={job.company} />
      <h2 onClick={onApplyClick}>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.experience} years experience required</p>
      <ul>
        {job.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p>{job.description}</p>
      {job.applied ? <span>Applied</span> : <button className='btn btn' onClick={onApplyClick} style={{color:'white',backgroundColor:'#7E56D8'}}>Apply</button>}
    </div>
  );
};

export default JobListItem;
