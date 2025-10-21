import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "../style/app.css"
import "../style/GraficGeral.css"

ChartJS.register();

interface GraficGeralProps {
  onSaldoEntrada: number;
  onSaldoDespesa: number;
}

export function GraficGeral({onSaldoEntrada, onSaldoDespesa} : GraficGeralProps) {


    const data = {
        labels: [
            'Receita',
            'Despesa',
        ],
        datasets: [{
            label: "Gastos (R$)",
            data: [onSaldoEntrada, onSaldoDespesa],
            backgroundColor: ["#01a738", "#9a0404"],
            hoverOffset: 4
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom" as const,
            }
        },
    };
 

    return (
        <div className="grafic" >
            <Doughnut data={data} options={options} />
        </div>
    );
}
