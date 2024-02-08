import BaseContainer from "../base-container/base-container.component";
import * as Styles from "./styles";

const Footer = () => {
  return (
    <Styles.Footer>
      <BaseContainer>
        <Styles.FooterContainer>
          <Styles.FooterLeft>
            Data source:
            <Styles.FooterLink
              href="https://www.weatherapi.com/"
              target="_blank"
            >
              {" "}
              WeatherAPI.com
            </Styles.FooterLink>
          </Styles.FooterLeft>
          <Styles.FooterRight>dmytro.kantsiber7@gmail.com</Styles.FooterRight>
        </Styles.FooterContainer>
      </BaseContainer>
    </Styles.Footer>
  );
};

export default Footer;
