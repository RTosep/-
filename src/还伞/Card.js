import React from 'react';
import Card from '@material-ui/core/Card';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Grid , CardMedia, Typography, Box, makeStyles, IconButton, Button } from '@material-ui/core';


const useStyles = makeStyles({
  TypographyText: {
    display:"flex",
    flex:1,
    justifyContent:"center",
    marginTop:"7px"
  },
  img:{
    marginTop:"10px"
  },
  button:{
    marginTop:"15px"
  }
})
const SimpleCard = props => {
  const classes = useStyles()
  const { imageUrl } = props
  return (
    <>
        <Box  className={classes.root}>
            <Typography className={classes.TypographyText} color="primary">
              伞号：001
              &nbsp;&nbsp;&nbsp;
              正在借用
            </Typography>
            <Typography className={classes.TypographyText} color="secondary">
              <ScheduleIcon size="small" color="secondary" />
              借用时长：3小时32分
            </Typography>
        </Box>
      <Card className={classes.img}>
        <CardMedia
        style={{height:"220px"}}
        image={imageUrl}
        />
      </Card>
      <Box className={classes.TypographyText}>
        <Button  color="primary" variant="outlined" className={classes.button} > 
          我要还伞&nbsp;&nbsp;&nbsp;
          <CheckCircleOutlineIcon />
        </Button>
      </Box>
    </>
  );
}
export default SimpleCard