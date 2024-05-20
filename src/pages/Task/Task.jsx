import { Link } from "react-router-dom";
import "./Task.css";
export default function Task() {
  return (
    <div className="table-container">
      <div>
        <div className="container-ajout">
          <button className="ajout">Ajouter</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Description</th>
              <th class="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>.</td>
              <td class="actions">
                <button class="btn edit">Edit</button>
                <button class="btn delete">Delete</button>
                <button class="btn voir">Voir</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="actions">
                <button class="btn edit">Edit</button>
                <button class="btn delete">Delete</button>
                <button class="btn voir">Voir</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="actions">
                <button class="btn edit">Edit</button>
                <button class="btn delete">Delete</button>
                <button class="btn voir">Voir</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}
