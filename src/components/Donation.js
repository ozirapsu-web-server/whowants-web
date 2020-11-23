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
`;

const Header = styled.header`
  font-size: ${(props) => props.theme.size.md};
  margin-bottom: 20px;
  display: flex;

  & p {
    color: ${(props) => props.theme.color.blue};
    font-size: ${(props) => props.theme.size.lg};
    font-weight: bold;
  }
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 5px;
  margin-bottom: 20px;
  position: relative;

  & div {
    border-radius: 5px;
  }
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

const Bar = styled.div`
  width: 100%;
  height: 18px;
  background: ${(props) => props.theme.color.mint};
  position: absolute;
  left: 0;
  top: 0;
  margin-bottom: 20px;
`;

const ProgressBar = styled(Bar)`
  width: ${(props) => props.onprogress}%;
  background: ${(props) => props.theme.color.blue};
  height: 18px;
`;

const Status = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

const Target = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.size.smd};
  display: flex;
  font-weight: bold;
  margin-top: -10px;
  & p:nth-child(1) {
    margin-right: 3px;
  }
`;

const Notice = styled.div`
  width: 100%;
  display: flex;
  line-height: 1.5em;
  padding: 15px;
  background: ${(props) => props.theme.color.mint};
  font-size: ${(props) => props.theme.size.sm};
  border-radius: 10px;

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    & * {
      flex-shrink: 0;
    }
  }
`;

const Point = styled.p`
  font-weight: bold;
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
          <Bar></Bar>
          <ProgressBar onprogress={rocketPercent + 10}></ProgressBar>
        </ProgressWrapper>
        <Header>
          <p>{numberWithCommas(amount)}</p>원이 모였어요!
        </Header>

        <Status>
          <Target>
            <p>목표금액</p>
            <p>{numberWithCommas(target)} 원</p>
          </Target>
        </Status>
      </Container>

      <Notice>
        <div style={{ marginRight: "3px" }}>💡</div>
        <div>
          <p>후원츠는</p> <Point>목표 금액 달성과 관계 없이</Point>
          <br /> <p>모인 금액을 실제 사연의</p>
          <Point>주인공에게 직접 전달합니다.</Point>
        </div>
      </Notice>
    </DonationWrapper>
  );
});

export default Donation;
