import { twMerge } from 'tailwind-merge';

interface Props {
  text: string;
  className?: string;
}
export default function Title({ text, className }: Props) {
  const newClassName = twMerge('text-4xl font-bold', className);
  return <h2 className={newClassName}>{text}</h2>;
}
