import React from 'react'

function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className='w-full bg-blue-600 text-white'>Auth layout</div>
      {children}
    </div>
  );
}

export default AuthLayout