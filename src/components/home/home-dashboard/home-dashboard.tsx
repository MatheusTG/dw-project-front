import { getStudents } from '@/actions/data/students/get-students';
import { GraduationCap, Wallet } from 'lucide-react';
import BarChartComponent from './bar-chart/bar-chart';
import Card from './card/card';
import styles from './home-dashboard.module.css';
import LineChartComponent from './line-chart';

export default async function HomeDashboard() {
  const { data: students } = await getStudents();

  return (
    <section className={styles.dashboard}>
      <div className={styles.cards}>
        <Card
          icon={<GraduationCap strokeWidth={1.5} size={32} />}
          label={'Alunos'}
          value={students ? students.length : 0}
          color="#e6e6e6"
          backgroundColor="darkred"
        />
        <Card
          icon={<GraduationCap strokeWidth={1.5} size={32} />}
          label={'Cursos'}
          value={5}
          color="#e6e6e6"
          backgroundColor="purple"
        />
        <Card
          icon={<Wallet strokeWidth={1.5} size={32} />}
          label={'Pagamentos'}
          value={3100}
          color="#e6e6e6"
          backgroundColor="darkblue"
        />
        <Card
          icon={<GraduationCap strokeWidth={1.5} size={32} />}
          label={'Média das Notas'}
          value={6.2}
          color="#e6e6e6"
          backgroundColor="#9000ce"
        />
      </div>
      <div className={styles.charts}>
        <div className={styles.chart_container}>
          <span className={styles.chart_header}>Notas</span>
          <BarChartComponent />
        </div>
        <div className={styles.chart_container}>
          <span className={styles.chart_header}>Notas</span>
          <LineChartComponent />
        </div>
      </div>
    </section>
  );
}
