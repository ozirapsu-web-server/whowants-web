import { useState, useCallback } from "react";
import validInputs from "utils/validation";
//  input change에 대한 customHooks
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  // validation 메세지
  const [alert, setAlert] = useState({});
  const [visible, setVisible] = useState(false);
  // change
  const onChange = useCallback((e) => {
    setAlert(false);
    const { name, value } = e.target;
    console.log(name,value);
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  // 확인 메세지 모달 
  const onToggleModal = () => {
    const [newAlert, valid] = validInputs(form);
    setAlert(newAlert);
    console.log(newAlert, valid);
    if (valid) {
      setVisible((visible) => !visible);
    }
  };

  const reset = useCallback(() => {
    // 경고 메세지와 모달 메세지는 보이지 않도록 한다
    setVisible(false);
    setAlert({});
    setForm(initialForm);
  }, [initialForm]);

  return [form, onChange, alert, onToggleModal, visible, reset];
}

export default useInputs;
