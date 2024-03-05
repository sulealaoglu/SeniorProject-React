import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
export default function PrivateRoot({ children }) {
  //oturum açıldıysa yönlendir , oturum açıldıysa childreni return et
  //children : <component> burada yazan her şey </component>
  const user = useAuth();
  if (!user) {
    //oturum açmadı
    return <Navigate to="/" />;
    // bu path login sayfasına aittir, oturum açmadan girdiği için o sayfaya yönlendirdik'
  }
  return children;
}
