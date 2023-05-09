import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardRe(props) {
    const {onShare, learnMore, cardTitle, cardDesc} = {...props};

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://mui.com/static/images/cards/paella.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {cardTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{textAlign: 'left'}}>
                  {cardDesc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onShare}>Share</Button>
                <Button size="small" onClick={learnMore}>Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default CardRe;
