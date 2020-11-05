import React from "react";
import Summary from "components/Summary";
import { useSelector } from "react-redux";

const SummaryContainer = React.memo(() => {
  const { header, content } = useSelector((state) => ({
    header: state.summary.header,
    content: state.summary.content,
  }));

  return <Summary header={header} content={content}></Summary>;
});

export default SummaryContainer;
