import React, { useEffect } from "react";
import Donation from "components/Donation";
import { useSelector, useDispatch } from "react-redux";
import { getDonationInfo } from "modules/donation";
//  후원 금액 컨테이너 컴포넌트
const DonationContainer = React.memo(({ pageIdx }) => {
  const { target, amount, percent } = useSelector((state) => ({
    target: state.donation.target,
    amount: state.donation.amount,
    percent: state.donation.percent,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDonationInfo(pageIdx));
  }, [dispatch, pageIdx]);
  console.log(target, amount, percent);
  return (
    <div>
      <Donation target={target} amount={amount} percent={percent} />
    </div>
  );
});

export default DonationContainer;
