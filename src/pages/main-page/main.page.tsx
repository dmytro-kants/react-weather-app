import { useGetAllUsersQuery } from "../../store/api/api/auth.api";
import BaseContainer from "../../components/common/base-container/base-container.wrapper";

const MainPage = () => {
  const { data } = useGetAllUsersQuery(null);
  return (
    <BaseContainer>
      <div>MainPage</div>
      {data &&
        data.map((e: any) => {
          return <p key={e.email}>{e.email}</p>;
        })}
    </BaseContainer>
  );
};

export default MainPage;
