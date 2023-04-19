import React from 'react';
import {Box, Typography} from '@mui/material';
function ContentRow(props) {
    return (
        <Box component="div">
            <Typography variant="h6" sx={{textAlign:'center'}}>
                {props.text}
            </Typography>
            <Box component="div" sx={{
                border: '1px solid black',
                borderRadius: '5px',
                backgroundColor: 'grey',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                m: 1,
                p:3,
                width: '300px',
                minHeight: '500px',
            }}>
                {props.children}
            </Box>

        </Box>

    );
}

export default ContentRow;