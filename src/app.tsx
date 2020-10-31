import * as React from "react";
import { getNameOfDeclaration } from "typescript";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

export const App = () => {
  const [name, setName] = React.useState("sathia");

  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const getUsernameState = (event: React.MouseEvent<HTMLInputElement>) => {
   setName('murthi');
  };

  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent userName={name} onChange={setUsernameState} onClick={getUsernameState} />
    </>
  );
};
