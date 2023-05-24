import useStyle from './style';
import { Table, TableProps } from 'antd';

import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
interface DataType<T> extends TableProps<T> {
  iscolor?: boolean;
}

const ComTable = <T extends object>(props: DataType<T>) => {
  const cls = useStyle();
  const { style, className, iscolor = true, ...other } = props;
  return (
    <ConfigProvider locale={zh_CN}>
      <Table<T>
    
        className={`${cls.antTalbe} ${className}`}
        scroll={{ x: '100%' }}
        pagination={false}
        style={{ ...style }}
        rowClassName={(_record: any, index: number) => {
          let className = '';

          iscolor && (className = index % 2 === 0 ? cls.tableItemBg : '');

          return className;
        }}
        {...other}
      />
    </ConfigProvider>
  );
};

export default ComTable;
