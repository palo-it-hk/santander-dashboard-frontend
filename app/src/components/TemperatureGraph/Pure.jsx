import React from 'react'
import { ComposedChart, Line, Bar, Tooltip, CartesianGrid, YAxis, XAxis, ResponsiveContainer } from 'recharts'
import moment from 'moment'

const customToolTipStyles = {
  width: '180px',
  height: 'auto',
  fontFamily: 'Rubik',
  letterSpacing: '0.8px',
  borderRadius: '5px',
  backgroundColor: '#f1f4f8',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
  textAlign: 'left',
  padding: '0.5rem',
  zIndex: '99',
  fontSize: '10px',
  fontWeight: '400',
  lineHeight: '1.5'
}

const CustomizedAxisTick = props => {
  const {x, y, payload} = props

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor='end' fill='#666' style={{fontFamily: 'Rubik', fontSize: 12}} transform='rotate(-35)'>{payload.value}</text>
    </g>
  )
}

const customToolTip = ({label, payload}) => {
  if (!payload.length) return
  const {date, totalBikesOut, avg_air_temperature} = payload[0].payload
  const temp = avg_air_temperature.toFixed(2).toString()
  const formattedDate = moment(date).format('dddd, DD, MMMM YYYY')
  return (
    <div style={customToolTipStyles}>
      <p style={{fontSize: 10, fontWeight: 400}}>{formattedDate}</p>
      <span style={{color: '#D54435'}}>
        {`${totalBikesOut} Total Usage`}
      </span>
      <span style={{color: '#A8AAB6'}}>{`${' '}|`}</span>
      <span style={{color: '#1dacbd'}}>{`${' '}${temp}°C`}</span>
    </div>
  )
}

class TemperatureGraph extends React.Component {
  componentDidMount () {
    this.props.totalBikeUsageAndWeatherActionSaga()
  }
  render () {
    const {data} = this.props
    return (
      <div>
        <div style={{height: '500px', padding: '0 20px', background: '#f1f4f8'}}>
          <ResponsiveContainer minWidth={1024}>
            <ComposedChart data={data} margin={{bottom: 100}}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey={v => v.date} tick={<CustomizedAxisTick />} interval={0} />
              <YAxis yAxisId='bar' tick={{fontFamily: 'Rubik', fontSize: 12}} orientation='right' />
              <YAxis yAxisId='line' tick={{fontFamily: 'Rubik', fontSize: 12}} />
              {data.length > 0 && <Tooltip content={customToolTip} />}
              <Bar
                yAxisId='bar'
                dataKey={v => parseInt(v.totalBikesOut)}
                maxBarSize={50}
                fill='#D54435'
              />
              <Line
                yAxisId='line'
                dataKey={v => v.avg_air_temperature}
                type='monotone'
                stroke='#1dacbd'
                strokeWidth={3}
                dot={false}
                activeDot={{ stroke: '#1dacbd', r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
}

export default TemperatureGraph