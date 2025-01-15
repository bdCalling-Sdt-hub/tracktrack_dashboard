import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';
import { useGetUserGrowthOverViewQuery } from '../../Redux/api/overViewApis';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const UseGrowth = () => {
    const { data: growthData, isLoading } = useGetUserGrowthOverViewQuery({ role: 'USER', year: '2024' });

    if (isLoading) {
        return <p>..loading</p>;
    }


    const monthlyRegistration = growthData?.data?.monthlyRegistration || {};
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dataValues = months.map(month => monthlyRegistration[month] || 0);

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Monthly Data',
                data: dataValues,
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
    );
};

export default UseGrowth;
