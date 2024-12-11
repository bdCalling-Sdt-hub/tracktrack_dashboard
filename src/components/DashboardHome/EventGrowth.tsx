import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler } from "chart.js";
import { useRef } from "react";
import { Line } from 'react-chartjs-2';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler)
const EventGrowth = () => {
    const canvasRef = useRef(null);
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [ // Fix the typo here
            {
                label: 'Overview data',
                data: [2, 2, 6, 8, 7, 9, 6, 4, 5, 9, 6, 2],
                borderColor: '#F1714F',
                borderWidth: 0,
                fill: true,
                backgroundColor: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) {
                        return null;
                    }
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom); // Fix typo in createLinearGradient
                    gradient.addColorStop(0, 'rgb(241, 113, 79)');
                    gradient.addColorStop(1, 'rgb(115, 73, 63)');
                    return gradient;
                },
                tension: 0.4,
                pointRadius: 0
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 20,
                },
                grid: {
                    display: false,
                },
            },
            x: {
                ticks: {
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            line: {
                borderWidth: 3,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="p-3 bg-[var(--black-200)] rounded">
            <p className="text-base text-[var(--white-600)] font-semibold">Event Growth</p>
            <div className="w-full h-[400px]">
                <Line ref={canvasRef} data={data} options={options} />
            </div>
        </div>
    )
}

export default EventGrowth
