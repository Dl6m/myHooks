import { createStyles, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(createStyles({

    treeControlStyle: {
        '& .ant-select-selector': {
            backgroundColor:' #2f3238 !important;',
            border: '1px solid #3bc5f6 !important;',
            borderRadius:' 0px  !important;'
        },
        // "&.ant-select-focused:not(.ant-select-disabled) .ant-select-selector": {
        //     boxShadow: "none !important"
        // },
        // "& .ant-select-selector": {
        //     // border: "2px solid transparent !important",
        //     borderRadius: "0px !important",
        //     height: "40px !important",
        //     backgroundColor: "transparent !important",
        //     // padding: "0 15px !important"
        // },
        // "& .ant-select-selection-item": {
        //     fontWeight: 700,
        //     fontSize: 26,
        //     lineHeight: "36px !important",
        //     color: "#fff !important",
        //     paddingRight: "22px !important"
        //     // textShadow: "0px 0px 24px rgba(255, 255, 255, 0.58)"
        // },
        // "& .ant-select-arrow": {
        //     color: "#fff",
        //     width: 15,
        //     height: 15,
        //     transition: "all 0.5s",
        //     // right: 5
        // },
        // "& .ant-select-suffix": {
        //     fontSize: 15
        // },
        // "&.ant-select-open": {
        //     /* "& .ant-select-selector": {
        //         borderColor: "#00D5FF !important"
        //     }, */
        //     "& .ant-select-arrow": {
        //         color: "#00D5FF",
        //         transform: "rotate(180deg)"
        //     }
        // }

      
    }


}))

export default  useStyle
