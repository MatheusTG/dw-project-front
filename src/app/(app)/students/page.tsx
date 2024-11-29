import { getStudents } from '@/actions/data/get-students';
import Student from '@/components/student/student';
import styles from './students.module.css';

export default async function Students() {
  const { ok, data: students, message } = await getStudents();

  if (!ok || !students) return <div>{message}</div>;

  return (
    <div className={styles.students}>
      <div className={styles.title}>
        <h2>Lista de Alunos</h2>
        <button>Adicionar novo Aluno</button>
      </div>
      <div className={styles.students_container}>
        <div className={styles.students_list}>
          {students.map(student => (
            <Student key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}
