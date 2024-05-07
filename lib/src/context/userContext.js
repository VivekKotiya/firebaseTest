const { createContext, Children, useState } = require("react");

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState("Janak");
  const [age, setAge] = useState(59);
  const happyBirthday = () => setAge(age + 1);

  return (
    <UserContext.Provider value={{ name, age, happyBirthday }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
