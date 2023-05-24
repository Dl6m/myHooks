import React, { ReactNode, useState, useMemo,useCallback } from 'react';
import { Button, Modal, ModalProps } from 'antd';
import { createStyles, makeStyles } from '@material-ui/core';
import MYmodel from '../../components/MYmodel/index'
// @ts-ignore
import ReactEcharts from 'echarts-for-react'
import UseRequest from  '../useRequest'
const useStyle = makeStyles(
  createStyles({
    antModel: {
      '& .ant-modal-content': {
        border: 'none !importan',
        position: 'fixed !important',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      '& .ant-modal-footer': {
        display: 'none'
      }
    },
    antModalX: {
      width: '1800px !important',
      '& .ant-modal': {},
      '& .ant-modal-body': {
        padding: '32px 32px 24px',
        minHeight: '500px',
        overflow: 'auto'
      },
      '& .ant-modal-content, & .ant-modal-body': {
        overflow: 'hidden'
      },
      '& .ant-modal-content, & .ant-modal-header': {
        backgroundColor: '#2E3238'
      },
      '& .ant-modal-title, & .ant-modal-close-x': {
        fontWeight: 'bold'
      },
      '& .ant-modal-confirm-body-wrapper, & .ant-modal-confirm-body .ant-modal-confirm-title': {},
      '& .ant-modal-footer': {
        borderTopColor: 'rgba(226,242,251,0.1)'
      },
      '& .ant-modal-header': {
        borderBottomColor: 'rgba(226,242,251,0.1)'
      },
      '& *::-webkit-scrollbar': {
        display: 'block !important',
        width: '10px',
        height: '10px'
      },
      '& *::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(157,157,157,0.8)',
        borderRadius: '2em'
      },
      '& .ant-table': {
        '& .ant-table-thead': {
          '& > tr > th.ant-table-cell': {
            textAlign: 'center !important',
            border: '1px solid #3D434A !important'
          }
        }
      }
    },

    echarts: {
      width: '100%',
      '& .echarts-content': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '60px',
        '& .echarts-bar': {
          width: '90%',
          backgroundColor: '#fff'
        }
      },
      '& .echarts-button': {
        '& .ant-btn': {
          color: '#000',
          padding: '0 30px',
          margin: '0 30px 30px 0',
          border: '1px solid rgba(255,255,255,0.5) !important'
        },
        '& .ant-btn:hover': {
          color: '#000 !important',
          backgroundColor: 'rgb(255,255,255) !important',
          border: '1px solid rgba(255,255,255,0.5) !important'
        }
      }
    }
  })
);
type Props = {
  children: ReactNode;
  className: string;
} & ModalProps;

