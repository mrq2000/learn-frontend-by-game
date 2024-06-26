import { Twitter } from 'lucide-react';
import { Button } from './ui/button';

const MyX = () => {
  return (
    <a href="https://x.com/kai_pham_dev" target='blank'>
      <Button className="rounded-full p-[8px]">
        <Twitter />
      </Button>
    </a>
  );
};

export default MyX;
