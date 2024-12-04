'use client';

import { ReactNode } from 'react';
import styles from './card.module.css';

type CardProps = {
  icon: ReactNode;
  label: string;
  value: number;
  color?: string;
  backgroundColor?: string;
};

export default function Card({ icon, label, value, color, backgroundColor }: CardProps) {
  return (
    <div className={styles.card} style={{ color: color, backgroundColor: backgroundColor }}>
      <div className={styles.cardHeader}>
        <p>{label}</p>
        <div>{icon}</div>
      </div>
      <p className={styles.cardValue}>{value.toLocaleString('pt-br')}</p>
    </div>
  );
}
