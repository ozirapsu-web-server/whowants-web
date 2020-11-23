import React from "react";
import styled from "styled-components";
import { numberWithCommas } from "utils/util";

const DonationWrapper = styled.section`
  width: 100%;
  min-height: 100px;
  padding: 20px;
`;

const Container = styled.div`
  padding: 18px;
  border: 1px solid #c6c6c6;
  border-radius: 6px;
  margin-bottom: 20px;
`;

const Percent = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 7px;
  & p:nth-child(1) {
    margin-right: 3px;
  }
  & p:nth-child(1) {
    font-size: 24px;
    color: ${(props) => props.theme.color.blue};
  }

  & p:nth-child(2) {
    font-weight: bold;
    font-size: 14px;
  }
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 5px;
  margin-bottom: 30px;
  position: relative;

  & div {
    border-radius: 5px;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 18px;
  background: ${(props) => props.theme.color.gray};
  position: absolute;
  left: 0;
  top: 0;
`;

const ProgressBar = styled(Bar)`
  width: ${(props) => props.onprogress}%;
  background: ${(props) => props.theme.color.blue};
  height: 18px;
`;

const AmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => props.theme.color.black};
  & > div:nth-child(2) {
    font-weight: bold;
  }
`;

const Notice = styled.div`
  width: 100%;
  display: flex;
  line-height: 19px;
  padding: 15px 9px;
  background: ${(props) => props.theme.color.blue};
  font-size: 13px;
  border-radius: 6px;
  color: #fff;

  & p {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    & * {
      flex-shrink: 0;
    }
  }
`;

// 후원 금액 컴포넌트
const Donation = React.memo(({ amount, target, percent }) => {
  let rocketPercent;
  if (percent >= 100) {
    rocketPercent = 85;
  } else if (percent > 10) {
    rocketPercent = percent - 10;
  } else {
    rocketPercent = percent - 5;
  }
  return (
    <DonationWrapper>
      <Container>
        <Percent>
          <p>{percent}</p>
          <p>% 진행중</p>
        </Percent>
        <ProgressWrapper>
          <Bar />
          <ProgressBar onprogress={rocketPercent + 10}></ProgressBar>
        </ProgressWrapper>
        <AmountWrapper>
          <div>모인 금액</div>
          <div>{numberWithCommas(amount)}원</div>
        </AmountWrapper>
        <AmountWrapper>
          <div>목표 금액</div>
          <div>{numberWithCommas(target)}원</div>
        </AmountWrapper>
      </Container>

      <Notice>
        <div style={{ marginRight: "3px" }}>💡</div>
        <div>
          <p>
            후원츠는 목표 금액 달성과 관계 없이
            <br /> 모인 금액을 실제 사연의 주인공에게 직접 전달합니다.
          </p>
        </div>
      </Notice>
    </DonationWrapper>
  );
});

export default Donation;
