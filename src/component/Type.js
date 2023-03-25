import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


function Type(props) {
  return (
    <Card sx={{ maxWidth: 760 }}>
      <CardActionArea href={props.type}>
        <CardMedia
          component="img"
          height="681"
          image={props.image}
          alt={props.name}
        />
      </CardActionArea>
    </Card>
  );
}

export default Type;