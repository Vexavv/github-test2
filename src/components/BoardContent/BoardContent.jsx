import React from 'react';
import Box from '@mui/material/Box';
import ContentRow from "../ContentRow/ContentRow.jsx";
import {useSelector} from "react-redux";
import RowCard from "../ContentRow/RowCard/RowCard.jsx";
function BoardContent(props) {
    const {data} = useSelector(state => state.main)
    const todoData = data.filter(card => card.state === 'open');
    const inProgressData = data.filter(card => card.assignee !== null);
    const doneData = data.filter(card => card.state === 'closed');
    return (
        <Box component="div"
             sx={{border: '1px solid black', borderRadius: '5px', display: 'flex', justifyContent: 'space-around', width:'100%'}}>
            <ContentRow text='ToDo'>
                {todoData.map(card => (
                    <RowCard key={card.id} data={card.created_at}  title={card.title} number={card.number} comments={card.comments}/>
                ))}
            </ContentRow>
            <ContentRow text='In Progress'>
                {inProgressData.map(card => (
                    <RowCard key={card.id} data={card.created_at} title={card.title} number={card.number} comments={card.comments}/>
                ))}
            </ContentRow>
            <ContentRow text='Done'>
                {doneData.map(card => (
                    <RowCard key={card.id} data={card.created_at} title={card.title} number={card.number} comments={card.comments}/>
                ))}
            </ContentRow>
        </Box>
    );
}

export default BoardContent;