import { auth } from '@/auth';
import React from 'react'

async function DashboardPage() {
  const session = await auth();

  if (!session?.user) return <div>DashboardPage not auth</div>;

  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage