// ApplyForJobForm.js
import React, { useState } from 'react';
import Select from 'react-select';


const ApplyForJobForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    selectedSkills: [],
    aboutMe: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any input field is empty
    if (!formData.firstName || !formData.lastName || !formData.email || formData.selectedSkills.length === 0 || !formData.aboutMe) {
      setError('Please fill out all fields');
    } else {
      // Submit form data
      console.log(formData);
      // Mark job as applied
      // Disable apply button
      job.applied = true;
      onClose();
      // Show alert when application is submitted
      alert('Your application has been submitted!');
      // Clear error
      setError('');
    }
  };

  const handleSkillChange = (selectedOptions) => {
    const selectedSkills = selectedOptions.map((option) => option.value);
    setFormData({ ...formData, selectedSkills });
  };

  return (
    <div style={{ marginLeft: '600px', marginTop: '10px', }}>
      <h2>Apply for {job.title}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          style={{ width: '300px', borderRadius: '4px' }}

        />
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            style={{ width: '300px', borderRadius: '4px', marginTop:'20px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ width: '300px', borderRadius: '4px' }}
          />
        </div>
      
        {/* Add similar inputs for lastName, email */}
        <div style={{ width: '300px', marginLeft: '0px', marginTop: '20px' }}>
  <Select
    isMulti
    options={[
      { value: 'HTML', label: 'HTML' },
      { value: 'CSS', label: 'CSS' },
      { value: 'JavaScript', label: 'JavaScript' },
      { value: 'React', label: 'React' },
      { value: 'Node.js', label: 'Node.js' },
      { value: 'Express.js', label: 'Express.js' },
      { value: 'MongoDB', label: 'MongoDB' },
      { value: 'SQL', label: 'SQL' },
      { value: 'Python', label: 'Python' },
      { value: 'Django', label: 'Django' },
      { value: 'Flask', label: 'Flask' },
      { value: 'Java', label: 'Java' },
      { value: 'Spring', label: 'Spring' },
      { value: 'Kotlin', label: 'Kotlin' },
      { value: 'Swift', label: 'Swift' },
      { value: 'iOS Development', label: 'iOS Development' },
      { value: 'Android Development', label: 'Android Development' },
      { value: 'C#', label: 'C#' },
      { value: 'ASP.NET', label: 'ASP.NET' },
      { value: 'Ruby', label: 'Ruby' },
      { value: 'Ruby on Rails', label: 'Ruby on Rails' },
      { value: 'PHP', label: 'PHP' },
      { value: 'Laravel', label: 'Laravel' },
      { value: 'Vue.js', label: 'Vue.js' },
      { value: 'Angular', label: 'Angular' },
      { value: 'TypeScript', label: 'TypeScript' },
      { value: 'Sass', label: 'Sass' },
      { value: 'Less', label: 'Less' },
      { value: 'Bootstrap', label: 'Bootstrap' },
      { value: 'Tailwind CSS', label: 'Tailwind CSS' },
      { value: 'GraphQL', label: 'GraphQL' },
      { value: 'RESTful API', label: 'RESTful API' },
      { value: 'Microservices', label: 'Microservices' },
      { value: 'Docker', label: 'Docker' },
      { value: 'Kubernetes', label: 'Kubernetes' },
      { value: 'AWS', label: 'AWS' },
      { value: 'Azure', label: 'Azure' },
      { value: 'Google Cloud', label: 'Google Cloud' },
      { value: 'Firebase', label: 'Firebase' },
      { value: 'Heroku', label: 'Heroku' },
      { value: 'Git', label: 'Git' },
      { value: 'CI/CD', label: 'CI/CD' },
      { value: 'Agile Methodology', label: 'Agile Methodology' },
      { value: 'Scrum', label: 'Scrum' },
      { value: 'Kanban', label: 'Kanban' },
      { value: 'Jira', label: 'Jira' },
      { value: 'Trello', label: 'Trello' },
      // Add more skill options
    ]}
    placeholder="Select Skills..."
    onChange={handleSkillChange}
  />
</div>


        <textarea style={{ width: '300px', marginTop: '20px', borderRadius: '5px' }}
          placeholder="About Me"
          value={formData.aboutMe}
          onChange={(e) => setFormData({ ...formData, aboutMe: e.target.value })}
        />
        <div style={{ marginTop: '10px' }}>
          <button className='btn btn' type="submit" style={{ marginLeft:'60px', backgroundColor: '#7E56D8', color: 'white' }}>Submit</button>
          <button className='btn btn' type="button" onClick={onClose} style={{ backgroundColor: '#7E56D8', color: 'white',marginLeft:'30px' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForJobForm;
