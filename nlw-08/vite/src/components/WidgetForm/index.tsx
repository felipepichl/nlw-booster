import React, { useState } from 'react';
import { CloseButton } from '../CloseButton';

import { FeedbackTypesStep } from './Stepes/FeedbackTypeStep';

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

type FeedBackType = keyof typeof feedBackTypes;

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
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>

        <CloseButton />
      </header>

      {!feedBackType ? (
        <div className='flex py-8 gap-2 w-full'>
          { Object.entries(feedBackTypes).map(([key, value]) => {
            return (
              <button 
                className='
                  bg-zinc-800 
                  rounded-lg 
                  py-5 
                  w-24 
                  flex-1
                  flex 
                  flex-col 
                  items-center 
                  gap-2 
                  border-2 
                  border-transparent
                  hover:border-brand-500
                  focus:border-x-brand-500
                  focus:outline-none
                '
                key={key}
                onClick={() => setFeedBackType(key as FeedBackType)}
                type='button'
              >
                <img src={value.img.source} alt={value.img.alt} />
                <span>{value.title}</span>
              </button>
            )
          }) }
        </div>
      ) : (
        <p>Hello</p>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com 💜 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  )
}

export { WidgetForm };