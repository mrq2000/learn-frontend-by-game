import Atob from '@/pages/atob';
import Base64Img from '@/pages/base64-img';
import ChangeWindowSize from '@/pages/change-window-size';
import CookieExpires from '@/pages/cookie-expires';
import CopyText from '@/pages/copy-text';
import CustomEvent from '@/pages/custom-event';
import ConsoleLog from '@/pages/easy-console-log';
import GoHomePage from '@/pages/go-home-page';
import InputPassword from '@/pages/input-password';
import PuzzleGame from '@/pages/jigsaw -puzzle';
import JoinArray from '@/pages/join-array';
import LocalStorage from '@/pages/localstorage';
import PasswordHere from '@/pages/password-black';
import StopTimer from '@/pages/stop-clock';
import TurnOnLight from '@/pages/turn-on-light';

export const LEVELS = [
  {
    path: '/console-log',
    page: ConsoleLog,
    title: 'Console log',
  },
  {
    path: '/array-join',
    page: JoinArray,
    title: 'Array Join',
  },
  {
    path: '/input-password',
    page: InputPassword,
    title: 'Input Password',
  },
  {
    path: '/password-here',
    page: PasswordHere,
    title: 'Password ...',
  },
  {
    path: '/light-on',
    page: TurnOnLight,
    title: 'Turn on Lights',
  },
  {
    path: '/go-home-page',
    page: GoHomePage,
    title: 'Home Page',
  },
  {
    path: '/base64-img',
    page: Base64Img,
    title: 'Base64 Image',
  },
  {
    path: '/local-storage',
    page: LocalStorage,
    title: 'Local Storage',
  },
  {
    path: '/cookie',
    page: CookieExpires,
    title: '🍪',
  },
  {
    path: '/change-window-size',
    page: ChangeWindowSize,
    title: 'Resize Window',
  },
  {
    path: '/atob',
    page: Atob,
    title: 'Decode',
  },
  {
    path: '/custom-event',
    page: CustomEvent,
    title: 'Listen Event',
  },
  {
    path: '/stop-timer',
    page: StopTimer,
    title: 'Stop Timer',
  },
  {
    path: '/select-btn',
    page: CopyText,
    title: 'Find Right Button',
  },
  {
    path: '/last-dance',
    page: PuzzleGame,
    title: 'Last dance',
  },
]