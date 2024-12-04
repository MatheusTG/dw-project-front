'use client';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Aluno A',
    nota: 4000,
  },
  {
    name: 'Aluno B',
    nota: 3000,
  },
  {
    name: 'Aluno C',
    nota: 2000,
  },
  {
    name: 'Aluno D',
    nota: 2780,
  },
  {
    name: 'Aluno E',
    nota: 1890,
  },
  {
    name: 'Aluno F',
    nota: 2390,
  },
  {
    name: 'Aluno G',
    nota: 3490,
  },
];

export default function LineChartComponent() {
  return (
    <ResponsiveContainer width={'100%'} height={320} maxHeight={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="nota" fill="#6055ce" />
      </LineChart>
    </ResponsiveContainer>
  );
}
