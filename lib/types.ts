// lib/types.ts

export type Player = {
  id: string;
  name: string;
  score: number;
  submitted: boolean;
  locked: boolean;
};

export type Room = {
  id: string;
  hostId: string;
  phase: "lobby" | "answering" | "guessing" | "reveal" | "results";
  currentRound: number;
  maxRounds: number;
  question: string;
  players: Player[];
};
