import React, { useState } from 'react';
import './AddFriend.css'; // Import your CSS file

const AddFriend = () => {
  const [topic, setTopic] = useState('');
  const [numMembers, setNumMembers] = useState(1);
  const [members, setMembers] = useState([{ username: '', name: '' }]);

  // Handle changes in the number of members input
  const handleNumMembersChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumMembers(value);

    // Update members array based on the number of members entered
    const updatedMembers = Array.from({ length: value }, (_, index) => {
      return members[index] || { username: '', name: '' };
    });
    setMembers(updatedMembers);
  };

  // Handle individual member details change
  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = members.map((member, i) =>
      i === index ? { ...member, [name]: value } : member
    );
    setMembers(updatedMembers);
  };

  // Submit form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the topic and members data to your backend or process it further
    console.log({ topic, members });
    alert('Room created with topic: ' + topic + ' and members: ' + JSON.stringify(members));
  };

  return (
    <div className='Friend-container'>
    <div className="add-friend-container">
      <h2>Create Room</h2>
      <form onSubmit={handleSubmit}>
        {/* Topic input */}
        <div className="form-group ">
          <label>Topic:</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>

        {/* Number of Members input */}
        <div className="form-group noofmem">
          <label>Number of Members:</label>
          <input
            type="number"
            min="1"
            value={numMembers}
            onChange={handleNumMembersChange}
            required
          />
        </div>

        {/* Dynamically generated member input fields */}
        {members.map((member, index) => (
          <div key={index} className="member-input">
            <label className='member'>Member {index + 1}</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={member.username}
              onChange={(e) => handleMemberChange(index, e)}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={member.name}
              onChange={(e) => handleMemberChange(index, e)}
              required
            />
          </div>
        ))}

        {/* Submit button */}
        <button type="submit" className="create-room-btn">Create Room</button>
      </form>
    </div>
    </div>
  );
};

export default AddFriend;
