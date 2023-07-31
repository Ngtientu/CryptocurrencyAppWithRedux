import React from 'react'
import { Line } from 'react-chartjs-2'
import { Row, Col, Typography } from 'antd'
import Chart from 'chart.js/auto';
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    //Data truc Y
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
    }

    //Thong tin cho bieu do:
    const data = {
        labels: coinTimestamp, //data cho truc Y
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#225bbe',
                borderColor: '#225bbe',
            },
        ],
    };
    //Cau hinh cho chart
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,  //truc y bat dau tu 0. ko am
                    }
                }
            ]
        }
    }

    return (
        <>
            <Row className="chart-header">
                <p> {coinName} Price Chart </p>
                <Col className='price-container'>
                    <Title level={5} className='price-change '>
                        Change: {coinHistory?.data?.change}%
                    </Title>
                    <Title level={5} className='current-price'>
                        Current {coinName} Price: $ {currentPrice}
                    </Title>
                </Col>
            </Row>
            {/* Render chart: */}
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart;