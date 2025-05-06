import React from 'react';

const GameControls = ({ handleChoice, currentRound, totalRounds }) => {
  return (
    <div className="flex gap-4 mb-6">
      <button onClick={() => handleChoice("rock")} className="bg-white text-black px-6 py-3 rounded-full hover:scale-110 transition-transform shadow-md text-lg">
        Rock ✊
      </button>
      <button onClick={() => handleChoice("paper")} className="bg-white text-black px-6 py-3 rounded-full hover:scale-110 transition-transform shadow-md text-lg">
        Paper 🖐
      </button>
      <button onClick={() => handleChoice("scissors")} className="bg-white text-black px-6 py-3 rounded-full hover:scale-110 transition-transform shadow-md text-lg">
        Scissors ✌️
      </button>
    </div>
  );
};

export default GameControls;
