import React, { ReactNode, useState, forwardRef, useImperativeHandle, useRef ,memo,useContext} from 'react';
import { ModalProps } from 'antd';
import MyContext from '../../store';

type ImperativeHandleRef = {
  inputRef: React.RefObject<HTMLInputElement>;
};
type Props = {
    classNames: {
        son:string
    }
    value:string,
  children?: ReactNode;

} & ModalProps;

 
const ImperativeHandle = forwardRef<ImperativeHandleRef, Props>(({ children, classNames,value }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const data = useContext(MyContext)
  console.log('渲染');
  useImperativeHandle(
    ref,
    () => {
      return {
        inputRef,
        inputRef2
      };
    },
    []
  );
  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
        {classNames?.son}
     <h1>
     {'传过来的值'}
        {data.data}
     </h1>
        {value}
      </div>
      l~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      <div>
        <input type="text" ref={inputRef2} />
      </div>
    </>
  );
});

// export default memo(ImperativeHandle,(prevProps, nextProps) => {
//     // 老的和新的相等就会从新渲染
//     return  prevProps.classNames.son === nextProps.classNames.son 
    
//   });
  export default memo(ImperativeHandle);
//   export default ImperativeHandle
