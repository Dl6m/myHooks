import { createStyles, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(createStyles({
    root: {
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'none',
          backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'transparent',
        },
    },
  
    // 'tbody.ant-table-tbody': {
    //     backgroundColor: 'red',
    //     animation: '$identifier 100s linear 1s infinite normal forwards',
    //   },
    //   '@keyframes identifier': {
    //     '0%': {
    //       transform: 'translateY(0)',
    //     },
    //     '80%': {
    //       transform: 'translateY(-50%)',
    //     },
    //   },
  })

)

export default useStyle