const MyComponent: React.FC<Props> = ({ children, className, ...ages }) => {
    const [open,SetOpen] = useState(false);
    const [xz,setXz] = useState(true)
    const cls = useStyle()

       const chartOpts = useMemo(() => {
         return {
           xAxis: {
             data: [1, 2, 3, 4, 5, 6]
           },
           yAxis: { type: 'value', name: '数值', minInterval: 1 },
           tooltip: {
             trigger: 'axis',
             axisPointer: {
               type: 'shadow'
             }
           },
           legend: {
             show: true,
             left: 'right',
             top: 30,
             selectedMode: false,
             textStyle: {
               fontSize: 16 // 设置 tooltip 文字大小为 16px
             },

             //    selectedMode: false,
             data: [
               {
                 name: '报警总数',
                 itemStyle: {
                   color: '#ea9425'
                 },

                 textStyle: {
                   color: '#000'
                 }
               },
               {
                 name: '红色报警',
                 itemStyle: {
                   color: 'red'
                 },
                 textStyle: {
                   color: '#000'
                 }
               },

               {
                 name: '黄色报警',
                 itemStyle: {
                   color: '#e9e90c'
                 },
                 textStyle: {
                   color: '#000'
                 }
               }
             ]
           },

           grid: {
             top: 120
           },

           series: [
             // 报警总数
             {
               data: [12, 12, 14, 1, 1, 1],
               name: '报警总数',
               type: 'bar',
               color: '#ea9425',
               barWidth: 30, // 设置柱状图宽度
               barGap: '10%', // 柱子与柱子之间的距离
               label: {
                 show: true,
                 formatter: '{c}',
                 position: 'top'
               }
             },

             {
               name: '已关闭',
               data: [12, 12, 14, 1, 1, 1],
               type: 'bar',
               stack: 'red',
               color: 'red',
               barWidth: 30, // 设置柱状图宽度
               barGap: '10%', // 柱子与柱子之间的距离
               label: {
                 color: '#000',
                 show: false,
                 position: 'inside',
                 formatter: function (params: any) {
                   if (params.value) {
                     return '已关闭\n' + params.value;
                   }
                   return '';
                 }
               }
             },
             {
               data: [12, 12, 14, 1, 1, 1],
               name: '未关闭',
               type: 'bar',
               barWidth: 30, // 设置柱状图宽度
               barGap: '10%', // 柱子与柱子之间的距离
               stack: 'red',
               color: 'red',
               label: {
                 color: '#000',
                 show: false,
                 position: 'inside',
                 formatter: function (params: any) {
                   if (params.value) {
                     return '未关闭\n' + params.value;
                   }
                   return '';
                 }
               }
             },
             {
               name: '红色报警',
               data: [12, 12, 14, 1, 1, 1],
               type: 'bar',
               stack: 'red',
               barWidth: 30, // 设置柱状图宽度
               barGap: '10%', // 柱子与柱子之间的距离
               color: 'red',
               label: {
                 color: '#000',
                 show: true,
                 position: 'insideBottom',
                 formatter: function (params: any) {
                   return params.value;
                 }
               },
               itemStyle: {
                 normal: {
                   color: 'rgba(128, 128, 128, 0)' // 柱状图颜色设为透明
                 }
               }
             },

             {
               data: [12, 12, 14, 1, 1, 1],
               name: '已关闭',
               type: 'bar',
               stack: 'yellow',
               barWidth: 30, // 设置柱状图宽度
               barGap: '10%', // 柱子与柱子之间的距离
               color: '#f4f403',
               label: {
                 color: '#000',
                 show: false,
                 position: 'inside',
                 formatter: function (params: any) {
                   if (params.value) {
                     return '未关闭\n' + params.value;
                   }
                   return '';
                 }
               }
             },
             {
               data: [12, 12, 14, 1, 1, 1],
               name: '未关闭',
               type: 'bar',
               stack: 'yellow',
               color: '#f4f403',
               barWidth: 30, // 设置柱状图宽度
               barGap: '10%', // 柱子与柱子之间的距离
               label: {
                 show: false,
                 color: '#000',
                 position: 'inside',
                 formatter: function (params: any) {
                   if (params.value) {
                     return '未关闭\n' + params.value;
                   }
                   return '';
                 }
               }
             },
             {
               data: [12, 12, 14, 1, 1, 1],
               name: '黄色报警',
               type: 'bar',
               stack: 'yellow',
               color: '#f4f403',
               barWidth: 30, // 设置柱状图宽度
               barGap: '10%', // 柱子与柱子之间的距离
               label: {
                 color: '#000',
                 show: true,
                 position: 'insideBottom',
                 formatter: function (params: any) {
                   return params.value;
                 }
               },
               itemStyle: {
                 normal: {
                   color: 'rgba(128, 128, 128, 0)' // 柱状图颜色设为透明
                 }
               }
             }
           ]
         };
       }, [xz]);
         const chartOpts1 = useMemo(() => {
           return {
             tooltip: {
               trigger: 'axis',
               axisPointer: {
                 type: 'shadow'
               }
             },
             //  xAxis: {
             //      data: olt,

             //      axisLabel: {
             //          interval: "auto", // 或 interval: 0
             //      },
             //  },
             xAxis: {
               type: 'category',
               data: [12, 12, 12, 12]
               //  axisLabel: {
               //      interval: 0, //代表显示所有x轴标签显示
               //  },
             },
             legend: {
               show: true,
               left: 'right',
               top: 30,
               selectedMode: false,
               textStyle: {
                 fontSize: 16 // 设置 tooltip 文字大小为 16px
               },
               data: [
                 {
                   name: '高级报警',
                   itemStyle: {
                     color: '#8cbe3f'
                   },
                   textStyle: {
                     color: '#000'
                   }
                 },
                 {
                   name: '中级报警',
                   itemStyle: {
                     color: '#bf7ffb'
                   },
                   textStyle: {
                     color: '#000'
                   }
                 },

                 {
                   name: '初级报警',
                   itemStyle: {
                     color: '#39fafa'
                   },
                   textStyle: {
                     color: '#000'
                   }
                 },
                 {
                   name: '时间报警',
                   itemStyle: {
                     color: '#ffff38'
                   },
                   textStyle: {
                     color: '#000'
                   }
                 }
               ]
             },
             axisLabel: {
               interval: 0, //代表显示所有x轴标签显示
               rotate: 45 //代表逆时针旋转45度
             },

             grid: {
               top: 120
             },

             yAxis: { type: 'value', name: '数值', minInterval: 1 },
             series: [
               {
                 name: '已处置',
                 data: [12, 12, 12, 12],
                 type: 'bar',
                 stack: 'one',
                 color: '#70b603',
                 barWidth: 30, // 设置柱状图宽度

                 label: {
                   show: false,
                   formatter: function (params: { value: string }) {
                     if (params.value) {
                       return '已处置\n' + params.value;
                     }
                     return '';
                   }
                 }
               },
               {
                 data: [12, 12, 12, 12],
                 name: '未处置',
                 type: 'bar',
                 barWidth: 30, // 设置柱状图宽度

                 stack: 'one',
                 color: '#70b603',
                 label: {
                   show: false,
                   formatter: function (params: { value: string }) {
                     if (params.value) {
                       return '未处置\n' + params.value;
                     }
                     return '';
                   }
                 }
               },
               {
                 data: [12, 12, 12, 12],
                 name: '高级报警',
                 type: 'bar',
                 stack: 'one',
                 color: '#70b603',
                 barWidth: 30, // 设置柱状图宽度
                 label: {
                   color: '#000',
                   show: true,
                   position: 'insideBottom',
                   formatter: function (params: { value: string }) {
                     if (params.value) {
                       return '\n' + params.value;
                     }
                     return '';
                   }
                 },
                 itemStyle: {
                   normal: {
                     color: 'rgba(128, 128, 128, 0)' // 柱状图颜色设为透明
                   }
                 }
               },

               {
                 name: '已处置',
                 data: [12, 12, 12, 12],
                 type: 'bar',
                 stack: 'two',
                 color: '#c280ff',
                 barWidth: 30, // 设置柱状图宽度

                 label: {
                   show: false,
                   formatter: function (params: { value: string }) {
                     if (params.value) {
                       return '已处置\n' + params.value;
                     }
                     return '';
                   }
                 }
               },
               {
                 data: [12, 12, 12, 12],
                 name: '未处置',
                 type: 'bar',
                 barWidth: 30, // 设置柱状图宽度

                 stack: 'two',
                 color: '#c280ff',
                 label: {
                   show: false,

                   formatter: function (params: { value: string }) {
                     if (params.value) {
                       return '未处置\n' + params.value;
                     }
                     return '';
                   }
                 }
               },
               {
                 data: [12, 12, 12, 12],
                 name: '中级报警',
                 type: 'bar',
                 barWidth: 30, // 设置柱状图宽度

                 stack: 'two',
                 color: '#c280ff',
                 label: {
                   color: '#000',
                   show: true,
                   position: 'insideBottom',
                   formatter: function (params: { value: string }) {
                     if (params.value) {
                       return '\n' + params.value;
                     }
                     return '';
                   }
                 },
                 itemStyle: {
                   normal: {
                     color: 'rgba(128, 128, 128, 0)' // 柱状图颜色设为透明
                   }
                 }
               },

               {
                 name: '已处置',
                 data: [12, 12, 12, 12],
                 type: 'bar',
                 stack: 'three',
                 color: '#0cffff',
                 barWidth: 30, // 设置柱状图宽度

                 label: {
                   show: false,
                   formatter: function (params: { value: string }) {
                     if (params.value) {
                       return '已处置\n' + params.value;
                     }
                     return '';
                   }
                 }
               },
               {
                 data: [12, 12, 12, 12],
                 name: '未处置',
                 type: 'bar',
                 barWidth: 30, // 设置柱状图宽度

                 stack: 'three',
                 color: '#0cffff',
                 label: {
                   show: false,

                   formatter: function (params: { value: string }) {
                     if (params.value) {
                       return '未处置\n' + params.value;
                     }
                     return '';
                   }
                 }
               },
               {
                 data: [12, 12, 12, 12],
                 name: '初级报警',
                 type: 'bar',
                 stack: 'three',
                 color: '#0cffff',
                 barWidth: 30, // 设置柱状图宽度

                 label: {
                   color: '#000',
                   show: true,
                   position: 'insideBottom',
                   formatter: function (params: { value: string }) {
                     if (params.value) {
                       return '\n' + params.value;
                     }
                     return '';
                   }
                 },
                 itemStyle: {
                   normal: {
                     color: 'rgba(128, 128, 128, 0)' // 柱状图颜色设为透明
                   }
                 }
               },
               {
                 data: [12, 12, 12, 12],
                 name: '时间报警',
                 type: 'bar',
                 barWidth: 30, // 设置柱状图宽度
                 color: '#ffff38',
                 label: {
                   color: '#000',
                   show: true,
                   position: 'top',
                   formatter: function (params: { value: any }) {
                     if (params.value) {
                       return params.value;
                       //  return "未处置\n" + params.value;
                     }
                     return '';
                   }
                 }
               }
             ]
           };
         }, [xz]);
    const fnReactEcharts = useCallback(
      (value: any) => {
        return <ReactEcharts option={value} style={{ height: 600 }} className="echarts-bar" />;
      },
      [xz]
    );

  return (
    <>
      <Button
        onClick={() => {
          SetOpen(true);
        }}
      >
        点击进入
      </Button>
      <UseRequest></UseRequest>
      <MYmodel
        footer={null}
        className={cls.antModalX}
        open={open}
        onCancel={() => {
          SetOpen(false);
        }}
      >
        {/* setXz((val)=>{
            return  val ? false : true
          }) */}
        <button
          onClick={() => {
            setXz((val) => {
              return val ? false : true;
            });
          }}
        >
          点击切换数据
        </button>
        <div className={cls.echarts}>
          <div className="echarts-content">{fnReactEcharts(xz ? chartOpts : chartOpts1)}</div>
        </div>
      </MYmodel>
    </>
  ); 
};

export default MyComponent;
