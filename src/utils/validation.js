const validInputs = (form) => {
  const alert = {};
  //  validation 통과여부
  let isAlertExisted = true;
  if (form.nickname === "") {
    alert.nickname = "이름을 입력해주세요";
    isAlertExisted = false;
  }
  if (form.phoneNumberMid === "" || form.phoneNumberLast==='') {
    alert.phoneNumber = "전화번호를 입력해주세요";
    isAlertExisted = false;
  }

  if(form.email===''){
    alert.email='이메일을 입력해주세요';
    isAlertExisted=false;
  }

  if(form.checked===false){
    isAlertExisted=false;
    alert.checked='마케팅 정보 동의는 필수입니다';
  }

  return [alert, isAlertExisted];
};

export default validInputs;
