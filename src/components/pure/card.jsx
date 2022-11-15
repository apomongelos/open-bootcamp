import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const baseURL = 'https://api.chucknorris.io/jokes/random';

const CardContainer = () => {

    const [joke, setJoke] = useState(null);
    const [positiveCount, setPositiveCount] = useState(0);
    const [negativeCount, setNegativeCount] = useState(0);

    const getJoke = () => {
        axios
            .get(`${baseURL}`)
            .then((response) => {
                if (response.status === 200) {
                    setJoke(response.data);
                }
                // console.log(response);
            })
            .catch((error) => {
                console.log(`Something went wrong: ${error}`);
            });
    };

    const onCount = (setCounter, counter) => {
        setCounter(counter + 1);
        getJoke();
    };

    return (
        <div>
            {joke ? (
                <Card>
                    <CardMedia
                        component="img"
                        height="194"
                        image="{joke.icon_url}"
                        alt="chuck norris jokes"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Chuck Norris Jokes
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                            {joke.value}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
                        <div sx={{ display: 'flex', flexDirection: 'column' }}>
                            <IconButton aria-label="like" onClick={() => onCount(setPositiveCount, positiveCount)}>
                                <ThumbUpIcon color="success" />
                            </IconButton>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {positiveCount}
                            </Typography>
                        </div>
                        <div sx={{ display: 'flex', flexDirection: 'column' }}>
                            <IconButton aria-label="dont like" onClick={() => onCount(setNegativeCount, negativeCount)}>
                                <ThumbDownIcon color="error" />
                            </IconButton>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {negativeCount}
                            </Typography>
                        </div>
                    </CardActions>
                </Card>
            ) : (
                <Button onClick={getJoke} variant="contained">Pedir Chiste</Button>
            )}
        </div>
    );
}

export default CardContainer;
