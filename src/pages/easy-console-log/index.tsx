import { useEffect } from 'react';
import { Input } from "@/components/ui/input"

const ConsoleLog = () => {
  useEffect(() => {
    console.clear();
    console.log('Password: learnfrontendbygame.com')
  }, [])
  return (
    <div className='flex justify-center items-center flex-1'>
      <div>
        Get password on your console
      </div>
      <Input />
    </div>
  )
};

export default ConsoleLog;
