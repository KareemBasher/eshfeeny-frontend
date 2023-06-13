import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { sales, weekDays, months, years } from './data'
import RadioSelected from '../../../../assets/manufacturer/RadioSelected.svg'
import RadioUnselected from '../../../../assets/manufacturer/RadioUnselected.svg'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)

const Chart = () => {
  const [chosenFormat, setChosenFormat] = useState('المبيعات الأسبوعية')
  const [label, setLabel] = useState(weekDays)
  const [chartData, setChartData] = useState([])

  const parseDataWeekly = () => {
    const data = sales.reduce(
      (acc, curr) => {
        const index = weekDays.indexOf(curr.dayOfWeek)
        if (index !== -1) {
          acc[index] += curr.sales
        }
        return acc
      },
      [0, 0, 0, 0, 0, 0, 0]
    )

    return data
  }

  const parseDataMonthly = () => {
    const data = sales.reduce(
      (acc, curr) => {
        const date = new Date(curr.date)
        const index = date.getMonth()
        if (index !== -1) {
          acc[index] += curr.sales
        }
        return acc
      },

      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    )

    return data
  }

  const parseDataYearly = () => {
    const data = sales.reduce(
      (acc, curr) => {
        const date = new Date(curr.date)
        const index = (date.getFullYear() % 4) - 1
        if (index !== -1) {
          acc[index] += curr.sales
        }
        return acc
      },
      [0, 0, 0]
    )

    return data
  }

  useEffect(() => {
    switch (chosenFormat) {
      case 'المبيعات الأسبوعية':
        setChartData(parseDataWeekly())
        setLabel(weekDays)
        break
      case 'المبيعات الشهرية':
        setChartData(parseDataMonthly())
        setLabel(months)
        break
      case 'المبيعات السنوية':
        setChartData(parseDataYearly())
        setLabel(years)
        break
      default:
        setChartData(parseDataWeekly())
        setLabel(weekDays)
    }
  }, [chosenFormat])

  const data = {
    labels: label,
    datasets: [
      {
        label: 'المبيعات',
        data: chartData,
        backgroundColor: 'rgba(218, 215, 254, 0.8)',
        borderWidth: 1,
        borderRadius: 100,
        barPercentage: 0.4,
        hoverBackgroundColor: 'rgba(67, 57, 242, 0.9)',
        borderSkipped: false
      }
    ]
  }

  ChartJS.defaults.font.size = 12
  ChartJS.defaults.font.family = 'Cairo'

  const options = {
    scales: {
      x: {
        grid: {
          offset: false
        }
      },
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <div className="flex justify-between max-h-[300px]">
      <div className="text-right">
        <p className="text-[26px]">المبيعات</p>

        <div className="text-right my-10 text-[22px] space-y-5">
          <button
            className="flex items-center"
            onClick={() => setChosenFormat('المبيعات الأسبوعية')}
          >
            <img
              src={`${chosenFormat === 'المبيعات الأسبوعية' ? RadioSelected : RadioUnselected}`}
              alt="Radio button"
              className="ml-2"
            />
            <p>المبيعات الأسبوعية</p>
          </button>
          <button className="flex items-center" onClick={() => setChosenFormat('المبيعات الشهرية')}>
            <img
              src={`${chosenFormat === 'المبيعات الشهرية' ? RadioSelected : RadioUnselected}`}
              alt="Radio button"
              className="ml-2"
            />
            <p>المبيعات الشهرية</p>
          </button>
          <button className="flex items-center" onClick={() => setChosenFormat('المبيعات السنوية')}>
            <img
              src={`${chosenFormat === 'المبيعات السنوية' ? RadioSelected : RadioUnselected}`}
              alt="Radio button"
              className="ml-2"
            />
            <p>المبيعات السنوية</p>
          </button>
        </div>
      </div>

      <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default Chart
