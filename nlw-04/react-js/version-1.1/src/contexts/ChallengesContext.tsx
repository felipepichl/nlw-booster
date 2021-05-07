import React, { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  levelUp: () => void;
  level: number;
  experienceToNextLevel: number;
  currenceExperience: number;
  challangesCompleted: number;
  activeChallenge: Challenge;
  startNewCallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currenceExperience, setCurrenceExperience] = useState(0);
  const [challangesCompleted, setChallangesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  // eslint-disable-next-line no-restricted-properties
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewCallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengesIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExpirience = currenceExperience + amount;

    if (finalExpirience >= experienceToNextLevel) {
      finalExpirience -= experienceToNextLevel;
      levelUp();
    }

    setCurrenceExperience(finalExpirience);
    setActiveChallenge(null);
    setChallangesCompleted(challangesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        levelUp,
        level,
        experienceToNextLevel,
        currenceExperience,
        challangesCompleted,
        activeChallenge,
        startNewCallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
