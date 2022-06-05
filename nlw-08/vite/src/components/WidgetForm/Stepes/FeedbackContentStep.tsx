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

      <div className='flex py-8 gap-2 w-full'>
        
      </div>
    </>
    );
}

export { FeedbackContentStep };