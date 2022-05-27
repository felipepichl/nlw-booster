import React, { useState } from 'react';
import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'

const Widget: React.FC = () => {
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  // function toggleWidgetVisibility() {
  //   setIsWidgetOpen(!isWidgetOpen)
  // }
  
  return (
    
    <Popover className='absolute bottom-5 right-5'>
      {/* {isWidgetOpen && (<p>Hello Wolrd</p>)} */}
      <Popover.Panel>Hello Wolrd</Popover.Panel>
      
      <Popover.Button className='
        bg-brand-500 
        rounded-full 
        px-3 h-12 
        text-white 
        flex 
        items-center 
        group'
      >
        <ChatTeardropDots className='w-6 h-6' />

        <span className='
          max-w-0 
          overflow-hidden 
          group-hover:max-w-xs 
          transition-all 
          duration-500
          ease-linear'
        >
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}

export { Widget };