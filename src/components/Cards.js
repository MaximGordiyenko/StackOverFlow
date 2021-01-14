import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Grid, Link, Typography } from '@material-ui/core';
import { cardsStyles, gridStyle } from "../material-ui-style";
import { Assessment, PermContactCalendar, QuestionAnswer } from '@material-ui/icons';

const Cards = ({ item }) => {
  const grid = gridStyle();
  const cards = cardsStyles();
  return (
    <div className={grid.root}>
      <Grid container spacing={3} direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={12}>
          <Card className={cards.root}>
            <div className={cards.details}>
              <CardContent className={cards.content}>
                <Link href={item.link} target="_blank" rel="noreferrer">
                  <Typography className={cards.title}
                              color="textSecondary"
                              variant="h5"
                              gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography component="span"
                              variant="subtitle1">
                    <PermContactCalendar/>
                    <b>Name: </b>
                    {item.owner.display_name}
                    <Assessment/>
                  </Typography>
                  <Typography component="span" variant="subtitle1"
                              color="textSecondary"><b>Reputation: </b>{item.owner.reputation}</Typography>
                  
                  <div>{item.tags.map((tag, idx) => (
                    <span key={idx} className={cards.subcontent}>
                      <QuestionAnswer/>
                        {tag}
                      </span>
                  ))}
                  </div>
                </Link>
              </CardContent>
            </div>
            <CardMedia
              className={cards.cover}
              image={item.owner.profile_image} alt={item.owner.profile_image}
              title={item.title}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
