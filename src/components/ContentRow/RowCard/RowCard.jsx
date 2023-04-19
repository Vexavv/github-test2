import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function RowCard(props) {
    const updatedDate = new Date(props.data);
    const currentDate = new Date();
    const timeDifference = currentDate - updatedDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return (
        <Card sx={{marginTop: '10px', p:2}}>
            <CardContent>
                <Typography variant="h6" component="h6">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                   # {props.number}
                </Typography>
                <Typography variant="body2" component="p">
                    Opened {daysDifference === 0 ? 'Today' : `${daysDifference} days ago`}
                </Typography>
                <Typography variant="body2" component="p">
                    Admin | Comments: {props.comments}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default RowCard;