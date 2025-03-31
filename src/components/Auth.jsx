import { auth, googleProvider } from "../configs/firebase";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = (props) => {
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const userLogin = await signInWithPopup(auth, googleProvider);
      cookies.set("auth-token", userLogin.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.err(err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={signInWithGoogle}
        className="border-4 border-blue-400 rounded-md p-2"
      >
        Sign in With Google
      </button>
    </div>
  );
};

export default Auth;
