import React from 'react';
import { CloseButton } from '../../CloseButton';
import { FeedBackType, feedBackTypes } from '..'
import { ArrowLeft } from 'phosphor-react';

interface FeedbackContentStepProps {
  feedbackType: FeedBackType;
  onFeedbackRestarRequested: () => void; 
} 

const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({ 
  feedbackType, 
  onFeedbackRestarRequested 
}) => {
  const feedbackTypeInfo = feedBackTypes[feedbackType];
  
  return (
    <>
      <header>
        <button 
          type='button' 
          className='top-5 left-5 absolute text-zinc-400 hover:text-sinc-100'
          onClick={onFeedbackRestarRequested}
        >
          <ArrowLeft weight='bold' className='w-4 h4'/>
        </button>

        <span className='text-xl leading-6 flex items-center gap-2'>
          <img 
            src={feedbackTypeInfo.img.source} 
            alt={feedbackTypeInfo.img.alt}
            className="w-6 h-6" 
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className='my-4 w-full'>
        <textarea
          className='
            min-w-[304px] 
            w-full 
            min-h-[112px] 
            text-sm 
            placeholder:zinc-400
            text-zinc-100
            border-zinc-600
            bg-transparent
            rounded-md
            resize-none
            focus:border-brand-500
            focus:ring-brand-500
            focus:ring-1
            focus:outline-none
            scrollbar
            scrollbar-thumb-zinc-700
            scrollbar-track-transparent
            scrollbar-thin
          '
          placeholder='Tell me with more details What`s happen...'
        />

        <footer className='flex gap-2 mt-2'>
          <button
            type='submit'
            className='
              p-2
              bg-brand-500
              rounded-md
              border-transparent
              flex-1
              flex
              justify-center
              items-center
              text-sm
              hover:bg-brand-300
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-zinc-900
              focus:ring-brand-500 
              transition-colors
            '
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
    );
}

export { FeedbackContentStep };