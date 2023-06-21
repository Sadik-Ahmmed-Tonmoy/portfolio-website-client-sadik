import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";

const CardComponent = ({ lottie, title, details, pathName }) => {
  return (
    <Card className='transform transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105' sx={{ borderRadius: '16px' }} >
      <div>
        <Lottie className='md:w-40 h-56 md:h-full mx-auto' animationData={lottie} loop={true} />
      </div>
      <CardContent className='flex justify-between' align="left">
        <div>
          <p className='font-bold text-2xl ms-4'>{title}</p>
          <p className='ms-4 opacity-40'>{details}</p>
        </div>
        <div>
          <Link className='' to={pathName}><Button size="small" >Details</Button></Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;