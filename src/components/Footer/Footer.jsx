/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer style={{color: "#666666"}} className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.seattleacupuncturehub.com/"
                className={classes.block}
                target="_blank"
              >
                Seattle Acupuncture Hub
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.seattleacupuncturehub.com/contact-page"
                className={classes.block}
                target="_blank"
              >
                Contact Us
              </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem> */}
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem> */}
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} {" "} Made with Love{" "}
          <Favorite className={classes.icon} /> {" "}
          <a
            href="https://www.creative-tim.com"
            className={aClasses}
            target="_blank"
          >
            
          </a>{" "}
          Life {" "}
          <Favorite className={classes.icon} /> {" "}
          Aloha.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
