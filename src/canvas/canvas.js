import { Line } from 'react-chartjs-2';
import React from 'react'
import { Chart, registerables } from 'chart.js';
import './canvas.css';
Chart.register(...registerables);

export default function Canvas({ x, funcY, fourY, ...props }) {

    const chartData = {
        labels: x,
        datasets: [
            {
                label: 'Function',
                data: funcY,
                borderColor: 'rgba(0, 0, 255, 1)',
                backgroundColor: 'rgba(0, 0, 255, 0.3)',
            },
            {
                label: 'Fourier',
                data: fourY,
                borderColor: 'rgba(255, 0, 0, 1)',
                backgroundColor: 'rgba(255, 0, 0, 0.3)',
            }
        ]
    };

    return (
        <div className='canvas'>
        <Line data={chartData} {...props}/>
        </div>    
        );
}
