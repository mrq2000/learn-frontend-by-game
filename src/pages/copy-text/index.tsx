import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import { useSignal } from '@preact/signals-react';
import img from './img.png';
import { useEffect } from 'react';

const PASSWORD = 'asdasd2123123asd';

const CopyText = () => {
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
      <div className='text-2xl font-semibold text-center'>
        Don't try do it manually! You are a developer 🫵🫵🫵
      </div>
      <img src={img} />

      <div className="h-[500px] overflow-auto gap-2 flex flex-wrap">
        {[...Array(2000).keys()].map((key) => (
          <Button className='w-[50px]' id={`btn${key*2}`} key={key}>{key}</Button>
        ))}
      </div>
      <Input
        placeholder="Enter password"
        className="max-w-[400px] mt-8"
        onChange={(e) => {
          userPassword.value = e.target.value;
        }}
      />

      <Button onClick={handleConfirm} className="max-w-[300px] mt-8">
        Confirm
      </Button>
    </div>
  );
};

export default CopyText;
