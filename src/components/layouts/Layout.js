import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import Naviation from "./Naviation";

const Layout = (props) => {
  return (
    <Fragment>
      <Naviation />
      <main className='m'>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
