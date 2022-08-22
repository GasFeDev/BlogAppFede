import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://mendoza.travel/wp-content/uploads/159.jpg" alt="" />
        <p>
          Malargüe es una ciudad de Mendoza, ubicada a los pies de la cordillera
          de los Andes. Al suroeste está la Caverna de las Brujas, una reserva
          natural con un amplio complejo cavernoso. El humedal con abundantes
          especies de aves de la laguna Llancanelo se encuentra al este. Al sur
          está el área volcánica de la Reserva Provincial La Payunia. El centro
          de esquí Las Leñas está al noroeste. En la ciudad, una espectacular
          pirámide azul alberga la sala de proyección del Planetario de
          Malargüe.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
