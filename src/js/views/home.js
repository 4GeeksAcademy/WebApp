import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getContacts();
  }, []);

  return (
    <div className="text-center">
      {store.contacts.map((item, index) => {
        return (
          <Card
            key={index}
            id={item.id}
            nombre={item.full_name}
            email={item.email}
            address={item.address}
            phone={item.phone}
          />
        );
      })}
     
    </div>
  );
};
