import React from 'react';

import { SearchIcon } from '@heroicons/react/outline';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
      {/* Search Box */}
      <div 
        className='flex items-center space-x-2 bg-gray-100
        p-3 rounded-full mt-2'
      >
        <SearchIcon className='h-5 w-5 text-gray-400' />
        <input 
          className='bg-transparent flex-1 outline-none' 
          type="text" 
          placeholder='Search Twitter' 
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ChristhianCaio"
        options={{height: 1000}}
      />
    </div>
  );
};

export default Widgets;