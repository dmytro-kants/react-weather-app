import { FC, ReactNode } from "react";
import Layout from "../../../layout/layout";

interface RouterElementProps {
  page: ReactNode;
}

const RouterElement: FC<RouterElementProps> = ({ page }) => {
  return <Layout>{page}</Layout>;
};

export default RouterElement;
