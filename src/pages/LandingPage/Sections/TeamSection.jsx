import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/rhiannon.jpg";
import team3 from "assets/img/faces/kendall.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 style={{fontFamily: 'Raleway', color: 'black'}}>Practitioners</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                 
                </GridItem>
               
                <CardBody>
                
                </CardBody>
                <CardFooter className={classes.justifyCenter}>

                </CardFooter>
              </Card>
            
            </GridItem>
            
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 style={{fontFamily: 'Raleway', color: 'black'}}>
                  Rhiannon Stanford
                  <br />
                  <small className={classes.smallTitle}>🌺 Licensed Acupuncturist {"&"} Traditional Chinese Medicine Herbalist 🌿</small>
                  {/* <small className={classes.smallTitle}>Acupuncturist {"&"} Herbalist</small> */}
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Rhiannon Stanford is a Licensed Acupuncturist and Herbalist specializing in women’s health issues, pain management, and internal medicine.  She enjoys working with all patients to empower and support them to achieve health, wellness, and balance.  She has board certification in both acupuncture and Chinese herbal medicine through the National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM).  She is a Diplomate in Oriental Medicine (Dipl. OM), a NCCAOM board certification ensuring the highest quality of training in acupuncture and oriental medicine.
                    
                  </p>
                  <br/>
                  <p className={classes.description}>
                    Rhiannon holds a Masters in Acupuncture and Oriental Medicine (M.Ac.O.M.) from the <a href="https://sieam.edu/">Seattle Institute of East Asian Medicine</a>, where she received rigorous apprentice style training from masters of diverse specialties.  She is adept at a broad range of skills in East Asian Medicine including Chinese Acupuncture, Japanese Acupuncture, Scalp Acupuncture, Auriculotherapy, Tuina (Chinese Medical Massage), and both Traditional (傷寒論 Shang Han Lun and 温病 Wen Bing) and Modern Chinese Herbalism.
                  
                  </p>
                  <p>
                  Licensed Acupuncturist, L.Ac.
                  <br/>
                  East Asian Medicine Practitioner, E.A.M.P.
                  <br/>
                  Masters of Acupuncture & Oriental Medicine, M.Ac.O.M.
                  </p>
                </CardBody>

                {/* <CardFooter className={classes.justifyCenter}>
            
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaInstagram/>
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <FaLinkedin/>
                  </Button> 

                </CardFooter> */}
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                 
                </GridItem>
               
                <CardBody>
               
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
             
                
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
