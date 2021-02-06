import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaPlay } from 'react-icons/fa';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import AboutSection from "./Sections/AboutSection.jsx";

import { makeStyles } from '@material-ui/core/styles';

const dashboardRoutes = [];

// const useStyles = makeStyles({
//     title: {
//       fontSize: 40,
//     },

//   // root: {
//   //   minWidth: 310,
//   //   color: 'white',
//   //   background: 'black',
//   //   opacity: .9,
//   //   boxShadow: '0 0 25px red, 0 0 5px rgb(105, 7, 7)',
//   //   fontSize: 22,
//   //   margin: '10px',
//   // },
//   // bullet: {
//   //   display: 'inline-block',
//   //   margin: '0 2px',
//   //   transform: 'scale(0.8)',
//   // },
//   // title: {
//   //   fontSize: 22,
//   //   color: 'white',
//   // },
//   // pos: {
//   //   marginBottom: 12,
//   //   fontSize: 22,
//   //   color: 'white'
//   // },
// }); // material UI styles

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand=" "
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              {/* <GridItem xs={12} sm={12} md={6}> */}
              <GridItem md={12}>
              <h1>Seattle Acupuncture Hub</h1>
                {/* <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4> */}
                <br />
                {/* <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  {/* <FaPlay/>
                  Watch video
                </Button> */}
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            {/* <TeamSection /> */}
            <WorkSection />
            <AboutSection/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
