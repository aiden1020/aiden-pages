import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './Home.css'
const font_size ={
  xs: 16, 
  sm: 18, 
  md: 24, 
}
const AboutMe =()=>{
    return(
      <div className='page-container' style={{ display: 'flex', flexDirection: 'column' }}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ marginTop:'0px',
                fontFamily:'Roboto'
          }}
          >
            <Grid item xs={3}>
              <Stack direction={{ xs: 'column', sm: 'column',md: 'row'  }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Grid container spacing={2} alignItems={'center'} style={{ padding: '6%' }}>
                  <Grid item xs={12} md={12}>
                    <Typography fontSize={font_size} textAlign={'left'} style={{ marginBottom: '8%' }}>Hello there! I'm Wong Tsz To, Aiden, a passionate individual from Hong Kong currently studying at National Sun Yat-sen University (NSYSU) in Taiwan.</Typography>
                    <Typography   fontSize={font_size}textAlign={'left'} style={{ marginBottom: '8%' }}>I'm particularly enthusiastic about badminton and maintaining a healthy lifestyle through fitness activities. My interest also extends to exploring the intersection of technology and innovation, keeping up with the latest advancements that shape our rapidly evolving world.</Typography>
                    <Typography   fontSize={font_size} textAlign={'left'}style={{ marginBottom: '8%' }}>Explore my journey on this platform, where I share insights and experiences. If you share similar interests or have exciting opportunities to discuss, feel free to reach out. Let's connect and build something meaningful together!</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems={'center'} style={{ padding: '1%'}}>
                  <img className= 'person-image'src={process.env.PUBLIC_URL +"/IMG_2781.jpeg"} alt='Home Personal' />
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </div>
    );
}
export default AboutMe;