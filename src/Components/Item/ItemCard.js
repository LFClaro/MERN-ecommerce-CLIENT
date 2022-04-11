import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActionArea, Rating } from '@mui/material';
import { Link } from "react-router-dom";

const ItemCard = ({ image, price, title, rate, date }) => {
    // let url = `/cart/` + props.post._id;
    return (
        <Card sx={{ maxWidth: 260, border: "1px solid #fbc01c" }} >

            {/* to the item details page */}
            {/* <Link to={url} className="text-light">View Post</Link> */}
            <CardActionArea component={Link} to="/" disableRipple>
                <CardMedia component="img" height="194" image={image} alt="item image" style={{ padding: 4 }} />
                <CardContent>
                    <Typography>${price}</Typography>
                    <Typography variant="body">  {title}  </Typography>
                    <br />
                    {/* ############change it to get the time unit changes */}
                    <Typography variant="caption" color="text.secondary">
                        Posted {Math.round((Date.now() - new Date(date).getTime()) / (8.64E7))} day(s) ago
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Rating name="half-rating" defaultValue={rate} precision={0.5} size='small' readOnly />
                <IconButton aria-label="add to favorites">  <FavoriteIcon />  </IconButton>
            </CardActions>
        </Card>
    )
}

export default ItemCard