import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse, faList } from "@fortawesome/free-solid-svg-icons";
import { DialogBox } from "./dialog";

interface NavProps {
  onSpentChange: (value: number) => void;
  onHandleTagChange: (value: string) => void;

}

function Navbar({ onSpentChange, onHandleTagChange}: NavProps) {

  return (
    <nav>
      <div id="user">
        <button style={{ fontSize: "1.5em" }}>
          <FontAwesomeIcon className="iconNav" icon={faUser} />
        </button>
      </div>

      <DialogBox triggerText="+" onSpentChange={onSpentChange} onHandleTagChange={onHandleTagChange} />

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