import { FC, ReactNode, useEffect } from "react";
import * as Styles from "./styles";
import Footer from "../components/common/footer/footer.component";
import Header from "../components/common/header/header.component";
import MainSpinner from "../components/common/loading-spinners/main-spinner.component";
import { useAuth } from "../hooks/useAuth";
import { useWhyDidYouUpdate } from "ahooks";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { userAuthCheck, handleRefreshToken } = useAuth();
  useWhyDidYouUpdate("Layout", {
    userAuthCheck,
    handleRefreshToken,
    children,
  });
  useEffect(() => {
    handleRefreshToken();
  }, [handleRefreshToken]);

  return !userAuthCheck ? (
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
