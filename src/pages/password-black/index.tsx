import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';
import { useSignal } from "@preact/signals-react";

const PASSWORD = 'asdasdasd213';

const PasswordHere = () => {
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

  return (
    <div className='flex flex-col gap-4 w-[80%] max-w-[600px] items-center'>
      <div className='text-2xl font-semibold text-center'>
        Password Here
      </div>

      <div className='text-2xl'>
        ↓
      </div>

     <div className='opacity-0 pointer-events-none'>
        {PASSWORD}
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

export default PasswordHere;
