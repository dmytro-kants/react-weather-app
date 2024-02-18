import { useNavigate } from "react-router-dom";
import BaseContainer from "../../components/common/base-container/base-container.wrapper";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";
import AuthButton from "../../components/common/buttons/auth-button/auth-button.component";
import { toast } from "react-toastify";
import { useTranslations } from "../../hooks/useTranslations";
import { useLogoutUserMutation } from "../../store/api/auth/auth.api";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useAppSelector((state) => state.authReducer);
  const { t } = useTranslations();
  const [logoutUser, { isError, isSuccess, error }] = useLogoutUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(t["logout.success"]);
    }
    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error(t["logout.error"], {
          position: "top-right",
        });
      }
    }
  }, [isError, isSuccess, error, t]);
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <BaseContainer>
      <AuthButton type="logout" handleClick={() => logoutUser({ user })} />
    </BaseContainer>
  );
};

export default UserProfilePage;
