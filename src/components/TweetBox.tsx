import React, { useState } from 'react';

import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline';

function TweetBox() {
  const [input, setInput] = useState<string>('');

  return (
    <div className='flex space-x-2 p-5'>
        <img 
          className='h-14 w-14 object-cover rounded-full mt-4' 
          src="https://pbs.twimg.com/profile_images/1485291811253932038/2MhJEUA6_400x400.jpg" 
          alt="" 
        />

        <div className='flex flex-1 items-center pl-2'>
          <form className='flex flex-1 flex-col'>
            <input 
              type="text" 
              placeholder="What's Happening?" 
              className='h-24 w-full outline-none text-lg 
              placeholder:text-xl' 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className='flex items-center'>
              <div className='flex space-x-2 text-twitter flex-1'>
                <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform 
                  duration-150 ease-out hover:scale-150' 
                />
                <SearchCircleIcon className='h-5 w-5' />
                <EmojiHappyIcon className='h-5 w-5' />
                <CalendarIcon className='h-5 w-5' />
                <LocationMarkerIcon className='h-5 w-5' />
              </div>

              <button 
                disabled={!input} 
                className='bg-twitter px-5 py-2 font-bold 
                text-white rounded-full disabled:opacity-40'
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default TweetBox