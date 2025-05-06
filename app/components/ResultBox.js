import React from "react";

const ResultBox = ({ wins, losses, draws, resetGame }) => {
  return (
    <div className="mt-10 bg-white text-black p-6 rounded-lg shadow-md text-center max-w-sm w-full">
      <p className="text-xl font-bold mt-4 mb-4">
        {wins > losses ? (
          <span className="text-green-400">
            Congratulations! You Won the Game! 🎉
          </span>
        ) : wins < losses ? (
          <span className="text-red-400">Sorry, You Lost the Game. 😔</span>
        ) : (
          <span className="text-yellow-300">It's a Tie! 🤝</span>
        )}
      </p>
      <table className="w-full text-lg mb-4">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-1">✅ Wins</td>
            <td className="font-bold text-green-600">{wins}</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-1">❌ Losses</td>
            <td className="font-bold text-red-600">{losses}</td>
          </tr>
          <tr>
            <td className="py-1">🤝 Draws</td>
            <td className="font-bold text-yellow-600">{draws}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={resetGame}
        className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Play again 🔄
      </button>
    </div>
  );
};

export default ResultBox;
