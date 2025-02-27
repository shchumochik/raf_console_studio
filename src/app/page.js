'use client';

import { Github, Linkedin, Mail, Send } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col justify-center pt-[96px]'>
      <div className='flex flex-col items-center gap-8'>
        <h1 className='text-5xl text-center font-extrabold text-black dark:text-white mt-3 md:text-7xl'>
          От идеи до результата
        </h1>
        <h2 className='text-2xl'>
          Вместе с <span className='font-bold'>Raf&lt;/&gt;Console</span>
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-4 mt-[96px] md:grid-cols-3'>
        <div className='flex flex-col justify-center gap-4 p-8 rounded-2xl bg-neutral-50 border dark:bg-neutral-900 dark:border-neutral-800'>
          <p className='text-2xl font-bold'>Разработка сайтов</p>
          <p>
            Индивидуальные решения для вашего бизнеса: функционально, стильно,
            эффективно
          </p>
          <div className='flex gap-2 mt-3 flex-wrap'>
            <div className='py-2 px-3 rounded-3xl bg-blue-500 text-white font-medium'>
              Скорость
            </div>
            <div className='py-2 px-3 self-center rounded-3xl bg-rose-500 text-white font-medium'>
              Дизайн
            </div>
            <div className='py-2 px-3 rounded-3xl bg-violet-500 text-white font-medium'>
              Удобство
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-4 p-8 rounded-2xl bg-neutral-50 border dark:bg-neutral-900 dark:border-neutral-800'>
          <p className='text-2xl font-bold'>Разработка мобильных приложений</p>
          <p>Превращаем ваши идеи в мощные инструменты для роста</p>
          <div className='flex gap-2 mt-3 flex-wrap'>
            <div className='py-2 px-3 rounded-3xl bg-blue-500 text-white font-medium'>
              Android
            </div>
            <div className='py-2 px-3 self-center rounded-3xl bg-rose-500 text-white font-medium'>
              iOS
            </div>
            <div className='py-2 px-3 rounded-3xl bg-violet-500 text-white font-medium'>
              Аврора
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-4 p-8 rounded-2xl bg-neutral-50 border dark:bg-neutral-900 dark:border-neutral-800'>
          <p className='text-2xl font-bold'>SMM: реклама и продвижение</p>
          <p>Больше клиентов, больше продаж, больше прибыли!</p>
          <div className='flex gap-2 mt-3 flex-wrap'>
            <div className='py-2 px-3 rounded-3xl bg-blue-500 text-white font-medium'>
              Аналитика
            </div>
            <div className='py-2 px-3 self-center rounded-3xl bg-rose-500 text-white font-medium'>
              Контент
            </div>
            <div className='py-2 px-3 rounded-3xl bg-violet-500 text-white font-medium'>
              Продвижение
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center mt-[96px] gap-5'>
        <p className='font-bold text-3xl self-center'>Обо мне</p>
        <div className='font-medium text-lg text-center p-6 bg-neutral-50 border rounded-2xl dark:bg-neutral-900 dark:border-neutral-800'>
          Привет! Меня зовут Раф, я Android-разработчик с опытом создания
          мобильных приложений. Моя цель — разрабатывать полезные и удобные
          приложения, которые решают реальные проблемы пользователей. Я
          специализируюсь на разработке нативных Android-приложений с
          использованием Kotlin и Java. Также владею навыками проектирования
          пользовательских интерфейсов, работы с базами данных и интеграции API.
          В этом портфолио вы можете увидеть некоторые из моих проектов. Не
          стесняйтесь связаться со мной для обсуждения сотрудничества или просто
          чтобы поговорить о разработке приложений.
        </div>
      </div>
      <div className='flex flex-col justify-center mt-[96px] gap-5'>
        <p className='font-bold text-3xl self-center'>Связь со мной</p>
        <div className='flex flex-col justify-center gap-6'>
          <p className='font-medium text-lg self-center text-center'>
            Если у вас есть вопросы или предложения,
            <br /> не стесняйтесь связаться со мной через:
          </p>
          <div className='flex gap-7 justify-center'>
            <a
              href='https://example.com'
              className='flex flex-col items-center gap-2'
            >
              <div className='flex p-4 bg-neutral-50 border dark:bg-neutral-900 dark:border-neutral-800 rounded-[32px]'>
                <Github width={24} height={24} />
              </div>
              <p className='font-medium text-sm'>Github</p>
            </a>
            <a
              href='https://example.com'
              className='flex flex-col items-center gap-2'
            >
              <div className='flex p-4 bg-neutral-50 border dark:bg-neutral-900 dark:border-neutral-800 rounded-[32px]'>
                <Linkedin width={24} height={24} />
              </div>
              <p className='font-medium text-sm'>Linkedin</p>
            </a>
            <a
              href='https://example.com'
              className='flex flex-col items-center gap-2'
            >
              <div className='flex p-4 bg-neutral-50 border dark:bg-neutral-900 dark:border-neutral-800 rounded-[32px]'>
                <Mail width={24} height={24} />
              </div>
              <p className='font-medium text-sm'>Email</p>
            </a>
            <a
              href='https://example.com'
              className='flex flex-col items-center gap-2'
            >
              <div className='flex p-4 bg-neutral-50 border dark:bg-neutral-900 dark:border-neutral-800 rounded-[32px]'>
                <Send width={24} height={24} />
              </div>
              <p className='font-medium text-sm'>Telegram</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
