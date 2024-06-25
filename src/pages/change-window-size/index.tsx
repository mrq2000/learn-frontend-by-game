import { Button } from '@/components/ui/button';
import { usePageContext } from '@/PageWrapper';

const WIDTH = 1432;
const HEIGHT = 800;

const ChangeWindowSize = () => {
  const { nextLevel, showWrongAnswerMessage, showRightAnswerMessage } = usePageContext();

  const handleConfirm = () => {
    if (window.innerWidth === WIDTH && window.innerHeight === HEIGHT) {
      showRightAnswerMessage();
      nextLevel();
    } else {
      showWrongAnswerMessage();
    }
    
  }

  return (
    <div className='flex flex-col gap-4 w-[80%] max-w-[600px] items-center'>
      <div className='text-2xl font-semibold text-center'>
        Change window size to {WIDTH}x{HEIGHT}(px)
      </div>

      <Button onClick={handleConfirm} className='max-w-[300px] mt-8'>
        I'm done
      </Button>
    </div>
  )
};

export default ChangeWindowSize;
