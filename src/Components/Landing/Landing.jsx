import { Box, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Rating from '@mui/material/Rating';


function Landing() {
    const [value, setValue] = React.useState(5);
  return (
    <div>
      <Stack sx={{fontFamily: 'Raleway, sans-serif'}}>
        <Grid container sx={{ paddingTop: { xs: "100px", sm: "190px" },fontFamily: 'Raleway, sans-serif' }}>
          <Grid item xs={0.6}></Grid>
          <Grid item xs={12} md={6} sx={{ color: "white" }}>
            <Typography
              variant="h6"
              sx={{
                paddingBottom: "26px",
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "15px", sm: "15px" },
              }}
            >
              {" "}
              GET 25% OFF NOW
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "50px", sm: "75px", md: "80px", lg: "90px" },
                textAlign: { xs: "center", md: "left" },
                fontFamily: 'Raleway, sans-serif',
                fontWeight:'600',
                lineHeight:"1.1em"
              }}
            >
              Make your life easier with crypto
            </Typography>
            <Box sx={{display:"flex",justifyContent:{xs:"center",md:"left"}}}>
            <Button
              sx={{
                backgroundColor: "#36BB91",
                borderRadius: "10px",
                padding: "17px 50px 17px 50px",
                color: "white",
                boxShadow: "0px 10px 20px 0px rgb(54 187 145 / 28%)",
                "&:hover": { backgroundColor: "#20BB96", color: "white" },
                marginTop: "60px",
                fontFamily: 'Raleway, sans-serif',
                fontWeight:"700",
                marginBottom:{md:"40px"},
                // marginLeft: { xs: "90px", sm: "290px", md: "0px" },
              }}
            >
              Start now
            </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ color: "white" }}>
            <ImageList
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageListItem
                sx={{
                  width: { xs: "320px", sm: "510px", md: "390px", lg: "510px" },
                  display: "",
                }}
              >
                <img src="carde.png"></img>
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0.6}></Grid>
          <Grid
            item
            xs={12}
            md={5}
            
          >
            <Box
            sx={{
              display: "flex",
              textAlign: { xs: "center" },
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}>
            <Typography
              variant="h3"
              sx={{ color: "white", fontSize: { xs: "30px", sm: "50px" },fontFamily: 'DM Sans, sans-serif',fontWeight:'700' }}
            >
              2K+
            </Typography>
            <Typography
              variant="subtitle6"
              sx={{
                color: "#B3B4B7",
                paddingLeft: { xs: "10px", sm: "30px" },
                textAlign: "center",
                fontFamily:'DM Sans, sans-serif',
                fontWeight:"600"
              }}
            >
              ACTIVE USERS
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#BFC0C2", marginX: { xs: "10px", sm: "40px" } }}
            >
              |
            </Typography>

            <Typography
              variant="h3"
              sx={{ color: "white", fontSize: { xs: "30px", sm: "50px" },fontFamily: 'DM Sans, sans-serif',fontWeight:'700' }}
            >
              20+
            </Typography>
            <Typography
              variant="subtitle6"
              sx={{ color: "#B3B4B7", paddingLeft: { xs: "10px", sm: "30px" },fontFamily:'DM Sans, sans-serif',
              fontWeight:"600" }}
            >
              WALLET TYPES
            </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <ImageList
              sx={{
                marginLeft: {
                  xs: "30px",
                  sm: "170px",
                  md: "100px",
                  lg: "170px",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageListItem
                sx={{
                  width: { xs: "280px", sm: "500px", md: "390px", lg: "500px" },
                }}
              >
                <img src="hand.png"></img>
              </ImageListItem>
            </ImageList>
          </Grid>
          <hr style={{ width: "200vh" }}></hr>
        </Grid>

        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            paddingY: "30px",
          }}
        >
          <Grid item md={0.5}></Grid>
          <Grid item xs={7} md={1.5}>
            <ImageList sx={{ display: "flex", justifyContent: "" }}>
              <ImageListItem sx={{ width: "150px" }}>
                <img src="w1.png"></img>
              </ImageListItem>
            </ImageList>
          </Grid>

          <Grid item xs={7} md={1.5}>
            <ImageList sx={{ display: "flex", justifyContent: "" }}>
              <ImageListItem sx={{ width: "150px" }}>
                <img src="w2.png"></img>
              </ImageListItem>
            </ImageList>
          </Grid>

          <Grid item xs={7} md={1.5}>
            <ImageList sx={{ display: "flex", justifyContent: "" }}>
              <ImageListItem sx={{ width: "150px" }}>
                <img src="w3.png"></img>
              </ImageListItem>
            </ImageList>
          </Grid>

          <Grid item xs={7} md={1.5}>
            <ImageList sx={{ display: "flex", justifyContent: "" }}>
              <ImageListItem sx={{ width: "150px" }}>
                <img src="w4.png"></img>
              </ImageListItem>
            </ImageList>
          </Grid>

          <Grid item xs={7} md={1.5}>
            <ImageList sx={{ display: "flex", justifyContent: "" }}>
              <ImageListItem sx={{ width: "150px" }}>
                <img src="w5.png"></img>
              </ImageListItem>
            </ImageList>
          </Grid>

          <Grid item xs={7} md={1.5}>
            <ImageList sx={{ display: "flex", justifyContent: "" }}>
              <ImageListItem sx={{ width: "150px" }}>
                <img src="w6.png"></img>
              </ImageListItem>
            </ImageList>
          </Grid>

          <Grid item md={0.5}></Grid>
        </Grid>

        <Grid container sx={{ marginTop: { xs: "50px", md: "140px" } }}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgb(44,188,165)",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              BUY, STORE, SELL
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", fontSize: "47px", fontWeight: "600", fontFamily: 'Raleway, sans-serif',lineHeight:'1.3em' }}
            >
              Manage your transactions
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontSize: "47px",
                fontWeight: "400",
                marginBottom: "20px",
              }}
            >
              in one place
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgb(173,180,183)",
                fontSize: "18px",
                fontWeight: "400",
                marginBottom: "20px",
              }}
            >
              You can buy and sell 150+ cryptocurrencies with 20+ fiat<br></br>{" "}
              currencies using bank transfers on your credit or debit card
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <ImageList
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageListItem
                sx={{
                  width: {
                    xs: "350px",
                    sm: "700px",
                    md: "900px",
                    lg: "1200px",
                  },
                }}
              >
                <img src="board.png" alt="" />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>

        <Grid container sx={{ paddingY: { xs: "50px", md: "170px" } }}>
          <Grid item xs={0.7}></Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "rgb(44,188,165)",
                fontSize: { xs: "13px", sm: "19px" },
                fontWeight: "700",
              }}
            >
              EARN CRYPTO
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: { xs: "35px", sm: "59px" },
                fontFamily: 'Raleway, sans-serif',
                lineHeight:"1.1em"
              }}
            >
              Deposit crypto earn <br></br>interest
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgb(179,180,183)",
                paddingY: "30px",
                fontSize: { xs: "17px", sm: "23px" },
                fontFamily:'DM Sans, sans-serif',
                fontWeight:"400"
              }}
            >
              Choose from 150+ cryptocurrencies
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "rgb(44,188,165)",
                fontWeight: "500",
                fontSize: { xs: "43px", sm: "69px" },
                fontFamily:'DM Sans, sans-serif',
                fontWeight:"500"
              }}
            >
              15%
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontSize: { md: "26px" },
                fontWeight: "600",
                fontFamily: 'Raleway, sans-serif'
              }}
            >
              On cryptos
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageList
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageListItem sx={{ width: { xs: "300px", sm: "760px" } }}>
                <img src="bit.png" alt="" />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ paddingY: { xs: "35px", md: "80px" }, textAlign: "center" }}
        >
          <Grid item xs={0.7}></Grid>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h6"
              sx={{
                color: "rgb(44,188,165)",
                fontSize: { xs: "13px", sm: "19px" },
                fontWeight: "700",
              }}
            >
              BENEFITS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: { xs: "35px", sm: "53px" },
                fontFamily: 'Raleway, sans-serif'
              }}
            >
              Make crypto work <br></br>harder on you
            </Typography>
            <ImageList
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageListItem sx={{ width: { md: "550px" } }}>
                <img src="market.png" alt="" />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item md={0.3}></Grid>

          <Grid item xs={12} md={5.2}>
            <Typography
              variant="h6"
              sx={{
                color: "rgb(166,167,171)",
                fontSize: { xs: "13px", sm: "20px" },
                paddingX: { xs: "10px", sm: "0" },
                fontFamily:'DM Sans, sans-serif',
                fontWeight:"400"
              }}
            >
              You can buy and sell 150+ cryptocurrencies with 20+ fiat
              <br />
              currencies using bank transfers on your credit or debit card
            </Typography>
            <Box
              sx={{
                padding: { xs: "10px", sm: "15px", lg: "25px" },
                marginTop: "60px",
                marginBottom: "20px",
                borderRadius: "10px",
                backgroundColor: "transparent",
                backgroundImage:
                  "linear-gradient(180deg, #2A2B31 0%, #2A2B3100 100%)",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <ImageList>
                  <ImageListItem
                    sx={{
                      width: { xs: "28px", sm: "36px" },
                      gridtemplateColumns: "auto",
                    }}
                  >
                    <img src="star.png"></img>
                  </ImageListItem>
                </ImageList>
                <Typography
                  variant="h4"
                  sx={{
                    color: "rgb(44,188,165)",
                    paddingTop: "10px",
                    fontSize: { xs: "25px", sm: "35px" },
                fontFamily: 'Raleway, sans-serif',
                fontWeight:"600"
                  }}
                >
                  {" "}
                  Best prices
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{ color: "rgb(166,167,171)", fontSize: "16px",fontFamily:'DM Sans, sans-serif',
                fontWeight:"400"}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
            </Box>

            <Box
              sx={{
                padding: { xs: "10px", sm: "15px", lg: "25px" },
                marginBottom: "20px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                  backgroundImage:
                    "linear-gradient(180deg, #2A2B31 0%, #2A2B3100 100%)",
                },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <ImageList>
                  <ImageListItem
                    sx={{
                      width: { xs: "28px", sm: "36px" },
                      gridtemplateColumns: "auto",
                    }}
                  >
                    <img src="lock.png"></img>
                  </ImageListItem>
                </ImageList>
                <Typography
                  variant="h4"
                  sx={{
                    color: "rgb(44,188,165)",
                    paddingTop: "10px",
                    fontSize: { xs: "25px", sm: "35px" },
                    fontFamily: 'Raleway, sans-serif',
                fontWeight:"600"
                  }}
                >
                  {" "}
                  Secure & insured
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{ color: "rgb(166,167,171)", fontSize: "16px",fontFamily:'DM Sans, sans-serif',
                fontWeight:"400" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
            </Box>

            <Box
              sx={{
                padding: { xs: "10px", sm: "15px", lg: "25px" },
                marginY: "",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                  backgroundImage:
                    "linear-gradient(180deg, #2A2B31 0%, #2A2B3100 100%)",
                },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <ImageList>
                  <ImageListItem
                    sx={{
                      width: { xs: "28px", sm: "36px" },
                      gridtemplateColumns: "auto",
                    }}
                  >
                    <img src="transfer.png"></img>
                  </ImageListItem>
                </ImageList>
                <Typography
                  variant="h4"
                  sx={{
                    color: "rgb(44,188,165)",
                    paddingTop: "10px",
                    fontSize: { xs: "25px", sm: "35px" },
                    fontFamily: 'Raleway, sans-serif',
                fontWeight:"600"
                  }}
                >
                  {" "}
                  No trading fees
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{ color: "rgb(166,167,171)", fontSize: "16px",fontFamily:'DM Sans, sans-serif',
                fontWeight:"400" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: { md: "120px" } }}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "rgb(44,188,165)",
                  fontSize: { xs: "13px", sm: "19px" },
                  fontWeight: "700",
                }}
              >
                TESTIMONIALS
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "500",
                  fontSize: { xs: "35px", sm: "45px" },
                  paddingBottom: "20px",
                  fontFamily: 'Raleway, sans-serif',
                fontWeight:"600"
                }}
              >
                What people say
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgb(166,167,171)",
                  fontSize: { xs: "13px", sm: "17px" },
                  paddingX: { xs: "10px", sm: "0" },
                  fontFamily:'DM Sans, sans-serif',
                fontWeight:"400"
                }}
              >
                You can buy and sell 150+ cryptocurrencies with 20+ fiat
                <br />
                currencies using bank transfers on your credit or debit card
              </Typography>
            </Grid>
          </Grid>

          <Grid container sx={{marginTop:{md:"50px",xs:"40px"}}}>
            <Grid item sm={.5}></Grid>
            <Grid item xs={12} md={5} sx={{backgroundColor:"transparent",margin:{md:"25px",xs:"10px"},backgroundImage:"linear-gradient(180deg, #2A2B31 0%, #2A2B3100 100%)",borderRadius:"10px",padding:{md:"35px",xs:"20px"}}}>
            <Rating name="read-only" value={value} readOnly />
               <Typography variant="h6" sx={{color: "rgb(166,167,171)",marginY:{md:"30px"},fontSize:{md:"20px"},fontFamily: 'Raleway, sans-serif',
                fontWeight:"600"}}>Great! Compared to everything else I’ve ever used, this is the best technology.</Typography>
               <Box sx={{display:"flex",justifyContent:"space-between"}}>
               <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: { xs: "17px", sm: "19px" },
                  fontFamily:'DM Sans, sans-serif',
                fontWeight:"500"
                }}
              >
                Nick Green
              </Typography>

              <ImageList sx={{border:"none"}}>
                <ImageListItem sx={{width:"50px",objectFit:"cover",borderRadius:"100% 100% 100% 100%"}}>
                    <img src="emoji.png" alt="" />
                </ImageListItem>
              </ImageList>
               </Box>

              <Typography variant="h6" sx={{color: "rgb(166,167,171)",fontSize:{md:"15px",xs:"13px"},fontWeight: "700",marginTop:{md:"-40px",xs:"-40px"},fontFamily: 'Raleway, sans-serif'}}>Developer</Typography>
            </Grid>

            <Grid item xs={12} md={5} sx={{backgroundColor:"transparent",margin:{md:"25px",xs:"10px"},backgroundImage:"linear-gradient(180deg, #2A2B31 0%, #2A2B3100 100%)",borderRadius:"10px",padding:{md:"35px",xs:"20px"}}}>
            <Rating name="read-only" value={value} readOnly />
               <Typography variant="h6" sx={{color: "rgb(166,167,171)",marginY:{md:"30px"},fontSize:{md:"20px"},fontFamily: 'Raleway, sans-serif',
                fontWeight:"600"}}>Great! Compared to everything else I’ve ever used, this is the best technology.</Typography>
               <Box sx={{display:"flex",justifyContent:"space-between"}}>
               <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: { xs: "17px", sm: "19px" },
                  fontFamily:'DM Sans, sans-serif',
                fontWeight:"500"
                }}
              >
                Dora Adams
              </Typography>

              <ImageList sx={{border:"none"}}>
                <ImageListItem sx={{width:"50px",objectFit:"cover",borderRadius:"100% 100% 100% 100%"}}>
                    <img src="emoji2.png" alt="" />
                </ImageListItem>
              </ImageList>
               </Box>

              <Typography variant="h6" sx={{color: "rgb(166,167,171)",fontSize:{md:"15px",xs:"13px"},fontWeight: "700",marginTop:{md:"-40px",xs:"-40px"},fontFamily: 'Raleway, sans-serif'}}>HR manager</Typography>
            </Grid>
          </Grid>

          <Grid container sx={{marginBottom:{md:"140px",xs:"70px"}}}>
            <Grid item sm={.5}></Grid>
            <Grid item xs={12} md={5} sx={{backgroundColor:"transparent",margin:{md:"25px",xs:"10px"},backgroundImage:"linear-gradient(180deg, #2A2B31 0%, #2A2B3100 100%)",borderRadius:"10px",padding:{md:"35px",xs:"20px"}}}>
            <Rating name="read-only" value={value} readOnly />
            <Typography variant="h6" sx={{color: "rgb(166,167,171)",marginY:{md:"30px"},fontSize:{md:"20px"},fontFamily: 'Raleway, sans-serif',
                fontWeight:"600"}}>Great! Compared to everything else I’ve ever used, this is the best technology.</Typography>
               <Box sx={{display:"flex",justifyContent:"space-between"}}>
               <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: { xs: "17px", sm: "19px" },
                  fontFamily:'DM Sans, sans-serif',
                fontWeight:"500"
                }}
              >
                Paul Rojers
              </Typography>

              <ImageList sx={{border:"none"}}>
                <ImageListItem sx={{width:"50px",objectFit:"cover",borderRadius:"100% 100% 100% 100%"}}>
                    <img src="emoji3.png" alt="" />
                </ImageListItem>
              </ImageList>
               </Box>

              <Typography variant="h6" sx={{color: "rgb(166,167,171)",fontSize:{md:"15px",xs:"13px"},fontWeight: "700",marginTop:{md:"-40px",xs:"-40px"},fontFamily: 'Raleway, sans-serif'}}>Project manager</Typography>
            </Grid>

            <Grid item xs={12} md={5} sx={{backgroundColor:"transparent",margin:{md:"25px",xs:"10px"},backgroundImage:"linear-gradient(180deg, #2A2B31 0%, #2A2B3100 100%)",borderRadius:"10px",padding:{md:"35px",xs:"20px"}}}>
            <Rating name="read-only" value={value} readOnly />
               <Typography variant="h6" sx={{color: "rgb(166,167,171)",marginY:{md:"30px"},fontSize:{md:"20px"},fontFamily: 'Raleway, sans-serif',
                fontWeight:"600"}}>Great! Compared to everything else I’ve ever used, this is the best technology.</Typography>
               <Box sx={{display:"flex",justifyContent:"space-between"}}>
               <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: { xs: "17px", sm: "19px" },
                  fontFamily:'DM Sans, sans-serif',
                fontWeight:"500"
                }}
              >
                Nick Green
              </Typography>

              <Box>
              <ImageList sx={{border:"none"}}>
                <ImageListItem sx={{width:"50px",objectFit:"cover",borderRadius:"100% 100% 100% 100%"}}>
                    <img src="emoji.png" alt="" />
                </ImageListItem>
              </ImageList>
              </Box>
               </Box>

              <Typography variant="h6" sx={{color: "rgb(166,167,171)",fontSize:{md:"15px",xs:"13px"},fontWeight: "700",marginTop:{md:"-40px",xs:"-40px"},fontFamily: 'Raleway, sans-serif'}}>Developer</Typography>
            </Grid>
          </Grid>

          
          <Grid container sx={{marginBottom:{md:"120px",xs:"80px"}}} >
            <Grid item md={.8}></Grid>
            <Grid item xs={12} md={10.4} sx={{backgroundColor:"#2A2B3169",borderRadius:"10px",borderColor:"#849AAA85",padding:{xs:"30px 30px",md:"60px 80px"},borderWidth:"1px",borderStyle:"solid",display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row"},textAlign:{xs:"center",sm:"left"},marginX:{xs:"10px",md:"0"}}}>
                <Box>
                <Typography variant="h6" sx={{color:"white",fontSize:{md:"40px",sm:"35px"},fontWeight:"600",fontFamily: 'Raleway, sans-serif',lineHeight:"1.2"}}>Let’s start your crypto</Typography>
                <Box sx={{display:"flex",justifyContent:{xs:"center"}}}>
                <Typography variant="h6" sx={{color:"rgb(44,188,165)",fontSize:{md:"40px",sm:"35px"},fontWeight:"600",fontFamily: 'Raleway, sans-serif',lineHeight:"1.2"}}>investment</Typography>
                <Typography variant="h6" sx={{color:"white",fontSize:{md:"40px",sm:"35px"},fontWeight:"600",fontFamily: 'Raleway, sans-serif',lineHeight:"1.2",paddingLeft:"12px"}}>now</Typography>
                <ImageList>
                    <ImageListItem sx={{width:{xs:"20px",sm:"40px"},marginLeft:"13px"}}>
                        <img src="star2.png" alt="" />
                    </ImageListItem>
                </ImageList>
                </Box>
                <Typography variant="h6" sx={{color: "rgb(166,167,171)",fontFamily:'DM Sans, sans-serif',
                fontWeight:"400"}}>Choose from 150+ cryptocurrencies</Typography>
                </Box>
                <Box>
                <Button
              sx={{
                backgroundColor: "#36BB91",
                borderRadius: "10px",
                padding: "17px 50px 17px 50px",
                color: "white",
                boxShadow: "0px 10px 20px 0px rgb(54 187 145 / 28%)",
                "&:hover": { backgroundColor: "#20BB96", color: "white" },
                marginTop: "60px",
                fontFamily: 'Raleway, sans-serif',
                fontWeight:"700"
                // marginLeft: { xs: "90px", sm: "290px", md: "0px" },
              }}
            >
              Start now
            </Button>
                </Box>
            </Grid>
            <Grid item md={.8}></Grid>
          </Grid>
      </Stack>
    </div>
  );
}

export default Landing;
