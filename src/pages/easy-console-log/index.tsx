import { useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import { useSignal } from "@preact/signals-react";

const PASSWORD = 'learnfrontendbygame.com';
const ConsoleLog = () => {
  const { nextLevel, showWrongAnswerMessage, showRightAnswerMessage } = usePageContext();
  const userPassword = useSignal('');

  useEffect(() => {
    console.clear();
    console.log(`Password: ${PASSWORD}`)
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
    <div className='flex flex-col gap-8'>
      <div className='text-2xl font-semibold'>
        Get password on your console
      </div>
      <Input placeholder='Enter password'  onChange={(e) => {
        userPassword.value = e.target.value
      }} />
      <Button onClick={handleConfirm}>
        Confirm
      </Button>
    </div>
  )
};

export default ConsoleLog;
