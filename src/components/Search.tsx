import React from 'react'
import {FormControl, InputBase} from "@mui/material";
import {Search} from "@mui/icons-material";
import {formControl, searchIcon, searchInput} from "../styles/SearchInputStyle";

export const SearchContainer = () => {
    return (
        <FormControl sx={formControl}>
            <Search sx={searchIcon}/>
            <InputBase
                placeholder="Search notes…"
                sx={searchInput}
            />
        </FormControl>
    )
}