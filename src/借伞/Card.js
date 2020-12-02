import React from 'react';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';

import { Avatar, CardHeader, IconButton, CardMedia } from '@material-ui/core';



const SimpleCard = props => {
  const { avatarUrl, title, subtitle, imageUrl } = props
  return (
    <Card>
        <CardHeader
        avatar={
          <Avatar src={avatarUrl} />
        }
        action={
          <IconButton aria-label="settings">

            <AspectRatioIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
       style={{height:"250px"}}
       image={imageUrl}
      />
      <CardActions>
        <Button size="small" color="primary">即时预订</Button>
        <Button size="small" color="primary">伞况上报</Button>
      </CardActions>
    </Card>
  );
}
export default SimpleCard