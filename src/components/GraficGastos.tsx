// GraficGastos.tsx
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

ChartJS.register();

export const GraficGastos = () => {
    const data = {
        labels: ["Aluguel", "Alimentação", "Transporte", "Lazer", "Outros"],
        datasets: [
            {
                label: "Gastos (R$)",
                data: [1200, 80, 300, 450, 200],
                backgroundColor: [
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                ],
                borderColor: [
                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(153, 102, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
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
        <div className="grafic">
            <Bar data={data} options={options} />
        </div>
    );
};
