import React from 'react';

const RoundInput = ({ inputRounds, setInputRounds, startGame }) => {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md mb-6">
      <input
        type="number"
        value={inputRounds}
        onChange={(e) => setInputRounds(e.target.value)}
        placeholder="Enter number of rounds"
        className="rounded px-4 py-2 text-black"
      />
      <button
        onClick={startGame}
        className="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Start Game 🎮
      </button>
    </div>
  );
};

export default RoundInput;
