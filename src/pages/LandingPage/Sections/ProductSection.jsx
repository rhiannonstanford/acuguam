import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Spa from "@material-ui/icons/Spa";
import Favorite from "@material-ui/icons/Favorite";
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 style={{fontFamily: 'Raleway', color: 'black'}}>Welcome</h2>
            <h5 className={classes.description}>
              At Seattle Acupuncture Hub, you can expect to receive exceptional care. We offer acupuncture, Chinese herbal therapy, Chinese tuina massage, and nutritional counseling to help you achieve optimal health and wellness. Each treatment plan is individually tailored to you in this positive and empowering healing space.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer style={{fontFamily: 'Raleway', color: 'black'}}>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Reduce Stress"
                style={{fontFamily: 'Raleway', color: 'black'}}
                description="Experience relaxation and reduce stress today through the balancing effects of acupuncture treatments."
                icon={SentimentSatisfiedAltIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Internal Medicine"
                style={{fontFamily: 'Raleway', color: 'black'}}
                description="Acupuncture and herbs can be very effective at treating a broad range of internal medicine health issues."
                icon={LocalFloristIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Pain Relief"
                style={{fontFamily: 'Raleway', color: 'black'}}
                description="Acupuncture effectively treats acute and chronic pain issues including back pain, neck and shoulder issues, sports injuries, and more."
                icon={Favorite}
                iconColor="info"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
