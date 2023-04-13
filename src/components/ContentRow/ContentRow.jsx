import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function ContentRow({text,childComponent}) {
    return (
        <Box component="div">
            <Typography variant="h6" sx={{textAlign:'center'}}>
                {text}
            </Typography>
            <Box component="div" sx={{
                border: '1px solid black',
                borderRadius: '5px',
                backgroundColor: 'grey',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                height: '300px',
                width: '200px',
                m: 1
            }}>
                {childComponent}
            </Box>

        </Box>

    );
}

export default ContentRow;