import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse, faList } from "@fortawesome/free-solid-svg-icons";
import { DialogBox } from "./dialog";

interface NavProps {
  onSpentChange: (value: string) => void;
  onHandleTagChange: (value: string) => void;
  onHandleSaldoReceitaChange: (value: number) => void;
  onHandleSaldoDespesaChange: (value: number) => void;
}

function Navbar({ onSpentChange, onHandleTagChange, onHandleSaldoDespesaChange, onHandleSaldoReceitaChange}: NavProps) {

  return (
    <nav>
      <div id="user">
        <button style={{ fontSize: "1.5em" }}>
          <FontAwesomeIcon className="iconNav" icon={faUser} />
        </button>
      </div>

      <DialogBox triggerText="+" onSpentChange={onSpentChange} onHandleTagChange={onHandleTagChange} onSaldoDespesaChange={onHandleSaldoDespesaChange} onSaldoReceitaChange={onHandleSaldoReceitaChange}/>

      <button style={{ fontSize: "1.5em" }}>
        <FontAwesomeIcon className="iconNav" icon={faHouse} />
      </button>
      <button style={{ fontSize: "1.5em" }}>
        <FontAwesomeIcon className="iconNav" icon={faList} />
      </button>
    </nav>
  )
}

export default Navbar