import { useLocalStorage } from 'react-use';
import { LEVELS } from '@/constants/level';
import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

interface PageContext {
  currentLevel: number;
  nextLevel: () => void;
  prevLevel: () => void;
  canNext: boolean;
  canBack: boolean;
  showWrongAnswerMessage: () => void;
  showRightAnswerMessage: () => void;
}
export const PageContext = createContext < PageContext>({} as PageContext)
interface PageWrapper {
  pageKey: string;
  activeLevel: number;
}
const PageWrapper: FC<PropsWithChildren<PageWrapper>> = ({ pageKey, children, activeLevel }) => {
  const [value, setValue] = useLocalStorage('level')
  const currentLevel = LEVELS.findIndex(level => level.path === value);
  const pageLevel = LEVELS.findIndex(level => level.path === pageKey);
  const navigate = useNavigate();

  if (currentLevel < activeLevel) {
    return <Navigate to="/" />;
  }
  if (pageLevel > currentLevel) return <>You need finish previous level first</>
  return <PageContext.Provider value={{
    currentLevel,
    nextLevel: () => {
      if (activeLevel + 1 == LEVELS.length) {
        navigate('/you-are-the-best')
        return;
      }
      if (activeLevel == currentLevel) {
        setValue(LEVELS[activeLevel + 1].path)
      }
      navigate(LEVELS[activeLevel + 1].path);
    },
    prevLevel: () => {
      navigate(LEVELS[currentLevel - 1].path);
    },
    showWrongAnswerMessage: () => {
      enqueueSnackbar('Hmm, it seems like your answer is not correct', { variant: 'error'})
    },
    showRightAnswerMessage: () => {
      if (activeLevel + 1 == LEVELS.length) return;
      enqueueSnackbar("You're doing great.Let's complete the next challenge", { variant: 'success' })
    },
    canNext: currentLevel < LEVELS.length - 1,
    canBack: currentLevel !== 0,
  }}>
    {children}
  </PageContext.Provider>
};

export const usePageContext = () => {
  const context = useContext(PageContext)

  if (context === undefined)
    throw new Error("usePageContext must be used within a PageContext")

  return context
}

export default PageWrapper;
