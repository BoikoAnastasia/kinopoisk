import { Link, useNavigate } from "react-router-dom";
import "./HocsStyles.css";

export const Header = () => {
  const navigation = useNavigate();

  return (
    <div className="header__content">
      <h3 className="logo" onClick={()=>navigation("/")}>Просмотр фильмов</h3>
      <Link className="header-link" to={"/favorite"}>Ваши избранные фильмы</Link>
    </div>
  );
};
