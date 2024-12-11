
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale);
const UseGrowth = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Data',
                data: [12, 23, 15, 12, 15, 16, 18, 19, 10, 21, 13, 16],
                backgroundColor: '#F1714F',
                borderRadius: 5,
            },
        ],
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 200,
                },
                grid: {
                    display: false,
                },
            },
            x: {
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
        responsive: true,
        maintainAspectRatio: false,
    };
    return (
        <div className="p-3 bg-[var(--black-200)] rounded">
            <p className="text-base text-[var(--white-600)] font-semibold">User Growth</p>
            <div className="w-full h-[400px]">
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default UseGrowth
