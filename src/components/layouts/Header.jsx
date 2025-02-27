'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    console.log(theme);
  };
  return (
    <div className='bg-dark border-b border-neutral-200 flex justify-between items-center px-4 py-6 dark:bg-dark dark:border-neutral-800 md:px-10'>
      <ul className='hidden gap-10 md:flex'>
        <Link href='/'>
          <li className='text-dark dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300'>
            Главная
          </li>
        </Link>
        <Link href='/'>
          <li className='text-dark dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300'>
            Studio
          </li>
        </Link>
        <Link href='/'>
          <li className='text-dark dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300'>
            School
          </li>
        </Link>
        <Link href='/'>
          <li className='text-dark dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300'>
            Meets
          </li>
        </Link>
        <Link href='/'>
          <li className='text-dark dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300'>
            Контакты
          </li>
        </Link>
      </ul>
      <div className='flex gap-3'>
        <Button
          variant='outline'
          size='icon'
          onClick={changeTheme}
          className='rounded-full'
        >
          <Moon />
        </Button>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <Globe />
        </Button>
      </div>
      <Navbar />
    </div>
  );
}
