import { FC, ReactNode } from "react";
import * as Styles from "./styles";
import Footer from "../components/common/footer/footer.component";
import Header from "../components/common/header/header.component";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <Styles.MainContainer>{children}</Styles.MainContainer>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
