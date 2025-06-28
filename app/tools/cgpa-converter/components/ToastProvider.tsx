'use client';

import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';

export function ToastProvider() {
  return <Toaster />;
}

export { useToast }; 