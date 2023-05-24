import React, { ReactNode, useState, useEffect, useCallback, useMemo, useLayoutEffect } from 'react';
import { Modal, ModalProps } from 'antd';

type Props = {
  children?: ReactNode;
  className?: string;
} & ModalProps;

const LayoutEffect: React.FC<Props> = ({ children, className, ...ages }): JSX.Element => {
    const [count,setCount] =useState(0)
    useEffect(()=>{
        if (count === 0) {
            setCount(20+ Math.random()*100)
        }

    },[count])
    // useLayoutEffect(()=>{
    //     if (count === 0) {
    //           setCount(20+ Math.random() * 100)
    //     }
    // },[count])
    console.log(count,'count');
    
  return (
    <div>
      <h1>react18的useEffect 和 useLayoutEffect 的执行差异 </h1>
      <button onClick={()=>setCount(0)}>button -:- {count}</button>
    </div>
  );
};

export default LayoutEffect;
