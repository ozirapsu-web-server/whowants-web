const validInputs = (form) => {
  const alert = {};
  let isAlertExisted = true;
  if (form.nickname === "") {
    alert.nickname = "이름을 입력해주세요";
    isAlertExisted = false;
  }
  if (form.phoneNumber === "") {
    alert.phoneNumber = "전화번호를 입력해주세요";
    isAlertExisted = false;
  }
  return [alert, isAlertExisted];
};

export default validInputs;
