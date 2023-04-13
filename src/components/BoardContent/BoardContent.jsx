import React from 'react';
import Box from '@mui/material/Box';
import ContentRow from "../ContentRow/ContentRow.jsx";

function BoardContent(props) {
    return (
        <Box component="div"
             sx={{border: '1px solid black', borderRadius: '5px', display: 'flex', justifyContent: 'space-between'}}>
            <ContentRow text='ToDo'/>
            <ContentRow text='In Progress'/>
            <ContentRow text='Done'/>
        </Box>
    );
}

export default BoardContent;