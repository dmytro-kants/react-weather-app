import { Rings } from "react-loader-spinner";
import BaseContainer from "../../base-container/base-container.wrapper";
import * as Styles from "./styles";

const MainSpinner = () => {
  return (
    <BaseContainer>
      <Styles.MainSpinner>
        <Styles.MainSpinnerText>
          <p>Furniture React App is loading...</p> <p>Please Wait!🙏</p>
        </Styles.MainSpinnerText>
        <Rings
          visible={true}
          height="400"
          width="400"
          color="#373737"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </Styles.MainSpinner>
    </BaseContainer>
  );
};

export default MainSpinner;
