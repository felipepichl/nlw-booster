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
      </form>
    </>
    );
}

export { FeedbackContentStep };