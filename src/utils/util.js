//  기타 utils 함수 모음

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { numberWithCommas };
