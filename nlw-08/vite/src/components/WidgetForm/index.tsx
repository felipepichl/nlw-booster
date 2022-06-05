import React, { useState } from 'react';

import { FeedbackTypesStep } from './Stepes/FeedbackTypeStep';
import { FeedbackContentStep } from './Stepes/FeedbackContentStep'

import bug from '../../assets/bug.svg';
import idea from '../../assets/idea.svg';
import thought from '../../assets/thought.svg';

const feedBackTypes = {
  BUG: {
    title: 'Problema',
    img: {
      source: bug,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Idea',
    img: {
      source: idea,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHERS: {
    title: 'Outro',
    img: {
      source: thought,
      alt: 'Imagem de um balão de pensamento'
    }
  }, 
}

export type FeedBackType = keyof typeof feedBackTypes;

const WidgetForm: React.FC = () => {
  const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null);

  return (
    <div className='
      bg-zinc-900 
      p-4 
      realtive 
      rounded-2xl 
      mb-4 
      flex 
      flex-col
      items-center
      shadow-lg
      w-[calc(100vw-2rem)]
      md:w-auto'
    >

      {!feedBackType ? (
        <FeedbackTypesStep onFeedbackTypeChanged={setFeedBackType} />
      ) : (
        <FeedbackContentStep />
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com 💜 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  )
}

export { WidgetForm, feedBackTypes };