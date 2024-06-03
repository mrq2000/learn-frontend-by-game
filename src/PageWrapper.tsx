import { useLocalStorage } from 'react-use';
import { LEVELS } from '@/constants/level';
import { FC, PropsWithChildren, createContext } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

interface PageContext {
  currentLevel: number;
  nextLevel: () => void;
  prevLevel: () => void;
  canNext: boolean;
  canBack: boolean;
}
export const PageContext = createContext < PageContext>({} as PageContext)
interface PageWrapper {
  pageKey: string;
}
const PageWrapper: FC<PropsWithChildren<PageWrapper>> = ({ pageKey, children }) => {
  const [value, setValue] = useLocalStorage('level')
  const currentLevel = LEVELS.findIndex(level => level.key === value);
  const pageLevel = LEVELS.findIndex(level => level.key === pageKey);
  const navigate = useNavigate();

  if (currentLevel == -1) {
    return <Navigate to="/" />;
  }
  if (pageLevel > currentLevel) return <>You need finish previous level first</>
  return <PageContext.Provider value={{
    currentLevel,
    nextLevel: () => { 
      setValue(LEVELS[currentLevel + 1].key);
      navigate(LEVELS[currentLevel + 1].path);
    },
    prevLevel: () => {
      navigate(LEVELS[currentLevel - 1].path);
    },
    canNext: currentLevel < LEVELS.length - 1,
    canBack: currentLevel !== 0,
  }}>
    {children}
  </PageContext.Provider>
};

export default PageWrapper;
