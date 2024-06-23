import { useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import { useSignal } from "@preact/signals-react";

const PASSWORD = 'this_is_password_asdA_ADSD_ASDaa';
const ArrayJoin = () => {
  const { nextLevel, showWrongAnswerMessage, showRightAnswerMessage } = usePageContext();
  const userPassword = useSignal('');

  useEffect(() => {
    console.clear();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    window.learnfrontendbygame = PASSWORD.split('');
  }, [])

  const handleConfirm = () => {
    if (userPassword.value === PASSWORD) {
      showRightAnswerMessage();
      nextLevel();
    } else {
      showWrongAnswerMessage();
    }
  }

  return (
    <div className='flex flex-col gap-8 w-[80%] max-w-[600px] items-center'>
      <div className='text-2xl font-semibold text-center'>
        Combine all elements of the "learnfrontendbygame" array to obtain the password.
      </div>

      <Input placeholder='Enter password' className='max-w-[400px]' onChange={(e) => {
        userPassword.value = e.target.value
      }} />

      <Button onClick={handleConfirm} className='max-w-[300px]'>
        Confirm
      </Button>
    </div>
  )
};

export default ArrayJoin;
