import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const Rechart = () => {
  const studentData = [
    { student: 'Student 1', math: 85, chemistry: 78, biology: 92 },
    { student: 'Student 2', math: 76, chemistry: 85, biology: 88 },
    { student: 'Student 3', math: 90, chemistry: 82, biology: 95 },
    { student: 'Student 4', math: 65, chemistry: 70, biology: 75 },
    { student: 'Student 5', math: 88, chemistry: 92, biology: 84 },
    { student: 'Student 6', math: 70, chemistry: 65, biology: 80 },
    { student: 'Student 7', math: 82, chemistry: 77, biology: 90 },
    { student: 'Student 8', math: 79, chemistry: 81, biology: 72 },
    { student: 'Student 9', math: 95, chemistry: 89, biology: 87 },
    { student: 'Student 10', math: 68, chemistry: 74, biology: 78 },
  ];

  return (
    <div>
      <h3 className="text-3xl font-semibold mb-8">Student Result Data</h3>
      <LineChart width={700} height={600} data={studentData}>
        <XAxis dataKey={`student`}></XAxis>
        <YAxis></YAxis>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
        <Line dataKey={`math`} type={'monotone'} stroke="red"></Line>
        <Line dataKey={`chemistry`} type="monotone" stroke="blue"></Line>
        <Line dataKey="biology" type="monotone" stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default Rechart;
