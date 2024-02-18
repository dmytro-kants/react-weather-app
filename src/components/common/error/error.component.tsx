import { FC } from "react";
import * as Styles from "./styles";
import errorSadImage from "../../../assets/images/errorSad.png";
import { useTranslations } from "../../../hooks/useTranslations";
interface ErrorComponentProps {
  status: number;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ status }) => {
  const { t } = useTranslations();
  switch (status) {
    case 404:
      return (
        <Styles.ErrorContainer>
          <Styles.ErrorText>{t["error.unexistingProduct"]}</Styles.ErrorText>
          <Styles.ErrorImage src={errorSadImage} alt="Неіснуючий товар" />
        </Styles.ErrorContainer>
      );

    default:
      return (
        <Styles.ErrorContainer>
          <Styles.ErrorText> {t["error.unexpectedError"]}</Styles.ErrorText>
          <Styles.ErrorImage src={errorSadImage} alt="Unexisting product" />
        </Styles.ErrorContainer>
      );
  }
};

export default ErrorComponent;
