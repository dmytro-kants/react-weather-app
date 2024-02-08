import * as Styles from "./styles";
import { useRouteError } from "react-router-dom";

const NotFoundPageComponent = () => {
  const error = useRouteError();

  return (
    <Styles.NotFoundPageComponent>
      <Styles.Text>Йой... Такої сторінки не існує! 😓</Styles.Text>
      <Styles.ErrorText>
        {(error as { statusText?: string })?.statusText ||
          (error as Error)?.message}
      </Styles.ErrorText>
      <Styles.StyledLink to="/">Повернутись на головну</Styles.StyledLink>
    </Styles.NotFoundPageComponent>
  );
};

export default NotFoundPageComponent;
