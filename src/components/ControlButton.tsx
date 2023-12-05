import {Button} from "@mui/material";
import {button, Indicator} from "../styles/ControlButtonStyle";

type ControlButtonType = {
    name: string;
    displayIndicator?: boolean;
}
export const ControlButton = ({name}: ControlButtonType) => {
    return (
        <>
            <Button
                sx={button}
                variant={'contained'}
                style={{backgroundColor: 'black'}}
                disableElevation
            >
                <span>{name}</span>
                <Indicator style={{color: 'white'}}>•</Indicator>
            </Button>
        </>
    )
}