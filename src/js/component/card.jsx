import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
  const { store, actions } = useContext(Context);
  const handleDelete = () => {
    actions.deleteContact(props.id);
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="cards">
        <h3 className="text-left">{props.nombre}</h3>
        <p className="text-left">
         
          {props.email}
        </p>
        <p className="text-left">{props.phone}</p>
        <p className="text-left">{props.address}</p>
        <Link to={`/editForm/${props.id}`}>
          <button
            type="button"
            style={{ width: "80px" }}
            class="btn btn-outline-primary"
          >
            Edit <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </Link>

        <button
          onClick={() => {
            handleDelete();
          }}
          type="button"
          style={{ marginLeft: "10px" }}
          class="btn btn-outline-danger"
        >
          Delete <i class="fa-solid fa-radiation"></i>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
