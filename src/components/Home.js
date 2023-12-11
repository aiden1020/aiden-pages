import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './Home.css'
import { Image } from 'react-native'
const Home =()=>{
    return(
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
        >
        <Grid item xs={3}>
        <Stack direction="row" spacing={2}>
          <Stack spacing={2} alignItems={'center'}>
            <Typography fontSize={48}><strong>I'm Aiden</strong></Typography>
            <Typography fontSize={36} color={'gray'}><strong>Hongkongese, Undergraduate</strong></Typography>
            <Typography  fontSize={36} color={'gray'}><strong>Computer Science and Engineering</strong></Typography>
          </Stack>
          <Image 
            source={process.env.PUBLIC_URL +"/image.png"} 
            style={{width: 400, height: 400, borderRadius: 400/ 2}} 
            />
        </Stack>
        </Grid>
        </Grid>
    );
}
export default Home;