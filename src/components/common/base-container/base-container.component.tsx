import { FC, ReactNode } from "react";

import * as Styles from "./styles";

interface BaseContainerProps {
  children: ReactNode;
}

const BaseContainer: FC<BaseContainerProps> = ({ children }) => {
  return <Styles.BaseContainer>{children}</Styles.BaseContainer>;
};

export default BaseContainer;
