import * as React from "react";

interface Props {
  userName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export const NameEditComponent: React.FC<Props> = (props) => (
  <>
    <label>Update name:</label>
    <input value={props.userName} onChange={props.onChange}/>
    <button  onClick={props.onClick}>click me!</button>
  </>
);
