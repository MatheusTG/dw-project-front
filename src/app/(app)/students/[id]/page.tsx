import { getStudents } from '@/actions/data/students/get-students';
import styles from '../students.module.css'
import { MailCheck, PhoneCall } from 'lucide-react';

type StudentPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StudentPage({ params }: StudentPageProps) {
  const { id } = await params;
  const { ok, data: students, message } = await getStudents(id);

  if (!ok || !students?.length) return <div>{message || `Nenhum aluno como o id "${id}" encontrado.`}</div>;

  const student = students[0]

  return (
    <div className={styles.studentContainer}>
      <h1 className={styles.studentTitle}>
        {student.nome}
      </h1>

      <div className={styles.studentInfoContainer}>
        <p className={styles.studentInformation}>
          <MailCheck size={20} />
          <span className={styles.studentInfoName}>E-mail:</span> {student.email}
        </p>
        <p className={styles.studentInformation}>
          <PhoneCall size={20} />
          <span className={styles.studentInfoName}>Celular:</span> {student.celular}
        </p>
      </div>
    </ div>
  );
}
