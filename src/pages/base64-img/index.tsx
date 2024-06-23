import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import { useSignal } from "@preact/signals-react";
import { useEffect } from 'react';
import { base64Img } from './data';

// Follow me if you like this product 🥰🥰🥰
const PASSWORD = 'x.com/kai_pham_dev';

const Base64Img = () => {
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
    console.clear();
    console.log(base64Img)
  }, [])

  return (
    <div className='flex flex-col gap-4 w-[80%] max-w-[600px] items-center'>
      <div className='text-2xl font-semibold text-center'>
        Get image on your console. Password on this image!
      </div>

      <Input placeholder='Enter password' className='max-w-[400px] mt-8' onChange={(e) => {
        userPassword.value = e.target.value
      }} />

      <Button onClick={handleConfirm} className='max-w-[300px] mt-8'>
        Confirm
      </Button>
    </div>
  )
};

export default Base64Img;
