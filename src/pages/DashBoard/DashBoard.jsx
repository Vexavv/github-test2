import * as React from 'react';
import {Box, Container}  from '@mui/material';
import InputForm from "../../components/InputForm/InputForm";
import BoardContent from "../../components/BoardContent/BoardContent.jsx";

function DashBoard() {
    return (
        <Container maxWidth="xl">
            <Box sx={{width: '100%', backgroundColor: 'whitesmoke', borderRadius: '5px'}}>
                <InputForm/>
                <BoardContent/>
            </Box>
        </Container>

    );
}

export default DashBoard;