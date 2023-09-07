import React, { useState,useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import {
    ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Legend,
	Tooltip
  } from "recharts";
  import AdminService from '../../Services/AdminService';
  import { useParams } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';


export default function Deiofficerreport () {
	const { id } = useParams();
	
	
	
	/*const [data, setdataDetails] = useState([]);
	
		useEffect(() => {
		AdminService.getAdminDashboardData().then(
		  (response)=>{
			console.log(response);
			setdataDetails(response.data);
		}).catch((err)=>{
		  alert("err : "+err);
		}).catch((error)=>{
		  alert(error);
		});
	}, []); */
	const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 80, color: '#ff0000' },
  { name: 'B', value: 45, color: '#00ff00' },
  { name: 'C', value: 25, color: '#0000ff' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

  
    return (
      <div>
        <h1 className="dashhead">URM Dashboard</h1>
	   
		<h2>Report</h2>
			
			<div className='Deirepo'>
			{/*<ResponsiveContainer className='linechart' width={800} height={90}aspect={3} margin={{top: 5, right:300, left:10 , bottom:10}}>
			<LineChart data={data}>
				<XAxis dataKey="name" />
				<YAxis /><Tooltip  className="Tooltip" contentStyle={{backgroundColor: 'black'}}/><Legend/>
				<Line  type='monotoneX'dataKey="users" strokeWidth={3} stroke='#80FF44'/>
				
			</LineChart>
			</ResponsiveContainer>*/}
			 <PieChart width={400} height={500} >
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
		  animationBegin={0} // Specify when the animation should start (default is 0)
            animationDuration={1000} 
		  
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, '#d0d000')}
      </PieChart>
			</div>
			

			<div className="button-container">
            <Link to={`/Urmdashboard/${id}`} className="button">Back to Dashboard</Link>
			</div>

		
		<Footer/>

	</div>

  
    )
  }

