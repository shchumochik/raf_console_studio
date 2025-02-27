'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <Drawer>
      <DrawerTrigger className='flex md:hidden'>
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <VisuallyHidden>
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
        </VisuallyHidden>
        <ul className='p-6 flex flex-col gap-4 text-lg'>
          <li>Главная</li>
          <li>Studio</li>
          <li>School</li>
          <li>Meets</li>
          <li>Контакты</li>
        </ul>
        <VisuallyHidden>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </VisuallyHidden>
      </DrawerContent>
    </Drawer>
  );
}
