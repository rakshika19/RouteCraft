import React, { useState, useEffect } from 'react';
import { AlertCircle, Send, Loader, CheckCircle2 } from 'lucide-react';

const RoadMap = () => {
  // States for Task Management
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [timer, setTimer] = useState(25 * 60); // Default to 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(25); // User-input for minutes

  // States for AI Roadmap Creator
  const [prompt, setPrompt] = useState('');
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsActive(false);
      alert('Session completed!');
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  // Add a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Start timer
  const startTimer = () => {
    if (inputMinutes > 0) {
      setTimer(inputMinutes * 60); // Set timer based on user input
      setIsActive(true);
    } else {
      alert('Please enter a valid time greater than 0.');
    }
  };

  // Reset timer
  const resetTimer = () => {
    setIsActive(false);
    setTimer(inputMinutes * 60); // Reset to the user-input time
  };

  // Format time for display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Progress calculation
  const progress = (tasks.filter(task => task.completed).length / tasks.length) * 100 || 0;

  // Generate AI Roadmap
  const generateRoadmap = async () => {
    setLoading(true);
    // Simulating API call to AI service
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock AI-generated roadmap
    const mockRoadmap = {
      title: "Learn React Development",
      steps: [
        { name: "HTML & CSS Basics", duration: "2 weeks", details: "Learn the fundamentals of web structure and styling." },
        { name: "JavaScript Fundamentals", duration: "4 weeks", details: "Master core JS concepts like variables, functions, and DOM manipulation." },
        { name: "React Core Concepts", duration: "3 weeks", details: "Understand components, props, and state management in React." },
        { name: "State Management (Redux)", duration: "2 weeks", details: "Learn global state management with Redux." },
        { name: "React Hooks", duration: "2 weeks", details: "Explore functional components and built-in React hooks." },
        { name: "Building a Project", duration: "4 weeks", details: "Apply your skills to create a full-fledged React application." }
      ]
    };

    setRoadmap(mockRoadmap);
    setLoading(false);
  };

  // Timeline component for AI Roadmap
  const Timeline = ({ steps }) => (
    <div className="relative border-l-2 border-gray-200 ml-4 mt-4">
      {steps.map((step, index) => (
        <div key={index} className="mb-10 ml-6">
          <div className="absolute w-6 h-6 bg-white rounded-full -left-3 border border-blue-500 flex items-center justify-center">
            <CheckCircle2 className="h-4 w-4 text-blue-500" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{step.name}</h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">{step.duration}</time>
            <p className="mb-4 text-base font-normal text-gray-500">{step.details}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-4 w-[70rem] rounded-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-white">Study Roadmap</h1>

      {/* Add New Task */}
      <div className="mb-4 border p-4 rounded shadow bg-white">
        <h2 className="text-xl font-semibold">Add New Task</h2>
        <div className="flex space-x-2 mt-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-grow border p-2 rounded"
          />
          <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
      </div>

      {/* Tasks */}
      <div className="mb-4 border p-4 rounded shadow bg-white">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <ul className="space-y-2 mt-2">
          {tasks.map(task => (
            <li key={task.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="form-checkbox h-5 w-5"
              />
              <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Pomodoro Timer */}
      <div className="border p-4 rounded shadow mb-4 bg-white">
        <h2 className="text-xl font-semibold">Timer</h2>
        
        {/* Input for user to set custom time */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <label htmlFor="timeInput" className="mr-2">Set Time (minutes):</label>
          <input
            id="timeInput"
            type="number"
            min="1"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(Number(e.target.value))}
            className="border p-2 rounded w-20 text-center"
          />
        </div>

        <div className="text-4xl font-bold text-center mb-4">
          {formatTime(timer)}
        </div>
        <div className="flex justify-center space-x-2">
          <button onClick={startTimer} disabled={isActive} className="bg-green-500 text-white px-4 py-2 rounded">
            Start
          </button>
          <button onClick={resetTimer} className="bg-red-500 text-white px-4 py-2 rounded">
            Reset
          </button>
        </div>
      </div>

      {/* Alert if all tasks are completed */}
      {tasks.length > 0 && progress === 100 && (
        <div className="mt-4 border p-4 rounded shadow bg-green-100 text-green-800 flex items-center">
          <AlertCircle className="h-4 w-4 mr-2" />
          <div>
            <h3 className="font-bold">Congratulations!</h3>
            <p>You've completed all your tasks. Great job!</p>
          </div>
        </div>
      )}

      {/* AI Roadmap Creator */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4 ">AI Roadmap Creator</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="E.g., Create a roadmap for learning React development"
          rows={4}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={generateRoadmap}
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin h-5 w-5 mr-2" /> : <Send className="h-5 w-5 mr-2" />}
          Generate Roadmap
        </button>

        {/* Displaying AI-generated roadmap */}
        {roadmap && (
          <div className="mt-4 border-t pt-4">
            <h3 className="font-bold text-lg mb-2">{roadmap.title}</h3>
            <Timeline steps={roadmap.steps} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadMap;
