import * as React from "react";


interface Props {
  title: string;
  year: number;
  imdbID: string;
  type:string;
  poster:string;
}


export const MovieDetail :  React.FC<Props> = (props) => 
(
  <>
    <tr>
        <td>
      <img src={props.poster}/>
      </td>
      <td>
              <table>
                <tr>
                  <td>
                  Title
                  </td>
                  <td>
                  {props.title}
                  </td>
                </tr>
                <tr>
                  <td>
                  Year
                  </td>
                  <td>
                  {props.year}
                  </td>
                </tr>
                <tr>
                  <td>
                  Year
                  </td>
                  <td>
                  {props.type}
                  </td>
                </tr>
              </table>
      </td>

    </tr>
    </>
)

