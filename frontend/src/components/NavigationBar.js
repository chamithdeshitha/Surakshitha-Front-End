import React from "react";
import {useState} from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import {useMediaQuery, useTheme} from "@mui/material";
const HideOnScroll = (props) => {
  const {children} = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
const NavigationBar = (props) => {
  const handleOpenNavigationBar = (event) => {
    setNavigationBar(event.currentTarget);
  };
  const [openNavigationBar, setNavigationBar] = useState(false);
  const handleCloseNavigationBar = () => {
    setNavigationBar(!openNavigationBar);
  };
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar
          className="navigationbar1"
          style={{
            width: "100%",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              href="/"
              sx={{
                ml: 6,
                mr: 5,
                display: {xs: "none", md: "flex"},
                fontFamily: "sans-serif",
                fontWeight: 600,
                color: "inherit",
                textDecoration: "none",
              }}
              className="Home"
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              href="/"
              sx={{
                mr: 5,
                display: {xs: "none", md: "flex"},
                fontFamily: "sans-serif",
                fontWeight: 600,
                color: "inherit",
                textDecoration: "none",
              }}
              className="News"
            >
              News
            </Typography>
            <Typography
              variant="h6"
              href="/"
              sx={{
                mr: 5,
                display: {xs: "none", md: "flex"},
                fontFamily: "sans-serif",
                fontWeight: 600,
                color: "inherit",
                textDecoration: "none",
              }}
              className="Events"
            >
              Events
            </Typography>
            <Typography
              variant="h6"
              href="/"
              sx={{
                mr: 5,
                display: {xs: "none", md: "flex"},
                fontFamily: "sans-serif",
                fontWeight: 600,
                color: "inherit",
                textDecoration: "none",
              }}
              className="Aboutus"
            >
              About Us
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

export default NavigationBar;
