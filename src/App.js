// App.js
import React, { useState } from 'react';
import JobListScreen from './live/JobListScreen';
import ApplyForJobForm from './live/ApplyForJobForm';

const App = () => {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplyForm(true);
  };

  const handleCloseForm = () => {
    setShowApplyForm(false);
  };

  return (
    <div className="App">
      <h1 style={{textAlign:'center',backgroundColor:'#7E56D8',color:'white'}}>Job Listings</h1>
      <input type="text" placeholder="Search jobs..." style={{marginLeft:'500px',borderRadius:"10px",width:'450px',marginBottom:'20px'}}  />
      <JobListScreen onApplyClick={handleApplyClick} />
      {showApplyForm && <ApplyForJobForm job={selectedJob} onClose={handleCloseForm} />}
    </div>
  );
};

export default App;