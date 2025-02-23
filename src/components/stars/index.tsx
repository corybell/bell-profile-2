import Image from 'next/image'

function Star({
  color,
  size,
  top,
  left,
}: {
  color: 'blue' | 'green'
  size: string
  top: string
  left: string
}) {
  return (
    <div className={`relative ${size} ${top} ${left}`}>
      <Image src={`/shapes/star-${color}.svg`} alt='Blue Star' fill />
    </div>
  )
}

export function Stars() {
  return (
    <div className='absolute h-full'>
      {/* note: template strings cause tailwind to puke during compiling, hence passing in the whole class names  */}
      <Star
        color='blue'
        size='size-8 md:size-10'
        top='top-30 md:top-40'
        left='left-[16vw] md:left-[20vw]'
      />
      <Star
        color='green'
        size='size-16 md:size-20'
        top='top-40  md:top-60'
        left='left-[70vw] md:left-[75vw]'
      />
      <Star
        color='blue'
        size='size-15'
        top='top-100 md:top-120'
        left='-left-[5vw] md:left-[10vw]'
      />
      <Star
        color='blue'
        size='size-10'
        top='top-305 md:top-222'
        left='left-[80vw]'
      />
      <Star
        color='green'
        size='size-8 md:size-10'
        top='top-610 md:top-350'
        left='-left-[2vw] md:left-[10vw]'
      />
      <Star
        color='blue'
        size='size-16 md:size-20'
        top='top-610 md:top-350'
        left='left-4 md:left-[12vw]'
      />
      <Star
        color='green'
        size='size-8 md:size-10'
        top='top-730 md:top-410'
        left='left-[80vw]'
      />
    </div>
  )
}
