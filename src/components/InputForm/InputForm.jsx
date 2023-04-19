import * as React from 'react';
import {Box,TextField,Button } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {changeValue, fetchAsyncMain} from "../../store/slices/mainSlice.js";

function InputForm() {
    const dispatch = useDispatch()
    const {inputValue, data} = useSelector(state => state.main)
    const handleSubmit = (event) => {
        event.preventDefault();
        const regex = /github.com\/([^/]+)\/([^/]+)/;
        const match = inputValue.match(regex);

        if (match) {
            const [, userName, userRepo] = match;
            console.log('Username:', userName);
            console.log('Repository:', userRepo);

            dispatch(fetchAsyncMain({userName, userRepo}));
        } else {
            alert('Enter the repository whose issues you want to see!');
        }
    };
    console.log(data)
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                m: 2,
                display: 'flex',
                justifyContent: 'space-between'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                sx={{width: '80%'}}
                id="outlined-controlled"
                size="small"
                label="Enter repo URL"
                value={inputValue}
                onChange={(event) => {
                    dispatch(changeValue({inputValue: event.target.value}));
                }}
            />
            <Button sx={{width: '15%'}} variant="contained" size="small" type="submit">Load Issues</Button>
        </Box>
    );
}

export default InputForm;