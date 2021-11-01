import Navbar from './Navbar';

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
