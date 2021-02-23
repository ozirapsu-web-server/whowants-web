import React from "react";
import LogoContainer from "containers/LogoContainer";
import LinkList from "components/LinkList";
import close from "images/close.png";
const LinkContainer = () => {
  return (
    <>
      <LogoContainer left={close} />
      <LinkList />
    </>
  );
};

export default LinkContainer;
