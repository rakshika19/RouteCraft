import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bell, ChevronDown } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskBox = ({ title, progress, dueDate }) => {
  const [showDate, setShowDate] = useState(false);

  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-blue-600 font-medium">Progress: {progress}/10</p>
      <div className="bg-gray-300 rounded-full h-2 mt-2">
        <div 
          className="bg-green-500 rounded-full h-2" 
          style={{width: `${progress * 10}%`}}
        ></div>
      </div>
      <button
        onClick={() => setShowDate(!showDate)}
        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
      >
        {showDate ? 'Hide' : 'Show'} Due Date
      </button>
      {showDate && <p className="mt-2 text-sm text-gray-600">{dueDate}</p>}
    </div>
  );
};

const TaskCard = ({ title, description, actions }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-3">{description}</p>
    <div className="flex space-x-2">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`px-3 py-1 rounded text-white text-sm ${
            index === 0 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          {action}
        </button>
      ))}
    </div>
  </div>
);

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ['Progress', 'To-Do', 'Completed'],
    datasets: [{
      data: [58, 30, 12],
      backgroundColor: ['#3498db', '#f1c40f', '#2ecc71'],
      hoverOffset: 4,
      borderWidth: 0,
    }]
  });

  useEffect(() => {
    // You can fetch data here if needed
  }, []);

  const chartOptions = {
    responsive: true,
    cutout: '75%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 14 }
        }
      },
      tooltip: { enabled: true }
    }
  };

  return (
    <div className="flex p-0 bg-gray-100 m-0">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">

            <Bell className="text-gray-600 cursor-pointer" />
            <div className="flex items-center space-x-2 cursor-pointer">
              <div>
                <span className="font-medium">Prasen Shinde</span>
                <span className="text-sm text-gray-500 block">User</span>
              </div>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Top Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <TaskBox title="Design few mobile" progress={8} dueDate="26 AUG 2023" />
            <TaskBox title="Create wireframe" progress={7} dueDate="14 NOV 2023" />
            <TaskBox title="Make Twitter banner" progress={9} dueDate="08 JUN 2023" />
            <TaskBox title="Add more UI/UX" progress={5} dueDate="12 FEB 2023" />
          </div>

          {/* Task Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Working Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Working <span className="font-normal text-sm text-gray-500">(03)</span></h2>
              <TaskCard title="Web development" description="Creating a recognizable brand identity." actions={["Action 1", "Action 2"]} />
              <TaskCard title="DSA" description="New brand identity required." actions={["Action 1"]} />
              <TaskCard title="MERN STACK" description="A strong brand identity for recognition." actions={["Action 1", "Action 2"]} />
            </div>

            {/* In Progress Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">In Progress <span className="font-normal text-sm text-gray-500">(03)</span></h2>
              <TaskCard title="LEETCODE" description="Distinctive brand identity." actions={["Action 1"]} />
              <TaskCard title="AI ML" description="New brand identity needed." actions={["Action 1", "Action 2"]} />
              <TaskCard title="EXCEL" description="Developing a strong brand identity." actions={["Action 1", "Action 2"]} />
            </div>

            {/* Task Activity */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Task Activity</h2>
                <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-300">See More</button>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <Doughnut data={chartData} options={chartOptions} />
              </div>
              <h2 className="text-xl font-semibold mb-4">Member Comments</h2>
              <ul className="bg-gray-200 p-4 rounded-lg space-y-2">
                <li><strong>Godwin:</strong> Creative work man, change the color</li>
                <li><strong>Rajli:</strong> Ok well done</li>
                <li><strong>Johan:</strong> Good job team!</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;