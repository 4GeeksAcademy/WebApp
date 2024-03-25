const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      contact: {},
    },
    actions: {
      creatContact: (name, email, address, phone) => {
        fetch("https://playground.4geeks.com/apis/fake/contact/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: name,
            email: email,
            agenda_slug: "manuelgr",
            address: address,
            phone: phone,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log("Error", error));
      },

      getContacts: () => {
        fetch("https://playground.4geeks.com/apis/fake/contact/agenda/manuelgr")
          .then((response) => response.json())
          .then((data) => {
            setStore({ contacts: data });
            console.log(data);
          })

          .catch((error) => console.log("Error:", error));
      },
      getSingleContact: (id) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
          .then((response) => response.json())
          .then((data) => setStore({ contact: data }))
          .catch((error) => console.log("Error:", error));
      },

      editContact: (name, email, address, phone, id) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: name,
            email: email,
            agenda_slug: "manuelgr",
            address: address,
            phone: phone,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log("Error", error));
      },
      deleteContact: (id) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            response.json();
            if (response.status === 201) {
              getActions().getContacts();
            }
          })
          .then((data) => data)
          .catch((error) => console.log("Error", error));
      },
    },
  };
};

export default getState;
