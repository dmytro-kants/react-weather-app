import { Rings } from "react-loader-spinner";

const MainSpinner = () => {
  return (
    <Rings
      visible={true}
      height="800"
      width="800"
      color="#373737"
      ariaLabel="rings-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default MainSpinner;
