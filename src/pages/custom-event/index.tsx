import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import { useSignal } from "@preact/signals-react";
import img from './img.png';
import { useEffect } from 'react';

const PASSWORD = '123123123123';

const CustomEvent = () => {
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
    const logLink = () => {
      console.log(
        'Go to this post to get the password: https://x.com/kai_pham_dev/status/1806044018096456165'
      );
    }
    window.addEventListener('getPassword', logLink);
    return () => {
      window.removeEventListener('getPassword', logLink);
    }
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

export default CustomEvent;
