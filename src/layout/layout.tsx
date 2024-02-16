import { FC, ReactNode } from "react";
import * as Styles from "./styles";
import Footer from "../components/common/footer/footer.component";
import Header from "../components/common/header/header.component";
import MainSpinner from "../components/common/loading-spinners/main-spinner.component";
import { useCheckUserQuery } from "../store/api/api/auth.api";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isLoading } = useCheckUserQuery(null);

  return !isLoading ? (
    <>
      <Header />
      <Styles.MainContainer>{children}</Styles.MainContainer>
      <Footer />
    </>
  ) : (
    <MainSpinner />
  );
};

export default Layout;
