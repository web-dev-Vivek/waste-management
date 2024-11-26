import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
    >
      <ArrowLeft className="h-5 w-5 mr-1" />
      <span>Back to Selection</span>
    </button>
  );
}