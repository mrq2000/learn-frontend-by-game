import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import { useSignal } from '@preact/signals-react';
// import img from './img.png';
import { useEffect } from 'react';

const PASSWORD = 'asdasd2123123asd';

const PuzzleGame = () => {
  const { nextLevel, showWrongAnswerMessage, showRightAnswerMessage } =
    usePageContext();
  const userPassword = useSignal('');

  const handleConfirm = () => {
    if (userPassword.value === PASSWORD) {
      showRightAnswerMessage();
      nextLevel();
    } else {
      showWrongAnswerMessage();
    }
  };

  useEffect(() => {
    const btn = document.getElementById('btn1432');
    if (btn) {
      btn?.addEventListener('click', () => {
        console.log('Button:', btn.id);
        navigator.clipboard.writeText(PASSWORD);
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 w-[80%] max-w-[600px] items-center">
      <div className="text-2xl font-semibold text-center">
        Rotate the pieces to form a valid QR code! This is your gift 🎁🎁🎁{' '}
        <br />
      </div>
      <div className="text-lg font-semibold text-center">
        Don't try do it manually! You are a developer 🫵🫵🫵
      </div>
      <div className="grid grid-cols-5 mt-5">
        {[...Array(25).keys()].map((key) => (
          <img
            id={`img#${key}`}
            key={key}
            className="aspect-square cursor-pointer"
            src={`jigsaw -puzzle/${25 - key}.png`}
            // onClick={(e) => {
            //   const id = `temp-${key}`;
              
            //   if (window[id] == undefined) {
            //     window[id] = 90
            //   } else {
            //     window[id] = 90 + window[id];
            //   }
              
            //   e.target.style.transform = `rotate(${window[id]}deg)`;
            // }}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default PuzzleGame;
