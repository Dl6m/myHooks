import { createStyles, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(
  createStyles({
    titleList: {
      flex: 1,
      textAlign: 'center',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    modal: {
      '& .ant-modal': {
        transform: 'scale(0) !important;'
        // background: 'red !important;'
      },

      '& .ant-modal-content': {
        position: 'fixed !important',
        top: '0 !important',
        left: '0 !important',
        width: '100% !important',
        height: '100% !important',
        backgroundColor: '#2E3238 !important',
        right: '0;',
        bottom: ' 0;',
        borderRadius: '0 !important',
        transition: ' all 5s ;',
        Zindex: ' 9999;'
        /* 设置动画的中心点为元素的正中心上方 */
        // transformOrigin: 'center top;',
        /* 初始时元素缩放比例为 0，即不可见 */
        // transform: 'scale(1);',
      },
      '& .ant-modal-content ': {
        transform: ' scale(1);',
        transition: 'all 0.3s ease;'
      },

      '& .ant-modal-content.ant-modal-content-enter ': {
        transform: 'scale(1);'
      },

      '& .ant-modal-content.ant-modal-content-leave ': {
        transform: 'scale(0.1);'
      },
      //   s
      //  设置背景色标题
      '& .ant-modal-header': {
        background: '#2E3238',
        border: 'none',
        // borderBottom: "1px solid #E2F2FB33",
        '& .ant-modal-title': {
          color: 'white',
          fontSize: '20px',
          textAlign: 'center'
        }
      }
    },
    myModalAniEnter: {
      transform: 'scale(0)',
      opacity: 0
    },
    myModalAniEnterActive: {
      transform: 'scale(1)',
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    myModalAniLeave: {
      transform: 'scale(1)',
      opacity: 0
    },
    myModalAniLeaveActive: {
      transform: 'scale(0)',
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    myModalMaskAniEnter: {
      opacity: 0
    },
    myModalMaskAniEnterActive: {
      opacity: 1,
      transition: 'all 0.3s ease'
    },
    myModalMaskAniLeave: {
      opacity: 1
    },
    myModalMaskAniLeaveActive: {
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    //表格
    antdTables: {
      '& .ant-table': {
        '& .ant-table-thead': {
          '& > tr > th.ant-table-cell': {
            border: '1px solid #3D434A !important'
          }
        }
      }
    },
    //动画
    dh: {
      '& .ant-table-tbody': {
        animation: '$moveScroll 15s linear infinite'
      }
    },
    '@keyframes moveScroll': {
      '0%': {
        transform: 'translateY(0%)'
      },
      /* '20%':{
           transform: 'translateY(-100%)',
        } */
      to: {
        transform: 'translateY(-65%)'
      }
    },

    //    //   console.log('object :~~~~~~~~~~~~~~~~~~~````>> ', object);~~~~~~~~~~~~~~~~~~~````
    //    modalContent: {
    //     transformOrigin: 'center top',
    //     transform: 'scale(0)',
    //   },
    //   modalContentEnter: {
    //     animation: '$modalOpenAni .3s forwards',
    //   },
    //   '@keyframes modalOpenAni': {
    //     to: {
    //       transform: 'scale(1)',
    //     },
    //   },
    //   modalWrap: {
    //     position: 'fixed',
    //     top: 0,
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     zIndex: 9999,
    //   },
    root: {
      '&::-webkit-scrollbar': {
        width: '0.4em'
      },
      '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'none',
        backgroundColor: 'transparent'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'transparent'
      }
    }
  })
);

export default useStyle;
