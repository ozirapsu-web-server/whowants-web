import React, { useEffect } from "react";
import Donation from "components/Donation";
import { useSelector, useDispatch } from "react-redux";
import { getDonationInfo } from "modules/donation";

const DonationContainer = React.memo(() => {
  const { target, amount, percent } = useSelector((state) => ({
    target: state.donation.target,
    amount: state.donation.amount,
    percent: state.donation.percent,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDonationInfo(1));
  }, [dispatch]);
  console.log(target, amount, percent);
  return (
    <div>
      <Donation target={target} amount={amount} percent={percent} />
    </div>
  );
});

export default DonationContainer;
