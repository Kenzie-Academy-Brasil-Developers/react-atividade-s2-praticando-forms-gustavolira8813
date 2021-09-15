import Form from "../Form";
import "./style.css";
function User({ info, setCard, setForm }) {
  const showForm = () => {
    if (info !== "") {
      setCard(false);
      setForm(true);
    }
  };
  return (
    <>
      <h2>Dados Obtidos no formulário</h2>

      <table>
        <tr>
          <th>Info</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Username</td>
          <td>{info.user}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{info.name}</td>
        </tr>
        <tr>
          <td>CPF</td>
          <td>{info.cpf}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{info.email}</td>
        </tr>
        <tr>
          <td>Password</td>
          <td>{info.password}</td>
        </tr>
      </table>

      <button className="btnBack" onClick={showForm}>
        Voltar
      </button>
    </>
  );
}
export default User;
