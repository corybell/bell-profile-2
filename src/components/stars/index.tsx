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
        left='left-[75vw] '
      />
      <Star
        color='blue'
        size='size-12 md:size-15'
        top='top-120 md:top-120'
        left='-left-[6vw] md:left-[10vw]'
      />
      <Star
        color='blue'
        size='size-8 md:size-10'
        top='top-292 md:top-215'
        left='left-[85vw]'
      />
      <Star
        color='green'
        size='size-8 md:size-10'
        top='top-555 md:top-305'
        left='-left-[3vw] md:left-[6vw]'
      />
      <Star
        color='blue'
        size='size-10 md:size-12'
        top='top-555 md:top-300'
        left='left-4 md:left-[12vw]'
      />
      <Star
        color='green'
        size='size-8 md:size-10'
        top='top-675 md:top-390'
        left='left-[84vw]'
      />
    </div>
  )
}
