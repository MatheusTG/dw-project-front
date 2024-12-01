import { getStudents } from '@/actions/data/students/get-students';
import NewStudent from '@/components/student/new-student/new-student';
import Student from '@/components/student/student';
import { Users2 } from 'lucide-react';
import styles from './students.module.css';

export default async function Students() {
  const { ok, data: students, message } = await getStudents();

  if (!ok || !students) return <div>{message}</div>;

  return (
    <div className={styles.students}>
      <div className={styles.title}>
        <h2>
          <Users2 size={20} />
          <span>Lista de Alunos</span>
        </h2>
        <NewStudent />
      </div>
      <div className={styles.students_container}>
        <div className={styles.labels}>
          <span></span>
          <span>Id</span>
          <span>Nome</span>
          <span>Email</span>
          <span>Celular</span>
        </div>
        <div className={styles.students_list}>
          {students.length !== 0 ? (
            students
              .sort((a, b) => Number(a.id) - Number(b.id))
              .map(student => <Student key={student.id} student={student} />)
          ) : (
            <span style={{ marginTop: 8 }}>A lista de alunos está vazia! Tente cadastrar um aluno primeiro.</span>
          )}
        </div>
      </div>
    </div>
  );
}
