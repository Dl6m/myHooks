import React, { ReactNode, useState, useEffect, useCallback, useMemo, useRef, memo } from 'react';
import { Cascader, DatePicker, Button, ModalProps } from 'antd';
import SelectorTime from '../../components/selectorTime';
import { useGetState } from 'ahooks';
import MyContext from '../../storeContext';
import ImperativeHandle from '../ImperativeHandle/index';
import { useDispatch, useSelector } from 'react-redux';
import { pickerType } from '../../store/DatePicker/action';
type Props = {
  children?: ReactNode;
  className?: string;
} & ModalProps;

const MyComponent: React.FC<Props> = ({ children, className, ...ages }) => {
  const [value, SetValue] = useState<string[]>([]);
  // const [currrt,setCurrt] = useState<number>(0)
  const [currrt, setCurrt, getCount] = useGetState<number>(0);
  const sonRef = useRef<any>(null);
  const [valueString, setValueString] = useState<string>('我是你打野');
  //  const currrt = useRef(0)
  const takeValue = (value: string[]) => {
    console.log(value, 'value');
    SetValue(value);
  };
  const dispatch = useDispatch();
  const linst = useMemo(() => {
    return value[value.length - 1];
  }, [value]);
  const onClick = () => {
    setTimeout(() => {
      // alert(getCount())
      alert(getCount());
    }, 3000);
  };
  const [obj, SetObj] = useState<{ son: string }>({ son: 'da礼貌' });
  const newValue = useCallback((node: HTMLInputElement) => {
    if (node !== null) {
    }
  }, []);

  const sendDdata = () => {
    console.log(pickerType({
        timeFields: [{ field: 'string;', type: 'string;', fieldValue: 'string;' }],
        descript: 'string,',
        timeFormatList: {
          startTime: 'string;',
          endTime: 'string;'
        },
        selectType: 'string'
      }));

    dispatch(
        pickerType({
            timeFields: [{ field: 'string;', type: 'string;', fieldValue: 'string;' }],
            descript: 'string,',
            timeFormatList: {
              startTime: 'string;',
              endTime: 'string;'
            },
            selectType: 'string'
          })
    );
  };

  return (
    <MyContext.Provider value={{ data: valueString }}>
      <div>
        最后的月份
        {linst}
        <Cascader
          style={{ width: 400, marginTop: 20, marginLeft: 20 }}
          multiple={true}
          maxTagCount="responsive"
          defaultValue={[
            ['戴礼帽', '时代大厦', '是的'],
            ['是的', '时代大厦', '都是'],
            ['是的是的', '是的', 'bird']
          ]}
        >
          <DatePicker></DatePicker>
        </Cascader>
        <SelectorTime SelectorTimeID="5"></SelectorTime>
        {/* 封装好的组件时间选择器 */}
        <div style={{ marginTop: 100 }}>
          <SelectorTime SelectorTimeID="6" takeValue={takeValue} DatePickerType={{ picker: 'month' }} TreeSelectType={{ allowClear: true }}></SelectorTime>
        </div>
        <div style={{ marginTop: 20 }}>{/* <SelectorTime SelectorTimeID='4'></SelectorTime> */}</div>
        <div>
          <h1>{currrt}</h1>
          <Button onClick={onClick}>弹窗</Button>
          <Button onClick={() => setCurrt(currrt + 1)}>加一</Button>
        </div>
        <Button
          onClick={() => {
            console.log('~~~~~~~~~~~');
            SetObj((o) => ({
              ...o,
              son: 'da礼貌'
            }));
            sonRef?.current.inputRef.current.focus();
          }}
        >
          聚焦
        </Button>
        <Button
          onClick={() => {
            console.log('~~~~~~~~~~~');
            SetObj((o) => ({
              ...o,
              son: 'da礼貌SSS'
            }));
            sonRef?.current.inputRef2.current.focus();
          }}
        >
          聚焦2
        </Button>
        <Button
          onClick={() => {
            SetObj((o) => ({
              ...o,
              son: 'da礼貌'
            }));
          }}
        >
          传值
        </Button>
        <Button
          onClick={() => {
            setValueString('我是你打野1');
          }}
        >
          简单类型更新
        </Button>
        <Button onClick={() => setValueString('context')}>变化</Button>
        <iframe src="https://v.qq.com/txp/iframe/player.html?vid=l00462zznxg">1111111111</iframe>
        <ImperativeHandle ref={sonRef} value={valueString} classNames={obj}></ImperativeHandle>
      </div>
      <Button onClick={sendDdata}>发送仓库</Button>
    </MyContext.Provider>
  );
};

export default memo(MyComponent);
