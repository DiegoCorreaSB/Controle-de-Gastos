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
    onSpentChange: (value: string) => void;
    onHandleTagChange: (value: string) => void;
    onSaldoReceitaChange: (value: number) => void;
    onSaldoDespesaChange: (value: number) => void;
}

export function DialogBox({ children, triggerText = "+", onSpentChange, onHandleTagChange, onSaldoReceitaChange, onSaldoDespesaChange }: DialogBoxProps) {

    const dialogRef = useRef <HTMLDialogElement> (null);
    const openDialog = () => dialogRef.current?.showModal();
    const closeDialog = () => dialogRef.current?.close();

    const [spent, setSpent] = useState("");
    const [tag, setTag] = useState("");
    // const [saldoAtual, setSaldoAtual] = useState(0)
    const [saldoEntrada, setEntrada] = useState(0);
    const [saldoDespesa, setDespesa] = useState(0);
    let value = ""
    let spentNumber = 0

    const handleBalance = (value: number) => {
        spentNumber = value

        switch (tag) {
            case "receita":
                setEntrada(saldoEntrada + spentNumber)
                value = spentNumber
                onSaldoReceitaChange(value)
                break;

            case "despesa":
                setDespesa(saldoDespesa + spentNumber)
                value = spentNumber
                onSaldoDespesaChange(spentNumber)
                break;

            default:
                break;
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        value = e.target.value;
    };

    const handleTag = (value: string) => {
        setTag(value)
        onHandleTagChange(value)

    }

    const handleSave = () => {
        setSpent(value);
        onSpentChange(value);

        handleBalance
        closeDialog()
    }

    return (
        <>
            <button style={{ fontSize: "1.5em" }} onClick={openDialog}>{triggerText}</button>

            <dialog ref={dialogRef}>
                <div id="container-dialog">

                    <img style={{ height: 120, width: 120 }} src={cash} alt="" />

                    <div id="dialog-input">
                        <input
                            type="text"
                            placeholder="Digite o valor..."
                            onChange={handleChange}
                        />
                        <button type="button" className="btn-tags">
                            Tags
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
                                handleSave()
                            }}
                            id="button-save"
                            className="button-options">
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
