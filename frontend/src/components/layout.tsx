type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { title, children} = props;
  return (
    <div className='m-5 flex flex-col items-center'>
      <h1 className='font-bold mb-5 text-2xl'>{title}</h1>
      {children}
    </div>
  );
};

export default Layout;