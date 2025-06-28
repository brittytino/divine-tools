'use client';

import { Button } from '@/components/ui/button';
import { Copy, Download, Share2 } from 'lucide-react';
import { useToast } from './ToastProvider';
import { CGPAResult } from '../types';
import { MOTIVATIONAL_QUOTES } from '../constants';

interface ShareResultProps {
  result: CGPAResult;
}

export function ShareResult({ result }: ShareResultProps) {
  const { toast } = useToast();
  const quote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];

  const resultText = `${result.cgpa} CGPA = ${result.percentage.toFixed(2)}% (${result.university.name}) ${result.achievement || ''}\n${quote}\n\nCalculate your CGPA at Divine Tools!`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultText);
      toast({
        title: 'Copied!',
        description: 'Result copied to clipboard',
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to copy result',
        variant: 'destructive',
      });
    }
  };

  const handleShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(resultText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDownload = () => {
    // TODO: Implement PDF download
    toast({
      title: 'Coming Soon!',
      description: 'PDF download will be available soon',
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-black/20 rounded-lg">
        <p className="text-neutral-300 whitespace-pre-line">{resultText}</p>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleCopy}
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy Result
        </Button>

        <Button
          variant="outline"
          className="flex-1"
          onClick={handleShare}
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share on WhatsApp
        </Button>

        <Button
          variant="outline"
          className="flex-1"
          onClick={handleDownload}
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>
    </div>
  );
} 