import BaseContainer from "../base-container/base-container.component";
import * as Styles from "./styles";

const Footer = () => {
  return (
    <BaseContainer>
      <Styles.Footer>
        <Styles.FooterContent>
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
        </Styles.FooterContent>
      </Styles.Footer>
    </BaseContainer>
  );
};

export default Footer;
