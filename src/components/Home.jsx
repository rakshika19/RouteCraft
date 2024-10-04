import React, { useState } from 'react';
import { Calendar, Clock, Trophy, Search, Plus, X, ChevronRight, Star, Users, BookOpen } from 'lucide-react';
import '../App.css'

const Home = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [roadmapSteps, setRoadmapSteps] = useState([]);
  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleAddRoadmapStep = () => {
    setRoadmapSteps([...roadmapSteps, { text: '', duration: '' }]);
  };

  const handleUpdateRoadmapStep = (index, field, value) => {
    const newSteps = [...roadmapSteps];
    newSteps[index][field] = value;
    setRoadmapSteps(newSteps);
  };

  // Mock data for existing roadmaps
  const existingRoadmaps = [
    { id: 1, title: "Computer Science Degree", progress: 75 },
    { id: 2, title: "Web Development Bootcamp", progress: 40 },
    { id: 3, title: "Data Science Fundamentals", progress: 60 },
  ];

  return (
    <div className="min-h-screen bg-color-[#A0D7E7] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Plan Your Study Roadmap</h1>
          <p className="text-lg mb-8">
            Stay organized and achieve your academic goals with your personalized study roadmap.
            Get ready to ace your subjects with ease and fun!
          </p>
          <div className="relative">
            <input 
              type="text" 
              placeholder='Search' 
              className='p-2 pl-10 ml-12 rounded-lg w-full '
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard className='text-black'
            icon={<Calendar size={32} />}
            title="Personalized Roadmaps"
            description="Create custom study plans based on your goals and deadlines."
          />
          <FeatureCard 
            icon={<Clock size={32} />}
            title="Pomodoro Timer"
            description="Boost productivity with built-in focus timers to keep you on track."
          />
          <FeatureCard 
            icon={<Trophy size={32} />}
            title="Track Your Progress"
            description="Track your study milestones and achievements with visual progress bars."
          />
        </div>

        {/* Call to Action and To-Do List Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Call to Action */}
          <div className="text-center md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Ready to Crush Your Exams?</h2>
            <button 
              className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-purple-200 transition"
              onClick={() => setShowRoadmap(!showRoadmap)}
            >
              {showRoadmap ? 'Hide Roadmap Builder' : 'Start Building Your Roadmap'}
            </button>
            {showRoadmap && (
              <div className="mt-6 bg-white text-purple-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Roadmap Builder</h3>
                {roadmapSteps.map((step, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Step description"
                      value={step.text}
                      onChange={(e) => handleUpdateRoadmapStep(index, 'text', e.target.value)}
                      className="flex-grow p-2 rounded-lg border border-purple-400"
                    />
                    <input
                      type="text"
                      placeholder="Duration"
                      value={step.duration}
                      onChange={(e) => handleUpdateRoadmapStep(index, 'duration', e.target.value)}
                      className="w-24 p-2 rounded-lg border border-purple-400"
                    />
                  </div>
                ))}
                <button
                  className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                  onClick={handleAddRoadmapStep}
                >
                  <Plus size={16} className="inline mr-2" /> Add Step
                </button>
              </div>
            )}
          </div>

          {/* To-Do List */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg md:w-1/2">
            <h3 className="text-xl font-bold mb-4">To-Do List</h3>
            <div className="mb-4">
              <input
                type="text"
                className="p-2 rounded-lg border border-purple-400 w-full"
                placeholder="Add a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                onClick={handleAddTask}
              >
                <Plus size={16} className="inline mr-2" /> Add Task
              </button>
            </div>
            <ul className="space-y-2">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-2 bg-purple-100 rounded-lg"
                >
                  <span className={task.completed ? 'line-through' : ''}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTask(index)}
                      className="mr-2"
                    />
                    {task.text}
                  </span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteTask(index)}
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Existing Roadmaps Section */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-16">
          <h3 className="text-2xl font-bold mb-6">Your Roadmaps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {existingRoadmaps.map((roadmap) => (
              <div key={roadmap.id} className="bg-purple-100 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">{roadmap.title}</h4>
                <div className="w-full bg-purple-200 rounded-full h-2.5">
                  <div 
                    className="bg-purple-600 h-2.5 rounded-full" 
                    style={{width: `${roadmap.progress}%`}}
                  ></div>
                </div>
                <p className="text-right mt-1">{roadmap.progress}% Complete</p>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
            View All Roadmaps
          </button>
        </div>

        {/* Additional Homepage Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Testimonials Section */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">What Our Users Say</h3>
            <div className="space-y-4">
              <Testimonial 
                text="This roadmap planner has completely transformed my study habits!"
                author="Raj Patle, Computer Science Student"
              />
              <Testimonial 
                text="I love how easy it is to track my progress and stay motivated."
                author="Harsh Bhole, Aspiring Web Developer"
              />
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Learning Resources</h3>
            <ul className="space-y-2">
              <Resource 
                icon={<BookOpen size={20} />}
                title="Free Programming Books"
                link="#"
              />
              <Resource 
                icon={<Users size={20} />}
                title="Study Group Finder"
                link="#"
              />
              <Resource 
                icon={<Star size={20} />}
                title="Top Rated Online Courses"
                link="#"
              />
            </ul>
          </div>
        </div>

        {/* Call-to-Action Footer */}
        <div className="text-center bg-[#046d82] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today!</h2>
          <p className="mb-6">Join thousands of students achieving their goals with our roadmap planner.</p>
          <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-purple-200 transition">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white text-purple-600 rounded-lg shadow-lg text-black">
    <div className="bg-purple-200 p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Testimonial = ({ text, author }) => (
  <div className="bg-purple-100 p-4 rounded-lg">
    <p className="italic mb-2">"{text}"</p>
    <p className="font-semibold">- {author}</p>
  </div>
);

const Resource = ({ icon, title, link }) => (
  <li>
    <a href={link} className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition">
      {icon}
      <span className='text-black'>{title}</span>
    </a>
  </li>
);

export default Home;