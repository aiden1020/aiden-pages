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
            sx={{marginTop:{ xs: '5%', sm: '8%',md: '10%', lg:'5%'}, paddingX:{ xs: '15%', sm: '15%',md: '5%', lg:'15%'}}}
          >
            <Grid item xs={3}>
              <Stack direction={{ xs: 'column', sm: 'column',md: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Stack spacing={1} alignItems={'center'} style={{ marginTop: '20%' }}>
                  <Typography fontSize={{ xs: 36, sm: 40, md: 48 }}><strong>I'm Aiden</strong></Typography>
                  <Typography fontSize={{ xs: 24, sm: 30, md: 36 }} color={'gray'}><strong>Hongkongese, Undergraduate Computer Science and Engineering</strong></Typography>
                </Stack>
                <Grid container alignItems={'center'}  >
                  <img className= 'person-image'src={process.env.PUBLIC_URL +"/img_home.png"} alt='Home Personal' />
                </Grid  >

              </Stack>
            </Grid>
          </Grid>
        </div>
    );
}
export default Home;