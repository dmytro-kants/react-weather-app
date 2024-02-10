import * as Styles from "./styles";
import { useRouteError } from "react-router-dom";

const NotFoundComponent = () => {
  const error = useRouteError();

  return (
    <Styles.NotFoundComponent>
      <Styles.Text>Йой... Такої сторінки не існує! 😓</Styles.Text>
      <Styles.ErrorText>
        {(error as { statusText?: string })?.statusText ||
          (error as Error)?.message}
      </Styles.ErrorText>
      <Styles.StyledLink to="/">Повернутись на головну</Styles.StyledLink>
    </Styles.NotFoundComponent>
  );
};

export default NotFoundComponent;
