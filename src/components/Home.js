import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './Home.css'

const Home =()=>{
    return(
      <div className='page-container' style={{ display: 'flex', flexDirection: 'column' , zIndex: 1}}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop:'10px' ,paddingX:'5%'}}
          >
            <Grid item xs={3}>
              <Stack direction="row" spacing={2}>
                <Stack spacing={1} alignItems={'center'} style={{ marginTop: '12%' }}>
                  <Typography fontSize={48}><strong>I'm Aiden</strong></Typography>
                  <Typography fontSize={36} color={'gray'}><strong>Hongkongese, Undergraduate Computer Science and Engineering</strong></Typography>
                </Stack>
                <img className= 'person-image'src={process.env.PUBLIC_URL +"/img_home.png"} alt='Home Personal' />
              </Stack>
            </Grid>
          </Grid>
        </div>
    );
}
export default Home;