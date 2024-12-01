'use client';

import { addStudent } from '@/actions/data/students/add-student';
import { UserPlus, X } from 'lucide-react';
import { useActionState, useEffect, useState } from 'react';
import styles from './new-student.module.css';

export default function NewStudent() {
  const [state, action, pending] = useActionState(addStudent, { ok: false, data: null, message: null });
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (state.ok) setOpened(false);
  }, [state]);

  return (
    <div onClick={e => e.stopPropagation()}>
      <button onClick={() => setOpened(!opened)} className={styles.new_button}>
        <UserPlus size={18} />
        <span>Adicionar novo Aluno</span>
      </button>
      {opened && (
        <div>
          <div
            className="modal_bg"
            onClick={e => {
              e.stopPropagation();
              setOpened(false);
            }}
          />
          <div className={styles.new_student_modal}>
            <div className={styles.modal_header}>
              <h3>Cadastro de Aluno</h3>
              <button onClick={() => setOpened(false)} className={styles.close_button}>
                <X color="#333" size={16} />
              </button>
            </div>
            <form action={action}>
              <div className={styles.modal_content}>
                <div className={styles.form}>
                  <div>
                    <label className={styles.input_label} htmlFor="name">
                      Nome
                    </label>
                    <input className={styles.input} type="text" id="name" name="name" />
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
                    />
                  </div>
                  <div>
                    <label className={styles.input_label} htmlFor="phone_number">
                      Celular
                    </label>
                    <input className={styles.input} type="text" id="phone_number" name="phone_number" />
                  </div>
                </div>
                {!state.ok && state.message}
              </div>
              <div className={styles.modal_footer}>
                <button type="button" onClick={() => setOpened(false)} className={styles.cancel_button}>
                  Cancelar
                </button>
                <button disabled={pending} type="submit" className={styles.add_button}>
                  {pending ? 'Adicionando...' : 'Adicionar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
