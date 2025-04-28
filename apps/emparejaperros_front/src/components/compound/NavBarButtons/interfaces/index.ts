import { options } from "../types";

interface NavBarButtonsProps {
    content: options;
  
  }
  
  export interface Props extends NavBarButtonsProps {
    children: React.ReactNode;
    bgColor?: string;

  }

  export interface INavBarContext {
    content: options;
  }