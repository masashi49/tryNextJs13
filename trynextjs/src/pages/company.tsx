import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/layout';
import { LayoutDown } from '@/components/layoutDown';

export default function Company() {
  return <div>this is company</div>;
}

Company.getLayout = (page: React.ReactNode) => (
  <Layout page={page} key={'hoge'} />
);
