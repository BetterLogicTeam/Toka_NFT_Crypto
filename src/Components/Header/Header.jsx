import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {

    

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <div>
        <AppBar position="fixed" sx={{backgroundImage: "linear-gradient(50deg, rgb(9,18,40) 0%, rgb(9,19,38) 25%, rgb(19,28,33) 35%, rgb(20,29,33) 65%, rgb(7,13,25) 100%)",boxShadow:"none",hover:"none"}}>
      <Container maxWidth="xl">
        <Toolbar >
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: "30px",
              paddingRight: "10px"
            }}
          >
            Toka
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            
                <MenuItem  onClick={handleCloseNavMenu} sx={{display: "flex", flexDirection: "column"}}>
                  <Typography textAlign="center"></Typography>
                  <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "black", fontSize: "15px", fontWeight: "600", marginRight: "" }}>
              NFT <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

              <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "black", fontSize: "15px", fontWeight: "600", marginRight: "" }}>
              Crypto <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

              <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "black", fontSize: "15px", fontWeight: "600", marginRight: "" }}>
              About Us <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

              <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "black", fontSize: "15px", fontWeight: "600", marginRight: "" }}>
              Our Team <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

              <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "black", fontSize: "15px", fontWeight: "600", marginRight: "" }}>
              Contact Us <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

              <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "black", fontSize: "15px", fontWeight: "600", marginRight: "" }}>
              Online Shop <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

               <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "black", fontSize: "15px", fontWeight: "600", marginRight: "" }}>
              Blog <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>
                </MenuItem>
              
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Toka
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: {md: "50px",lg: "190px"} }}>
            
          <Button
          sx={{hover:"none"}}
              onClick={handleCloseNavMenu}
               >
              <Tooltip title=""
              sx={{pointerEvents:"none"}}>
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white", fontSize: "15px", fontWeight: "600", marginRight: "20px" }}>
              NFT <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

              <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white", fontSize: "15px", fontWeight: "600", marginRight: "20px" }}>
              Crypto <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

              <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white", fontSize: "15px", fontWeight: "600", marginRight: "20px" }}>
              About Us <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

              <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white", fontSize: "15px", fontWeight: "600", marginRight: "20px" }}>
              Our Team <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

              <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white", fontSize: "15px", fontWeight: "600", marginRight: "20px" }}>
              Contact Us <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

              <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white", fontSize: "15px", fontWeight: "600", marginRight: "20px" }}>
              Online Shop <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

               <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white", fontSize: "15px", fontWeight: "600", marginRight: "20px" }}>
              Blog <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
              </IconButton>
            </Tooltip>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
               >
              <Tooltip title="">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: "white", fontSize:{md: "10px",lg: "15px"}, fontWeight: "600", marginRight: "20px", border: "1px solid white",borderRadius: "20px", padding: "10px 20px",  "&:hover": { bgcolor: "white", color: "rgb(8,18,40)" }, }}>
              Buy Now
              </IconButton>
            </Tooltip>
            </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
           
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}

export default Header



{/* sx={{ my: 2, color: 'white', display: 'block' }} */}