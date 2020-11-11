function numberWithCommas(x) {
  console.log(typeof x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { numberWithCommas };
