import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
  {
    src: 'https://images.unsplash.com/photo-1586790167861-6e87cdff91b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    title: 'Rutina Abdominales con pesa …',
    channel: 'Erica Klpaton',
    views: '396 k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Desplantes con pesa',
    channel: 'Queen Sport',
    views: '40 M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://images.unsplash.com/photo-1609899464726-209befaac5bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    title: 'Michelle Aaron',
    channel: 'mich sport',
    views: '130 M views',
    createdAt: '10 months ago',
  },
  {
    src: 'https://images.unsplash.com/photo-1548933122-5fedf3661c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Ejercicios de Pecho',
    channel: 'Carl Harris',
    views: '130 M views',
    createdAt: '10 months ago',
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(0)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 6 }}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
      <Media />
    </Box>
  );
}
