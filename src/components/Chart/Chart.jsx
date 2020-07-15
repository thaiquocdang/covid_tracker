import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'

const Chart = (props) => {
  const [dailyData, setDailyData] = useState([])
  // console.log(dailyData, 'daily Data test');

  const data = props.data;
  const country = props.country;

  useEffect(() => {
    const fetchAPI = async () => {
      //better to do as below fuction
      // const dailyData = await fetchDailyData();
      // setDailyData(dailyData);

      setDailyData(await fetchDailyData());
    }


    fetchAPI();
  }, []);

  const lineChart = (
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map((item) => item.date),
          datasets: [{
            data: dailyData.map((item) => item.confirmed),
            labels: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((item) => item.deaths),
            labels: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          }],
        }}
      />) : null
  );

  // if (data) {
  //   console.log(data, '222');
  // }

  const barChart = (
    (data) ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value]
          }]
        }}
        option={{
          lengend: { display: false },
          title: { display: true, text: `Current state in ${country}` }
        }}
      />
    ) : null
  )

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;