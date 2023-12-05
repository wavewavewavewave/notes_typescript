import React from 'react';
import {Box, Grid} from "@mui/material";
import {SearchContainer} from "./components/Search";
import {root} from "./styles/AppStyle";

function App() {

    return (
        <Box sx={root}>
            <Grid container spacing={3} direction="column" className="notes">
                <Grid item xs={12}>
                    <SearchContainer/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
