'use client';

import { StudentType } from '@/@types/data/student-type';
import { updateStudent } from '@/actions/data/students/update-student';
import { X } from 'lucide-react';
import { Dispatch, SetStateAction, useActionState, useEffect } from 'react';
import styles from './update-student.module.css';

type UpdateStudentProps = { student: StudentType; setOpened: Dispatch<SetStateAction<boolean>> };

export default function UpdateStudent({ student, setOpened }: UpdateStudentProps) {
  const [state, action, pending] = useActionState(updateStudent, { ok: false, data: null, message: null });

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
          <h3>Atualização de Aluno</h3>
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
          <div className={styles.modal_content}>
            <div className={styles.form}>
              <div>
                <label className={styles.input_label} htmlFor="name">
                  Nome
                </label>
                <input className={styles.input} type="text" id="name" name="name" defaultValue={student.nome} />
              </div>
              <div>
                <label className={styles.input_label} htmlFor="email">
                  Email
                </label>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  defaultValue={student.email}
                />
              </div>
              <div>
                <label className={styles.input_label} htmlFor="phone_number">
                  Celular
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  defaultValue={student.celular}
                />
              </div>
            </div>
            {!state.ok && state.message}
          </div>
          <div className={styles.modal_footer}>
            <button type="button" onClick={() => setOpened(false)} className={styles.cancel_button}>
              Cancelar
            </button>
            <button disabled={pending} type="submit" className={styles.add_button}>
              {pending ? 'Atualizando...' : 'Atualizar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
