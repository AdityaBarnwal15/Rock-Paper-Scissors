"use client";
import { useState } from "react";
import GameControls from "./components/GameControls";
import RoundInput from "./components/RoundInput";
import ResultBox from "./components/ResultBox";


export default function Home() {
  const choices = ["rock", "paper", "scissors"];
  const [inputRounds, setInputRounds] = useState('');
  const [totalRounds, setTotalRounds] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const getResult = (player, computer) => {
    if (player === computer) {
      setDraws(d => d + 1);
      return "It's a Draw!";
    }
    const win =
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper");
    if (win) {
      setWins(w => w + 1);
      return "You Won! 🎉";
    }
    setLosses(l => l + 1);
    return "Computer Won! 😔";
  };

  const handleChoice = (choice) => {
    if (!totalRounds || gameOver) return;

    const computer = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computer);
    const outcome = getResult(choice, computer);
    setResult(outcome);

    if (currentRound >= totalRounds) {
      setGameOver(true);
    } else {
      setCurrentRound(r => r + 1);
    }
  };

  const startGame = () => {
    const rounds = parseInt(inputRounds);
    if (!rounds || rounds < 1) return alert("Please enter a valid number of rounds.");
    setTotalRounds(rounds);
    setGameOver(false);
    setCurrentRound(1);
    setWins(0);
    setLosses(0);
    setDraws(0);
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  const resetGame = () => {
    setInputRounds('');
    setTotalRounds(null);
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setCurrentRound(1);
    setWins(0);
    setLosses(0);
    setDraws(0);
    setGameOver(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-10">
  <h1 className="text-5xl font-extrabold mb-8 text-center animate-bounce">
    Rock ✊ Paper 🖐 Scissors ✌️
  </h1>

  {!totalRounds ? (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
      <p className="text-lg font-semibold mb-4">Enter the number of rounds to start the game:</p>
      <input
        type="number"
        value={inputRounds}
        onChange={(e) => setInputRounds(e.target.value)}
        placeholder="e.g., 5"
        className="w-24 p-2 rounded border border-gray-300 text-black"
      />
      <button
        onClick={startGame}
        className="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition transform hover:scale-105"
      >
        Start Game 🚀
      </button>
    </div>
  ) : !gameOver ? (
    <div className="mb-6 text-center">
      <p className="text-lg mb-4 animate-pulse">
        Round {currentRound} of {totalRounds}
      </p>
      <GameControls handleChoice={handleChoice} currentRound={currentRound} totalRounds={totalRounds} />
    </div>
  ) : (
    
    <ResultBox
      wins={wins}
      losses={losses}
      draws={draws}
      resetGame={resetGame}
    />
  )}

  {totalRounds && result && !gameOver && (
    <div className="text-center bg-gray-700 px-6 py-4 rounded-lg shadow-lg backdrop-blur-md animate-fade-in">
      <p className="text-xl">You chose: <span className="font-bold text-blue-400">{playerChoice}</span></p>
      <p className="text-xl">Computer chose: <span className="font-bold text-red-400">{computerChoice}</span></p>
      <p className={`text-2xl font-bold mt-2 ${
        result === "You Won! 🎉" ? "text-green-400" :
        result === "Computer Won! 😔" ? "text-red-400" : "text-yellow-300"
      }`}>
        {result}
      </p>
    </div>
  )}
</main>
  );
}
