import { ToastProvider } from './components/ToastProvider';

export default function CGPAConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ToastProvider />
    </>
  );
} 