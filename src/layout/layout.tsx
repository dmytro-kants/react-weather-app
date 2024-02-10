import { FC, ReactNode, useEffect } from "react";
import * as Styles from "./styles";
import Footer from "../components/common/footer/footer.component";
import Header from "../components/common/header/header.component";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { checkAuthAsync } from "../store/slices/auth.slice";
import MainSpinner from "../components/common/loading-spinners/main-spinner.component";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const userAuthCheck = useAppSelector(
    (state) => state.authReducer.userAuthCheck
  );
  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

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
