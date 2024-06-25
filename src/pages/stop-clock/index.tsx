/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import img from './img.png';
import { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';


const StopTimer = () => {
  const { nextLevel,  } = usePageContext();
  const [seconds, setSeconds] = useState(0);
  const [prevSecond, setPrevSecond] = useState(-1);

  const handleConfirm = () => {
    if (prevSecond == seconds) {
      nextLevel();
    } else {
      enqueueSnackbar('It seems you have not stopped the timer yet.', { variant: 'error' })
    }
  }

  useEffect(() => {
    // @ts-ignore
    window.intervalClock = setInterval(() => {
      setSeconds((prev) => {
        setTimeout(() => {
          setPrevSecond(prev + 1)
        }, 1200);
       return prev + 1
      });
    }, 1000);
    
    return (() => {
      // @ts-ignore
      clearInterval(window.intervalClock)
    })
  }, []);

  

  const renderTimer = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const second = sec % 60;
    return `0${minutes}:${second < 10 ? `0${second}` : second}`;
  };
  
  return (
    <div className='flex flex-col gap-4 w-[80%] max-w-[600px] items-center'>
      <div className='text-2xl font-semibold text-center'>
        Stop this timer 
      </div>

      <div className='text-2xl'>
        {renderTimer(seconds)}
      </div>

      <img src={img} />

      <Button onClick={handleConfirm} className='max-w-[300px] mt-8'>
        I have stopped the timer
      </Button>
    </div>
  )
};

export default StopTimer;
