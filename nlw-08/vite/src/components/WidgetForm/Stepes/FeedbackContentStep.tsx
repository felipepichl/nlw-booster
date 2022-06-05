import React from 'react';
import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepProps {
  
} 

const FeedbackContentStep: React.FC = () => {
  return (
    <>
      <header>
          <span className='text-xl leading-6'>Deixe seu feedback</span>
  
          <CloseButton />
        </header>
  
      <div className='flex py-8 gap-2 w-full'>
        
      </div>
    </>
    );
}

export { FeedbackContentStep };