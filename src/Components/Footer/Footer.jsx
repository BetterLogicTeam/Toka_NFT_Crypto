import { Box, Button, Grid, ListItemText, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Input } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function Footer() {
  return (
    <Stack sx={{backgroundImage: "linear-gradient(50deg, rgb(9,18,40) 0%, rgb(9,19,38) 25%, rgb(19,28,33) 35%, rgb(20,29,33) 65%, rgb(7,13,25) 75%, rgb(20,29,33) 100%)"}}>
        <Grid container sx={{paddingTop: "90px",display: "flex",flexDirection:{xs:"column",md:"row"},textAlign:{xs: "center",md:"left"}}}>
            <Grid item xs={12} md={4} sx={{}}>
                <Typography variant='h4' sx={{fontWeight: "700", color: "white", marginLeft: "17px", marginBottom: "20px"}}>Toka</Typography>
                <Typography variant='h6' sx={{color: "white",fontSize: "15px",paddingRight:{xs:"10px",md:"70px"},paddingLeft: "20px", fontWeight: "500"}}>Reinventing the way of creating websites, we aim to create the most master-peaced WordPress theme available on the market.</Typography>
            </Grid>

            <Grid item xs={12} md={4}>
                <Typography variant='h6' sx={{color: "white", fontWeight: "600",marginBottom: "13px", fontSize: "14px"}}>CONTACT US</Typography>
                <Typography variant='h6' sx={{color: "white",marginBottom: "13px", fontSize: "16px"}}>202 Helga Springs Rd, Crawford, TN 38554</Typography>
                <Typography variant='h6' sx={{color: "white",marginBottom: "13px",fontWeight: "600", fontSize: "16px","&:hover":{color: "rgb(44,188,165)"}, cursor: "pointer"}}>Call Us: 800.275.8777</Typography>
                <Typography variant='h6' sx={{color: "white",marginBottom: "13px", fontSize: "16px","&:hover":{color: "rgb(44,188,165)"}, cursor: "pointer"}}>alex@company.com</Typography>
            </Grid>

            <Grid item xs={12} md={4}>
                <Typography variant='h6' sx={{color: "white", fontWeight: "600",marginBottom: "13px", fontSize: "14px"}}>SIGN UP FOR EMAIL UPDATES</Typography>
                <Input type='email' sx={{backgroundColor: "#1c222b",padding:{xs:"8px 8px",sm:"12px 25px",md:"8px 8px",lg:"12px 25px"},borderRadius: "20px"}}></Input><Button sx={{backgroundColor: "#36bb91",color: "white",padding:{xs:"10px 8px",sm:"15px 25px",md:"12px 11px",lg:"15px 25px"},borderRadius: "20px",marginLeft:{xs:"-15%",sm:"-4%",md:"-10%",lg:"-7%"},"&:hover":{backgroundColor: "#20BB96",color: "white"}}}>Subscribe</Button>
                <Typography variant='h6' sx={{color: "white",marginBottom: "13px", fontSize: "16px",marginTop: "20px",paddingX:"10px"}}>202 Helga Springs Rd, Crawford, TN 38554</Typography>
                </Grid>

                <Box sx={{width: "100%",marginTop: "60px"}}>
                <hr/>
                </Box>

        </Grid>

        <Grid container sx={{paddingY: "20px"}}>
          <Grid item xs={12} md={7} sx={{textAlign:{xs:"center",md:"left"}}}>
          <Typography variant='h6' sx={{color: "whitesmoke",fontSize: "15px",paddingLeft: {md:"20px"},paddingTop: "10px"}}>Copyright ©2022 Toka. All rights reserved.</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4.8} lg={4.8} sx={{textAlign:{xs:"center",md:"right"}}}>
              {/* <Box sx={{textAlign:"center"}}> */}
              <List sx={{marginRight: "",fontSize:{sm: "10px",md:"5px"},color: "white",display: "flex",flexDirection:{xs: "column",sm: "row"},justifyContent:"space-between",textAlign:"center"}}>
              <ListItemText>Home</ListItemText>
              <ListItemText >About Us</ListItemText>
              <ListItemText >Our Team</ListItemText>
              <ListItemText >Shop</ListItemText>
              <ListItemText >Blog</ListItemText>
              <ListItemText >Contact Us</ListItemText>
            </List>
              {/* </Box> */}
          </Grid>
        </Grid>
    </Stack>
  )
}

export default Footer