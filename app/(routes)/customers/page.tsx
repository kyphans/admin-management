import { User, columns } from '@/components/primary-table/columns';
import { DataTable } from '@/components/primary-table/data-table';
import React from 'react'

async function getData(): Promise<any> {
  const usersResponse = await fetch('http://localhost:3000/api/users');
  return usersResponse.json();
}

async function CustomerPage() {
  const { data } = await getData();
  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default CustomerPage