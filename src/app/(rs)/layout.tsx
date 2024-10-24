import { Header } from '@/components/Header';

interface Props {
  children: React.ReactNode;
}

export default async function RSLayout({ children }: Props) {
  return (
    <div className='mx-auto w-full max-w-7xl'>
      <Header />
      <div className='px-4 py-2'>{children}</div>
    </div>
  );
}
