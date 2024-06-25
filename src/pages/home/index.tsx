import { Button } from '@/components/ui/button';
import { LEVELS } from '@/constants/level';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import background from '@/assets/background.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from 'react';

const PAUSE_FOR = 1500;
const Home = () => {
  const navigate = useNavigate();
  const [level, setValue] = useLocalStorage('level');
  const currentLevel = LEVELS.findIndex(lev => lev.path === level);
  
  useEffect(() => {
    const el = document.getElementById('text-typing');
    const typewriter = new Typewriter(el, {
      loop: true,
      delay: 75,
    });
    typewriter
      .typeString('DevTools')
      .pauseFor(PAUSE_FOR)
      .deleteAll()
      .typeString('Javascript')
      .pauseFor(PAUSE_FOR)
      .deleteAll()
      .typeString('CSS')
      .pauseFor(PAUSE_FOR)
      .deleteAll()
      .typeString('HTML')
      .pauseFor(PAUSE_FOR)
      .deleteAll()
      .start();
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center h-screen flex-col">
      <div
        className="fixed top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          filter: 'blur(4px)',
          zIndex: -1,
        }}
      />

      <div
        className="mb-24 text-effect text-[48px] text-center max-w-[800px] flex flex-col items-center"
      >
        <img src="/logo.png" className='w-32 h-32 mb-4' />
        <div className='mb-8'>
          Level up your frontend skills through play!
        </div>

        <span id="text-typing" className='text-[64px] text-[#8282f3] mt-[4px]' />
      </div>

      <Button
        onClick={() => {
          const level = currentLevel == -1 ? 0 : currentLevel;
          setValue(LEVELS[level].path);
          navigate(LEVELS[level].path);
        }}
        size={'lg'}
        className="rounded-full animate-bounce shadow-cyan-500/50 bg-blue-500 px-16 py-8 text-[20px]"
      >
        {currentLevel == -1 ? 'Start now' : 'Continue'}
      </Button>
    </div>
  );
};

export default Home;
