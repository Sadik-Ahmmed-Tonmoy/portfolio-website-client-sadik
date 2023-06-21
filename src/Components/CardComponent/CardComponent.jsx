import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const CardComponent = ({image, title, details, pathName}) => {
  return (
    <Card className='p-4' sx={{ borderRadius: '16px' }} >
    <img className='px-4 -rotate-12' src={image} alt="image" />
    <CardContent align="left">
      <p className='font-bold text-2xl '>{title}</p>
      <Typography align="left" variant="body2" color="text.secondary">
       {details}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={pathName}><Button size="small" >Share</Button></Link>
    </CardActions>
  </Card>
  );
};

export default CardComponent;