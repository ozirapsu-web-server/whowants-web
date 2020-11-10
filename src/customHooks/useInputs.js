import { useState, useCallback } from "react";

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
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
