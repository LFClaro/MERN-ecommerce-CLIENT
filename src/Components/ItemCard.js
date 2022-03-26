import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating } from '@mui/material';

const ItemCard = ({ image, price, title, rate }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {/* <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            /> */}
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="item image"
            />
            <CardContent>
                <Typography>${price}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Rating name="half-rating" defaultValue={rate} precision={0.5} size='small' readOnly />
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ItemCard