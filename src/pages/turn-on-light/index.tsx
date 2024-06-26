import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import './index.css';
import { useMemo } from 'react';

// const awnser = () => {
//   const lightElements = document.getElementsByClassName('light');
//   for (let i = 0, max = lightElements.length; i < max; i++) {
//     lightElements[i].classList.add('light-on')
//   }
// }
const TurnOnLight = () => {
  const { nextLevel, showWrongAnswerMessage, showRightAnswerMessage } = usePageContext();

  const handleConfirm = () => {
    const lightElements = document.getElementsByClassName('light')
    let isTurnonAllLights = true;
    for (let i = 0, max = lightElements.length; i < max; i++) {
      if (!lightElements[i].classList.contains('light-on')) {
        isTurnonAllLights = false;
        break;
      }
    }
    if (isTurnonAllLights) {
      showRightAnswerMessage();
      nextLevel();
    } else {
      showWrongAnswerMessage();
    }
  }

  const randomPositions = useMemo(() => {
    return Array.from({ length: 100 }).map(() => {
      const x = Math.floor(Math.random() * (window.innerWidth + 40) - 20);
      const y = Math.floor(Math.random() * (window.innerHeight + 40) - 20);
      const scale = Math.random() * 0.4 + 0.7;
      return {
        x, y, scale
      }
    });
  }, [])

  return (
    <div className='flex flex-col gap-8 w-[80%] max-w-[600px] items-center'>
      <div className='text-2xl font-semibold text-center'>
        Turn on all lights
      </div>

      <div className='flex flex-1 justify-between gap-4'>
        <div className='flex flex-col items-center gap-4'>
          <div className='light light-off' />
          Light OFF
        </div>
        <div>
          →
        </div>
        <div className='flex flex-col items-center gap-4'>
          <div className='light light-on' />
          Light ON
        </div>
      </div>

      <Button onClick={handleConfirm} className='max-w-[300px]'>
        I have turn on all lights
      </Button>

      <div className='z-0 opacity-40'>
        {randomPositions.map((position, index) => <div className='fixed light light-off' key={index} style={{
          left: position.x,
          top: position.y,
          transform: `scale(${position.scale})`,
        }} />)}
      </div>
    </div>
  )
};

export default TurnOnLight;
