import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import { useSignal } from "@preact/signals-react";
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { enqueueSnackbar } from 'notistack';

const PASSWORD = 'kaipham';

const CookieExpires = () => {
  const { nextLevel, showWrongAnswerMessage, showRightAnswerMessage } = usePageContext();
  const userPassword = useSignal('');

  const handleConfirm = () => {
    const cookieValue = Cookies.get('password');
    
    if (userPassword.value === PASSWORD) {
      if (!cookieValue) {
        enqueueSnackbar('Cookie expire', { variant: 'info' })

        return;
      }
      showRightAnswerMessage();
      nextLevel();
    } else {
      showWrongAnswerMessage();
    }
  }

  useEffect(() => {
    Cookies.set('password', PASSWORD, { expires: 1 / 43200 });
    return () => {
      Cookies.remove('password');
    }
  }, [])

  return (
    <div className='flex flex-col gap-4 w-[80%] max-w-[600px] items-center'>
      <div className='text-2xl font-semibold text-center'>
        Password on your 🍪 (expires on 2s 🏃🏃)
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

export default CookieExpires;
