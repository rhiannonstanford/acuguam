import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

// import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class AboutSection extends React.Component {
  render() {
    // const { classes } = this.props;
    return (
      <div >
        <p>
        Rhiannon Stanford is a Licensed Acupuncturist and Herbalist specializing in women’s health issues, pain management, and internal medicine.  She enjoys working with all patients to empower and support them to achieve health, wellness, and balance.  She has board certification in both acupuncture and Chinese herbal medicine through the National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM).  She is a Diplomate in Oriental Medicine (Dipl. OM), a NCCAOM board certification ensuring the highest quality of training in acupuncture and oriental medicine.

        Rhiannon holds a Masters in Acupuncture and Oriental Medicine (M.Ac.O.M.) from the Seattle Institute of Oriental Medicine, where she received rigorous apprentice style training from masters of diverse specialties.  She is adept at a broad range of skills in East Asian Medicine including Chinese Acupuncture, Japanese Acupuncture, Scalp Acupuncture, Auriculotherapy, Tuina (Chinese Medical Massage), and both Traditional (傷寒論 Shang Han Lun and 温病 Wen Bing) and Modern Chinese Herbalism.

        </p>
      </div>
    );
  }
}

export default AboutSection;
