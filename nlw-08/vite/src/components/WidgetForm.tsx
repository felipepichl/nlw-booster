import React from 'react';
import { CloseButton } from './CloseButton';

const feedBackType = {
  BUG: {
    title: 'Problema'
  },
  IDEA: {
    title: 'Idea'
  },
  OTHERS: {
    title: 'Outro'
  }, 
}

const WidgetForm: React.FC = () => {
  return (
    <div className='
      bg-zinc-900 
      p-4 realtive 
      rounded-2xl 
      mb-4 flex 
      flex-col
      shadow-lg
      w-[calc(100vw-2rem)]
      md:w-auto'
    >
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className='flex py-8 gap-2 w-full'>
        <button></button>
      </div>

      <footer className='text-xs text-neutral-400'>
        Feito com 💜 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  )
}

export { WidgetForm };