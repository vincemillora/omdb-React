import { TbError404 } from "react-icons/tb";

import './NotFound.css';

export const NotFound = () => {
  return (
    <div className='body-404'>
      <div><TbError404 size={45}/></div>
      <div>Page not found!</div>
    </div>
  )
}