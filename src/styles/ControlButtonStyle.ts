import {styled} from "@mui/material";

export const Root = styled(`div`)(
    ({theme}) => `
    '& > *': {
            marginRight: ${theme.spacing(2)}
        }
    `
);
export const button = {
    minWidth: '89px',
    position: 'relative',
    fontWeight: 400,
    textTransform: 'none',
    '&.MuiButton-contained': {
        color: '#fff'
    }
};
export const Indicator = styled(`span`)(
    ({theme}) => `
    position: 'absolute',
    bottom: '-.4em',
    fontSize: '2em',
    lineHeight: 1,
    color: 'green'
    `
);





