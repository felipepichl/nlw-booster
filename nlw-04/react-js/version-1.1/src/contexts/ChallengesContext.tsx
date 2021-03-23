import React, { createContext, useState, ReactNode } from 'react';

interface ChallengesCOntextData {
  levelUp: () => void;
  level: number;
  currenceExperience: number;
  challangesCompleted: number;
  startNewCallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesCOntextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currenceExperience, setCurrenceExperience] = useState(0);
  const [challangesCompleted, setChallangesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewCallenge() {
    console.log('New Challenge');
  }

  return (
    <ChallengesContext.Provider
      value={{
        levelUp,
        level,
        currenceExperience,
        challangesCompleted,
        startNewCallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
