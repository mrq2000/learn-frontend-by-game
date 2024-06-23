import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import { useSignal } from "@preact/signals-react";
import img from './img.png';
import { useEffect } from 'react';

const PASSWORD = 'asdasldqwe';

const Atob = () => {
  const { nextLevel, showWrongAnswerMessage, showRightAnswerMessage } = usePageContext();
  const userPassword = useSignal('');

  const handleConfirm = () => {
    if (userPassword.value === PASSWORD) {
      showRightAnswerMessage();
      nextLevel();
    } else {
      showWrongAnswerMessage();
    }
  }

  useEffect(() => {
    const encoded = window.btoa(PASSWORD)
    console.clear();
    console.log(encoded);
  }, [])

  return (
    <div className='flex flex-col gap-4 w-[80%] max-w-[600px] items-center'>
      <img src={img} />

      <Input placeholder='Enter password' className='max-w-[400px] mt-8' onChange={(e) => {
        userPassword.value = e.target.value
      }} />

      <Button onClick={handleConfirm} className='max-w-[300px] mt-8'>
        Confirm
      </Button>
    </div>
  )
};

export default Atob;
