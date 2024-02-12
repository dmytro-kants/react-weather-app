import { useEffect, useState } from "react";
import BaseContainer from "../../components/common/base-container/base-container.component";
import $api from "../../utils/api";

const MainPage = () => {
  const [items, setItems] = useState<any>([]);
  const handleClick = async () => {
    try {
      const result = await $api.get("http://localhost:5000/api/getAllUsers");
      setItems(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <BaseContainer>
      <div onClick={handleClick}>MainPage</div>
    </BaseContainer>
  );
};

export default MainPage;
