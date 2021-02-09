import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// import profile from "assets/img/faces/rhiannon.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import rhiannon from "assets/img/examples/rhiannon.jpg";

import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ContactPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Seattle Acupuncture Hub"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small image={require("assets/img/palm-sunrise.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={rhiannon} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 style={{fontFamily: 'Raleway', color: 'black'}}>Contact</h3>
                      <h6><br/><a href="https://www.google.com/maps/dir/47.300608,-122.22464/seattle+acupuncture+hub/@47.4703867,-122.5635744,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x54901501329e7417:0xed3153ff527be64d!2m2!1d-122.3515063!2d47.6502059">3401 Evanston Ave N, Suite A 
                        <br/> Seattle, WA 98103</a> <br/> 🌸  <br/><a href = "mailto: info@seattleacupuncturehub.com">info@seattleacupuncturehub.com</a><br/>
                         🌸  
                        <br/>
                        <a href="tel:1-206-659-6791">206-659-6791</a>
                        


                        </h6>

                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                We’re located at the Atrium Offices in the heart of Seattle’s Fremont neighborhood. Contact us in advance at 206.659.6791 or info@seattleacupuncturehub.com. 
                </p>
                <br/>
                <p>
                <span style={{color: "#888888", fontWeight: "bold"}}>Address: </span>3401 Evanston Ave N, Suite A • Seattle, WA 98103
                </p>
                <br/>
                <p>
                <span style={{color: "#888888", fontWeight: "bold"}}>Directions: </span>Our clinic is located in the Atrium Suites. To get to the clinic, take the outdoor elevator located on Evanston next to the Red Door Restaurant. Take the elevator up to the 2nd level and walk across the enclosed walkway. As you pass through the glass doors you’ll find yourself in our waiting area. Help yourself to tea or water, and someone will be with you shortly!{" "}
                </p>
                <br/>
                <p>
                <span style={{color: "#888888", fontWeight: "bold"}}>Public Transportation: </span>The clinic is located within easy walking distance of buses #31, #32, #40, and #62.<br/>
                </p>
                <br/>
                <p>
                <span style={{color: "#888888", fontWeight: "bold"}}>Parking: </span> The building has paid parking in the lower levels (accessed in the alley off of Evanston). Downtown Fremont also has plentiful free 2-hour parking areas along the street. Spaces do fill up, so budget time to look for a parking space, if driving.{" "}
                </p>
              
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  {/* <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  /> */}
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ContactPage);
