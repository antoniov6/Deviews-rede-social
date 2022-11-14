import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ToastError, ToastSucess } from "../components/ToastStyle/styles";
import api from "../services/api";

interface AuthProps {
  children: ReactNode;
}

interface UserDataLogin {
  email: string;
  password: string;
}

export interface UserDataRegister {
  name: string;
  username: string;
  email: string;
  password: string;
  bio: string;
  techs?: string[];
  id?: number;
  img?: string;
}
interface AuthProvidersData {
  signIn: (userDataLogin: UserDataLogin) => void;
  signUp: (userData: UserDataRegister) => void;
  user: UserDataRegister;
  logOut: () => void;
  userInfo: UserDataRegister;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isToken: string;
}

export const AuthContext = createContext<AuthProvidersData>(
  {} as AuthProvidersData
);

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<UserDataRegister>({} as UserDataRegister);
  const [loading, setLoading] = useState(true);

  const [userInfo, setUserInfo] = useState<UserDataRegister>(
    {} as UserDataRegister
  );
  const [isToken, setIsToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@deviews:token");
      const userId = localStorage.getItem("@deviews:id");

      if (token) {
        try {
          const { data } = await api.get(`/users/${userId}`);
          setUser(data);
          setIsToken(token);
          navigate("/dashboard", { replace: true });
        } catch (err) {
          console.log(err);
        }
      }
    };
    loadUser();
  }, []);

  const signIn = (data: UserDataLogin) => {
    api
      .post("/login", data)
      .then((response) => {
        const { user, accessToken: token } = response.data;
        console.log(token);
        setUserInfo(response.data.user);
        setUser(user);

        window.localStorage.clear();
        localStorage.setItem("@deviews:token", token);
        localStorage.setItem("@deviews:id", user.id);
        setIsToken(token);
        console.log(isToken);
        toast.success("Bem vindo(a)!", ToastSucess);

        navigate("/dashboard", { replace: true });
      })
      .catch(() => {
        toast.error("Email e/ou senha inválidos.", ToastError);
      });
  };

  const signUp = (data: UserDataRegister) => {
    api
      .post("/register", data)
      .then(() => {
        toast.success("Conta criada com sucesso!", ToastSucess);
        navigate("/login", { replace: true });
      })
      .catch(() =>
        toast.error("Ops! Já existe um cadastro com este email.", ToastError)
      );
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        user,
        logOut,
        userInfo,
        loading,
        setLoading,
        isToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
