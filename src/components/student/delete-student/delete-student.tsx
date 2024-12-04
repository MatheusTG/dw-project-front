import { StudentType } from '@/@types/data/student-type';
import { deleteStudent } from '@/actions/data/students/delete-student';
import { X } from 'lucide-react';
import { Dispatch, SetStateAction, useActionState, useEffect } from 'react';
import styles from './delete-student.module.css';

type DeleteStudentProps = { student: StudentType; setOpened: Dispatch<SetStateAction<boolean>> };

export default function DeleteStudent({ student, setOpened }: DeleteStudentProps) {
  const [state, action, pending] = useActionState(deleteStudent, { ok: false, data: null, message: null });

  useEffect(() => {
    if (state.ok) setOpened(false);
  }, [state, setOpened]);

  return (
    <div style={{ position: 'fixed' }} onClick={e => e.stopPropagation()}>
      <div
        className={styles.bg}
        onClick={e => {
          e.stopPropagation();
          setOpened(false);
        }}
      />
      <div className={styles.update_student_modal}>
        <div className={styles.modal_header}>
          <div>
            <h3>Remover aluno {student.id} ?</h3>
            <p>{student.nome}</p>
          </div>
          <button onClick={() => setOpened(false)} className={styles.close_button}>
            <X color="#333" size={16} />
          </button>
        </div>
        <form
          action={formData => {
            formData.set('id', student.id);
            return action(formData);
          }}
        >
          <div className={styles.modal_content}>{!state.ok && state.message}</div>
          <div className={styles.modal_footer}>
            <button type="button" onClick={() => setOpened(false)} className={styles.cancel_button}>
              Cancelar
            </button>
            <button disabled={pending} type="submit" className={styles.add_button}>
              {pending ? 'Excluindo...' : 'Confirmar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
