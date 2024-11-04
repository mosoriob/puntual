interface ErrorWrapperProps {
  error: string | null;
  children: React.ReactNode;
}

export const ErrorWrapper = ({ error, children }: ErrorWrapperProps) => {
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  return <>{children}</>;
};
