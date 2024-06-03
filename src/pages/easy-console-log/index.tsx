import { useEffect } from 'react';

const ConsoleLog = () => {
  useEffect(() => {
    console.clear();
    console.log('Password: learnjsbygame.com')
  }, [])
  return (
    <div className='flex justify-center items-center flex-1'>
      hahahaa
    </div>
  )
};

export default ConsoleLog;
