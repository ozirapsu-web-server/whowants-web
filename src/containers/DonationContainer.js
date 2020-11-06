import React from "react";
import Donation from "components/Donation";
import { useSelector } from "react-redux";

const DonationContainer = React.memo(() => {
  const { target, amount, percent } = useSelector((state) => ({
    target: state.donation.target,
    amount: state.donation.amount,
    percent: state.donation.percent,
  }));

  return (
    <div>
      <Donation target={target} amount={amount} percent={percent} />
    </div>
  );
});

export default DonationContainer;
