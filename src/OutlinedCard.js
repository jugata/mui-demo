import React from 'react';
import { makeStyles, styled, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 22,
  }
}));



const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { color } = props

  const theme = useTheme()
  console.log(theme)
  return (

    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" variant="h6" gutterBottom>
          COLORS
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          color: {color.name}
        </Typography>
        <Typography variant="body2" component="p">
          hex:  {color.color}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Using Styled</Button>
        <Button size="small" color="primary">Not Styled</Button>
      </CardActions>
    </Card>
  );
}
