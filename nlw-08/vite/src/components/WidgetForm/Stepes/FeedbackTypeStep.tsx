import React from 'react';

import { feedBackTypes, FeedBackType } from '..';

interface FeedbackTypesStepProps {
  onFeedbackTypeChanged: (type: FeedBackType) => void;
}

const FeedbackTypesStep: React.FC<FeedbackTypesStepProps> = ({ onFeedbackTypeChanged }) => {
  return (
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
                onClick={() => onFeedbackTypeChanged(key as FeedBackType)}
                type='button'
              >
                <img src={value.img.source} alt={value.img.alt} />
                <span>{value.title}</span>
              </button>
            )
          }) }
        </div>
  );
}

export { FeedbackTypesStep };