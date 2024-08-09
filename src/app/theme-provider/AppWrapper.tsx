import React, { useContext } from 'react';
import {ThemeContext} from '../../utils'
import s from './AppWrapper.module.scss'

interface AppWrapperProps {
  children: React.ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${s.appWrapper} ${s[`theme-${theme}`]}`}>
      {children}
    </div>
  );
};