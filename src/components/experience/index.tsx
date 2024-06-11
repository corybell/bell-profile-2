import Image from 'next/image'

import { EXPERIENCE_LIST } from '@/content/experience'

export function Experience() {
  return (
    <>
      <h2 className='text-4xl text-center mb-6 md:mb-12 lg:mb-12'>
        Experience
      </h2>
      <ul className='flex flex-col items-center mb-12 md:mb-24 lg:mb-24'>
        {EXPERIENCE_LIST.map(client => (
          <li
            key={client.name}
            className='flex gap-8 mb-8 w-[300px] md:w-[410px]'
          >
            <div>
              <Image
                src={client.imgSrc}
                alt={client.imgAlt}
                height={80}
                width={80}
              />
            </div>
            <div>
              <div className='md:text-lg lg:text-lg font-medium'>
                {client.role}
              </div>
              <div className='text-xs md:text-sm lg:text-sm'>{client.name}</div>
              <div className='text-xs md:text-sm lg:text-sm text-slate-500'>{`${client.start} - ${client.end}`}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
