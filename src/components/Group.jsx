// import React from 'react';
// import './RoomPage.css'; // Import your CSS file
// import {Link} from 'react-router-dom'

// const Group = () => {
//   // Example room data (you can replace this with state or props as needed)
//   const rooms = [
//     { id: 1, subject: 'React', members: 10, created: '2023-09-25' },
//     { id: 2, subject: 'Advanced Data Structure', members: 15, created: '2023-09-22' },
//     { id: 3, subject: 'Python', members: 8, created: '2023-09-20' },
//     { id: 4, subject: 'MERN Stack Project', members: 8, created: '2023-02-20' },
//     { id: 5, subject: 'Sem 1 Assignment', members: 8, created: '2024-09-20' },
//     { id: 6, subject: 'GoLang', members: 8, created: '2023-10-20' },
//   ];

//   return (
//     <div className="container">
//       {/* Main Content */}
//       <div className="main-content">
//         {/* Create Room Button */}
//         <div className="header">
//           <Link to='AddFriend'>
//           <button className="create-room-btn">+ Create Room</button>
//           </Link>
//         </div>

//         {/* Room Cards */}
//         <div className="rooms">
//           {rooms.map((room) => (
//             <div key={room.id} className="room-card">
//               <h3>{room.subject}</h3>
//               <p>Members: {room.members}</p>
//               <p>Created: {room.created}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Group;

import React, { useState } from 'react';
import { X } from 'lucide-react';
import {Link} from 'react-router-dom'

const Group = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Example room data (you can replace this with state or props as needed)
  const rooms = [
    { id: 1, subject: 'React', members: 10, created: '2023-09-25', tasks: ['Component Creation', 'State Management'] },
    { id: 2, subject: 'Advanced Data Structure', members: 15, created: '2023-09-22', tasks: ['Binary Trees', 'Graph Algorithms'] },
    { id: 3, subject: 'Python', members: 8, created: '2023-09-20', tasks: ['File I/O', 'Object-Oriented Programming'] },
    { id: 4, subject: 'MERN Stack Project', members: 8, created: '2023-02-20', tasks: ['Database Design', 'API Development'] },
    { id: 5, subject: 'Sem 1 Assignment', members: 8, created: '2024-09-20', tasks: ['Research', 'Writing'] },
    { id: 6, subject: 'GoLang', members: 8, created: '2023-10-20', tasks: ['Concurrency', 'Web Services'] },
  ];

  const handleViewRoom = (room) => {
    setSelectedRoom(room);
  };

  const handleClosePopup = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="flex h-screen bg-gray-100 w-[72rem] rounded-lg">
      {/* Main Content */}
      <div className="w-4/5 p-6 bg-gray-100 overflow-y-auto">
        {/* Create Room Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Your rooms</h1>
          <Link to='AddFriend'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            + Create Room
          </button>
          </Link>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-md p-6 m-8 w-[17rem]">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{room.subject}</h3>
              <p className="text-gray-600 mb-1">Members: {room.members}</p>
              <p className="text-gray-600 mb-4">Created: {room.created}</p>
              <button
                onClick={() => handleViewRoom(room)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{selectedRoom.subject}</h2>
              <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-2">Members: {selectedRoom.members}</p>
            <p className="text-gray-600 mb-4">Created: {selectedRoom.created}</p>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Tasks:</h3>
            <ul className="list-disc pl-5">
              {selectedRoom.tasks.map((task, index) => (
                <li key={index} className="text-gray-600">{task}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;