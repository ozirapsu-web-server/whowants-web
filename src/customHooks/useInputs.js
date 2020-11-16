import { useState, useCallback } from "react";

//  input change에 대한 customHooks
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  // validation 메세지
  const [alert, setAlert] = useState(false);
  // change
  const onChange = useCallback((e) => {
    setAlert(false);
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset, alert, setAlert];
}

export default useInputs;
