import { createStyles, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(createStyles({
    antTalbe: {


        '& .ant-table': {
            background: ' rgba(0, 0, 0, 0)  !important;',
            borderRadius: '  0  !important;',
            backgroundColor: "transparent",
            color: "white",
            "& *::-webkit-scrollbar": {
                display: "block !important",
                width: "10px",
                height: "10px",
            },
            "& *::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(157,157,157,0.8)",
                borderRadius: "2em",
            },

            '& .ant-table-tbody .ant-table-row:hover > td.ant-table-cell': {
                backgroundColor: '#00D5FF !important',

            },

            '& thead.ant-table-thead': {
                borderColor: '#1e2120 !important'
            },
            "& th.ant-table-cell::before": {
                width: '0 !important;',
            },
            '& .ant-table-thead th.ant-table-cell': {
                backgroundColor: '#1e2120 !important;',
                borderRadius: '0px !important;',
                'border-bottom': 'none !important',
                color: '#fff'
            },
            '& .ant-table-row td.ant-table-cell': {
                'border-bottom': 'none !important',
            },

        },
        '& .ant-table-wrapper .ant-table-thead >tr>th ': {
            'border-bottom': 'none !important',
            fontSize: 12,
        },

        '& .ant-table-wrapper table': {
            borderRadius: '0 !important'
        },
       // 分页
        "& .ant-pagination": {       
        "& .ant-pagination-next,.ant-pagination-prev": {
            borderRadius: 4,
            backgroundColor: 'rgba(226,242,251,0.1)',
            "&:hover .ant-pagination-item-link": {
                borderColor: "transparent",
                color: "white",
            },
        },
        "& .ant-pagination-item-link": {
            borderColor: "transparent",
            backgroundColor: "transparent",
            color: "white",
        },
        "& .ant-pagination-item": {
            borderColor: "transparent",
            borderRadius: 4,
            backgroundColor: 'rgba(226,242,251,0.1)',
            "& a": {
                color: "white",
            },
        },
        "& .ant-pagination-item-ellipsis": {
            color: "white",
        },
        "& .ant-pagination-jump-next": {
            color: "white",
        },
        "& .ant-pagination-item-active": {
            backgroundColor: "rgba(0, 213, 255, 0.2)",
            border: "1px solid #00D5FF",
            color: "#00D5FF"
        },
        "& .ant-pagination-item-ellipsis,& .ant-pagination-item-ellipsis": {
            color: "white !important",
        },
        "& .anticon-double-left.ant-pagination-item-link-icon, & .anticon-double-right.ant-pagination-item-link-icon": {
            color: "white !important",
            }
        
        },
        "& .ant-table-thead": {
            "& .ant-table-cell": {
                backgroundColor: "rgba(17, 22, 29, 0.7)",
                fontSize: 12,
                lineHeight: "18px",
                color: "white",
                fontWeight: "bold",
                border: "none",
            },
            "& .ant-table-cell-scrollbar": {
                display: "none",
            },
            "& > tr > th": {
                padding: "14px 12px "
            }
        },
        "& .ant-table-tbody": {
            "& .ant-table-cell": {
                border: "none",
                fontSize: 14,
            },
            "& > tr.ant-table-row:hover > td": {
                backgroundColor: "rgba(0, 213, 255, 0.1)",
            },
            "& > tr.ant-table-row-selected > td": {
                backgroundColor: "transparent",
            },
            "& .ant-table-row-selected": {
                backgroundColor: "transparent",
            },
            "& > tr.ant-table-row > td": {
                padding: "14px 8px",
                lineHeight: "20px !important"
            },
            "& .ant-table-placeholder": {
                color: "white !important",
            },
            "& > tr.ant-table-placeholder:hover > td": {
                backgroundColor: "transparent",
            }
        },
        
    },
      // 隔行换色
      tableItemBg: {
        "& td": {
            backgroundColor: "rgba(255,255,255,0.1)",
        }
    },
      
  

}))

export default useStyle