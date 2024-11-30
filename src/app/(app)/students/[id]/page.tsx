import { getStudents } from '@/actions/data/get-students';

type StudentPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StudentPage({ params }: StudentPageProps) {
  const { id } = await params;
  const { ok, data: students, message } = await getStudents(id);

  if (!ok || !students?.length) return <div>{message || 'Nenhum aluno encontrado'}</div>;

  return (
    <div>
      Student {id}: {students[0].nome}
    </div>
  );
}
