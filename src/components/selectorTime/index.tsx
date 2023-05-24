
import { TreeSelect, DatePicker ,TreeSelectProps,DatePickerProps} from 'antd';
import  { useEffect, useRef, useState, ReactNode} from 'react';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { createStyles, makeStyles } from '@material-ui/core';
const useStyle = makeStyles(
  createStyles({
    divStyle: {
      display: 'flex',
      flexDirection: 'column'
    }
  })
);
type Props = {
    TreeSelectType?:TreeSelectProps //竖向选择器样式
    DatePickerType?:DatePickerProps //时间选择器样式
    SelectorTimeID?:string,//防止冲突 一个页面多个 必传
    children?: ReactNode;
    takeValue?:(value:string[])=>void
  } 
const SelectorTime = ({ SelectorTimeID = '1', ...ages }: Props):JSX.Element => {
  const cls = useStyle();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    if (ages.takeValue) {
      ages.takeValue(selectedOptions);
    }
  }, [ages.takeValue, selectedOptions]);

  const handleDatePickerChange = (date: any, dateString: any) => {
    setSelectedDate(date);
    if (dateString) {
      setSelectedOptions((val: any) => {
        return [...val, dateString];
      });
    }
  };
  const handleTreeSelectChange = (value: any) => {
    setSelectedOptions(value);
};
  const handleFocus = () => {
    const div = document.querySelector(`#datePicker${SelectorTimeID}`) as HTMLElement;
    div?.focus();
    div?.click();
  };
  useEffect(() => {
    const TreeSelectss = document.querySelector(`#TreeSelect${SelectorTimeID}`) as HTMLElement;
    const treeDiv = TreeSelectss.parentNode?.parentNode?.parentNode as HTMLElement
    const divSonf = document.querySelector(`#datePicker${SelectorTimeID}`) as HTMLElement;
    const divSon = divSonf?.parentNode?.parentNode as HTMLElement;
    console.log(treeDiv?.getBoundingClientRect().height,'treeDiv');
    
    divSon.style.height = treeDiv?.getBoundingClientRect().height + 'px';
  }, [selectedOptions]);
  return (
    <>
      <div style={{ width: 300, minHeight: 40, position: 'relative' }} className={cls.divStyle} id="parentElement">
        <TreeSelect
          size="middle"
          id={`TreeSelect${SelectorTimeID}`}
          style={{ width: 300, height: 35, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 99 }}
          multiple
          onChange={handleTreeSelectChange}
          value={selectedOptions}
          onClick={handleFocus}
          dropdownStyle={{
            display: 'none'
          }}
          {...ages.TreeSelectType}
        />
        <DatePicker size="middle" locale={locale} id={`datePicker${SelectorTimeID}`} value={selectedDate} onChange={handleDatePickerChange} style={{ width: 300, height: 32, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, opacity: 0 }} {...ages.DatePickerType} />
      </div>
    </>
  );
};

export default SelectorTime;

