import React from 'react';
import { Trophy } from 'lucide-react';

const leaderboardData = [];
const playerNames = ["Prasen Shinde", "Paras Pawar", "Rakshika Bara", "Raj Patle", "Kobu" , "Ashok Patil" ,"Arjun Bhohsale","Harsh Bhole","Aditya Rane","Sujal Gaikwad" ];

for (let i = 0; i < playerNames.length; i++) {
  leaderboardData.push({
    rank: i + 1, 
    playerName: playerNames[i],
    earningPoint: Math.floor(Math.random() * 100000) + 1,
  });
}

const LeaderboardRow = ({ rank, playerName, earningPoint }) => (
  <div className="flex items-center mb-2 text-white">
    <div className="w-12 text-center">{rank}</div>
    <div className="flex-1 bg-blue-700 rounded-lg py-2 px-4 flex items-center transition-transform duration-200 ease-in-out hover:bg-blue-800 bg-[#043039] ">
      <div className="w-8 h-8 bg-green-400 rounded-full mr-4"></div>
      <div className="flex-auto">{playerName}</div>
      <div>{earningPoint.toLocaleString()}</div>
    </div>
    <div className="w-12 text-center m-4">
      22310309
    </div>
  </div>
);

const Table = () => (
  <div className="bg-blue-900 p-6 ml-6 rounded-2xl w-[71rem] mx-auto bg-[#046d82]">
    <h1 className="text-white text-3xl font-bold mb-6 text-center">LEADERBOARD</h1>
    <div className="flex text-blue-300 mb-2 text-sm p-2">
      <div className="w-12 text-center font-bold">RANK</div>
      <div className="flex-1 font-bold">PLAYER</div>
      <div className="w-32 text-right pr-12 font-bold">EARNING POINT</div>
      <div className="w-12 text-center font-bold">ID</div>
    </div>
    {leaderboardData.map((player) => (
      <LeaderboardRow key={player.rank} {...player} />
    ))}
  </div>
);

export default Table;