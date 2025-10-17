import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faUpDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Navbar from "./components/nav";
import "./index.css";
import "./style/app.css"
import "./style/dialog.css"

function App() {

  const [spent, setSpent] = useState(0);
  const [tag, setTag] = useState("");
  const [saldoAtual, setSaldoAtual] = useState(0);
  const [saldoEntrada, setSaldoEntrada] = useState(0);
  const [saldoDespesa, setSaldoDespesa] = useState(0);


  const onHandleSpentChange = (value: number) => {
    setSpent(value);
    // console.log("Valor vindo do Dialog:", value);
    // console.log("tag veio", tag);

    switch (tag) {
      case "receita":
        setSaldoEntrada(saldoEntrada + value)
        setSaldoAtual(saldoAtual + value)
        break;

      case "despesa":
        setSaldoDespesa(saldoDespesa - value)
        setSaldoAtual(saldoAtual - value)
        break;

      default:
        break;
    }


  };





  const onHandleTagChange = (value: string) => {
    setTag(value)
    console.log("Tag vindo do Dialog: ", value);

  }

  return (
    <>
      <div id="main">

        <Navbar onSpentChange={onHandleSpentChange} onHandleTagChange={onHandleTagChange} />

        <main>
          <div className="containers-main" id="dashboard">
            <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>
            <div id="container-infos">
              <div className="dashboard-infos">
                <div>
                  <h3>Saldo Atual</h3>
                  <p>R$ {saldoAtual}</p>
                </div>
                <div>
                  <button className="btn-dashboard" id="btn-saldo">
                    <FontAwesomeIcon icon={faUpDown} />
                  </button>
                </div>
              </div>

              <div className="dashboard-infos">
                <div>
                  <h3>Entradas</h3>
                  <p>R$ {saldoEntrada}</p>
                </div>
                <div>
                  <button className="btn-dashboard" id="btn-receitas">
                    <FontAwesomeIcon icon={faArrowUp} />
                  </button>
                </div>
              </div>

              <div className="dashboard-infos">
                <div>
                  <h3>Despesas</h3>
                  <p>R$ {saldoDespesa}</p>
                </div>
                <div>
                  <button className="btn-dashboard" id="btn-despesas">
                    <FontAwesomeIcon icon={faArrowDown} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="infos">
            <div id="container-grafic">
              <div className="containers-main" id="graficoPrincipal">
                <h1>GRÁFICO</h1>
              </div>

              <div>
                <div className="containers-main" id="listGastosFixos">
                  <p>Lista de Gastos Fixos:</p>

                  <table>
                    <tbody>
                      <tr>
                        <td>Água</td>
                        <td>Luz</td>
                        <td>Carro</td>
                        <td>Internet</td>
                        <td>Aluguel</td>
                      </tr>
                      <tr>
                        <td>R$ 125,36</td>
                        <td>R$ 90,84</td>
                        <td>R$ 990,42</td>
                        <td>R$ 129,90</td>
                        <td>R$ 1.500,00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="containers-main" id="listEntrada">
              <p>Lista de Entradas</p>
              <table>

                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Valor</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Salário</td>
                    <td>R$ 3547,63</td>
                  </tr>
                  <tr>
                    <td>Aposta</td>
                    <td>R$ 547,63</td>
                  </tr>
                  <tr>
                    <td>Horas Extras</td>
                    <td>R$ 37,63</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="containers-main" id="listGastos">
              <p>Lista de Saídas</p>
              <table>

                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Valor</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Rolê</td>
                    <td>R$ 47,63</td>
                  </tr>
                  <tr>
                    <td>Lanche</td>
                    <td>R$ 57,63</td>
                  </tr>
                  <tr>
                    <td>Roupa RENNER</td>
                    <td>R$ 480,63</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
