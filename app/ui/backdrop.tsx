import '@/globals.css';

type Props = {
  childrenPos: 'left' | 'right' | 'center';
  children: React.ReactNode;
};

export function BackDrop({ children, childrenPos }: Props) {
  const justify = () => {
    switch (childrenPos) {
      case 'right':
        return 'justify-end';
      case 'left':
        return 'justify-start';
      default:
        return 'justify-around';
    }
  };
  return (
    <div className="h-screen w-full fixed top-0 left-0 z-10 gradient-bg">
      <div className={`flex place-items-center ${justify()}`}>{children}</div>
    </div>
  );
}
