import {Button} from "@mui/material";
import {AddIcCall} from "@mui/icons-material";

export const AddNoteButton = () => {
    return (
        <>
        <Button
            variant="contained"
            color={'primary'}
            startIcon={<AddIcCall />}
        >

        </Button>
        </>
    )
}