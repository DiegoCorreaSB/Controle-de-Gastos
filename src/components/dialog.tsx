import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import cash from "../assets/cash.svg"
import "../index.css";
import "../style/app.css";
import "../style/dialog.css";

interface DialogBoxProps {
    children?: ReactNode;
    triggerText?: string;
    onSpentChange: (value: number) => void;
    onHandleTagChange: (value: string) => void;
}

export function DialogBox({ children, triggerText = "+", onSpentChange, onHandleTagChange }: DialogBoxProps) {

    const dialogRef = useRef<HTMLDialogElement>(null);
    const openDialog = () => dialogRef.current?.showModal();
    const closeDialog = () => dialogRef.current?.close();

    const [spent, setSpent] = useState(Number);
    const [tag, setTag] = useState("");



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpent(+e.target.value);
    };

    const handleTag = (value: string) => {
        setTag(value)
        onHandleTagChange(value)
    }

    const handleSave = () => {
        onSpentChange(spent);
        if (!tag) {
            alert("Seleciona uma TGAS")
        } else {
            onHandleTagChange(tag)
            closeDialog()
        }


    }
    
    return (
        <>
            <button style={{ fontSize: "1.5em" }} onClick={openDialog}>{triggerText}</button>

            <dialog ref={dialogRef}>
                <div id="container-dialog">

                    <img style={{ height: 120, width: 120 }} src={cash} alt="" />

                    <div id="dialog-input">
                        <input
                            type="number"
                            value={spent} 
                            placeholder="Digite o valor..."
                            onChange={handleChange}
                        />
                        <button type="button" className="btn-tags">
                            {tag}
                            <span >
                                <FontAwesomeIcon icon={faCaretDown} />
                            </span>
                            <ul id="menu" className="menu">
                                <li onClick={() => handleTag("despesa")}>Despesa</li>
                                <li onClick={() => handleTag("receita")}>Receita</li>
                            </ul>
                        </button>
                    </div>

                    {children}

                    <div id="dialog-buttons">
                        <button
                            onClick={() => {
                                closeDialog()
                                handleSave()
                                setTag("")
                                setSpent(0)
                            }}
                            id="button-save"
                            className="button-options"
                            >
                            Salvar
                        </button>   
                        <button
                            onClick={closeDialog}
                            id="button-close"
                            className="button-options">
                            Fechar
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
}
