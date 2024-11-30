import { getStudents } from '@/actions/data/get-students';
import Student from '@/components/student/student';
import { UserPlus, Users2 } from 'lucide-react';
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
        <button>
          <UserPlus size={18} />
          <span>Adicionar novo Aluno</span>
        </button>
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
          {students.map(student => (
            <Student key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}
