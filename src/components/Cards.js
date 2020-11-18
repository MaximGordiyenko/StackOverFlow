import React from 'react';
import { Card, CardContent, CardMedia, Grid, Link, Typography } from '@material-ui/core';
import { cardsStyles, gridStyle } from "../material-ui-style";

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
                  <Typography className={cards.title} color="textSecondary" gutterBottom>{item.title}</Typography>
                  <Typography component="h5" variant="subtitle1">{item.owner.display_name}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">{item.owner.reputation}</Typography>
                  <div>{item.tags.map((tag, idx) => (
                    <span key={idx} className={cards.subcontent}>
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
