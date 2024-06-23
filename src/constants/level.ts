import Atob from '@/pages/atob';
import Base64Img from '@/pages/base64-img';
import CookieExpires from '@/pages/cookie-expires';
import ConsoleLog from '@/pages/easy-console-log';
import GoHomePage from '@/pages/go-home-page';
import InputPassword from '@/pages/input-password';
import JoinArray from '@/pages/join-array';
import LocalStorage from '@/pages/localstorage';
import TurnOnLight from '@/pages/turn-on-light';

export const LEVELS = [
  {
    key: 'fasfdqa2',
    path: '/console-log',
    page: ConsoleLog,
    title: 'Console log',
  },
  {
    key: 'asdasdasd',
    path: '/array-join',
    page: JoinArray,
    title: 'Array Join',
  },
  {
    key: 'asdasdad2',
    path: '/input-password',
    page: InputPassword,
    title: 'Input Password',
  },
  {
    key: 'asdasd21',
    path: '/light-on',
    page: TurnOnLight,
    title: 'Turn on Lights',
  },
  {
    key: 'asdasdasdasd21',
    path: '/go-home-page',
    page: GoHomePage,
    title: 'Home Page',
  },
  {
    key: 'qqqasdasd21',
    path: '/base64-img',
    page: Base64Img,
    title: 'Base64 Image',
  },
  {
    key: 'localStorage',
    path: '/local-storage',
    page: LocalStorage,
    title: 'Local Storage',
  },
  {
    key: 'cookieasda',
    path: '/cookie',
    page: CookieExpires,
    title: '🍪',
  },
  {
    key: 'asdasdadaatob',
    path: '/atob',
    page: Atob,
    title: 'Decode',
  },
]