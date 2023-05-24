import React, { FC, useEffect, useState ,useRef, useCallback} from 'react';
import useStyle from './style';
import type { ColumnsType } from 'antd/es/table';
import ComTable from '../../components/ComTable';
import { useInterval } from 'ahooks';
// import './index.css';
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
type DT = {
  arr: DataType[];
  length: number;
};
const columns: ColumnsType<DataType> = [
  {
    title: 'Age',
    ellipsis: true,
    dataIndex: 'age',
    key: 'age',
    render(value) {
      return <h1 style={{ color: 'red', fontSize: '28px' }}>{value}</h1>;
    },
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    ellipsis: true,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    ellipsis: true,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    ellipsis: true,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    ellipsis: true,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    ellipsis: true,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    ellipsis: true,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    ellipsis: true,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8', ellipsis: true },
  {
    title: 'Action',
    key: 'operation',
    ellipsis: true,

    render: () => <a>action</a>,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `${i}${i}${i}${i}${i}Edward ${i}`,
    age: 32 + i,
    address: `London Park no. ${i}`,
  });
}

const BulletFrameAssembly: FC = () => {
  const cls = useStyle();
  const [nums, setNum] = useState(0);
  const sloy = useRef<any>(null);
  const [newdata, setnewdata] = useState<DT>({
    arr: data.slice(0, 7),
    length: 6,
  });
  useInterval(
    () => {
      const num = newdata.length + 1 === data.length ? 0 : newdata.length + 1;
      
      setnewdata({
        arr: [...newdata.arr, data[num]].slice(1),
        length: num,
      });
    },
    newdata.arr.length >= 7 ? 900 : undefined
  );

  useEffect(()=>{
    const div = document.querySelector('#div') as HTMLDivElement;
        if (div) {
          
            const th = div.getElementsByClassName('ant-table-cell')[0] as HTMLElement;
                 sloy.current = div.getElementsByClassName('ant-table-body')[0] as HTMLElement;
                   sloy.current.style.transition = 'all .6s';      
        }
  },[])
   useCallback(()=>{
     const fn = (e: Event) => {
       console.log(e);
     };
    window.addEventListener('scroll', fn);
   },[])
  useInterval(
    () => {
       setNum(nums + 1.5); 
        console.log(nums, sloy.current.scrollHeight,'总高度');
        console.log(nums, sloy.current.scrollTop,'被卷曲的头部');
        console.log(nums, sloy.current.clientHeight,'可视高度'); 
            setNum(nums + 1.5); 
            sloy.current.style.transform = 'translateY(-' + nums + 'px)';

    },
   data.length > 0 ? 100 : undefined
  );


  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        background: 'url("https://th.bing.com/th/id/R.6b12f92b2c73d59abb4a81c2a7808467?rik=AOYXr9mdOp6G7Q&riu=http%3a%2f%2fwww.sozai-dx.com%2fphoto%2fsora%2fsora_006.jpg&ehk=Co%2buSx8OorSzBmRVBYeDI4axPXhEO2OLj23fZvtlDjM%3d&risl=&pid=ImgRaw&r=0")'
      }}
    >
      <div
        style={{
          width: '500px',
          height: '300px',
          overflow: 'auto',
          margin: '20px auto'
        }}
        className={cls.root}
      >
        <ComTable sticky={true} columns={columns} dataSource={newdata.arr}></ComTable>
      </div>

      <div
        id="div"
        style={{
          width: '500px',
          height: '300px',
          overflow: 'auto',
          margin: '20px auto'
        }}
        className={cls.root}
      >
        <ComTable
          sticky={true}
          columns={columns}
          dataSource={data}
          iscolor={true}
        //   scroll={{
        //     y: 500,
        //     x: '100%',
        //     scrollToFirstRowOnChange: true
        //   }}
        ></ComTable>
      </div>
    </div>
  );
};

export default BulletFrameAssembly;
