import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler } from "chart.js";
import { useRef } from "react";
import { Line } from 'react-chartjs-2';
import { useGetEventGrowthOverViewQuery } from "../../Redux/api/overViewApis";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler)
const EventGrowth = () => {
    const canvasRef = useRef(null);
    const { data: eventGrowthData, isLoading } = useGetEventGrowthOverViewQuery({ data: 'event', year: 2024 })
    if (isLoading) {
        return <p>..loading</p>
    }
    console.log(eventGrowthData?.data?.monthlyNewEntities);
    const monthlyRegistration = eventGrowthData?.data?.monthlyRegistration || {};
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dataValues = months.map(month => monthlyRegistration[month] || 0);

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Overview data',
                data: dataValues,
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
