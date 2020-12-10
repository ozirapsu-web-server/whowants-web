import { useMediaQuery } from "react-responsive";
//  반응형 디자인
const useMedia = () => {
  const pc = useMediaQuery({
    query: "(min-width:1024px) and (max-width:1279px)",
  });

  const Tablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });

  const Mobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return { pc, Tablet, Mobile };
};

export default useMedia;
