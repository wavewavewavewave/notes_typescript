import React from 'react';
import {Box, Grid} from "@mui/material";
import {SearchContainer} from "./components/Search";
import {root} from "./styles/AppStyle";
import {ControlButtonContainer} from "./components/ControlButtonContainer";
import {AddNoteButton} from "./components/AddNoteButton";

function App() {

    return (
        <Box sx={root}>
            <Grid container spacing={3} direction="column" className="notes">
                <Grid item xs={12}>
                    <SearchContainer/>
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item sm={9} xs={12} container>
                    <ControlButtonContainer/>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <AddNoteButton />
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
