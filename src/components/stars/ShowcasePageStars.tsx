import { Star } from './Star'

export function ShowcasePageStars() {
  return (
    <div className='absolute w-0'>
      <Star
        color='blue'
        size='size-8 md:size-10'
        top='top-40 md:top-50'
        left='left-[2vw] md:left-[0vw] lg:left-[10vw]'
      />
      <Star
        color='blue'
        size='size-16 md:size-20'
        top='top-130  md:top-60'
        left='left-[80vw] '
      />
      <Star
        color='green'
        size='size-12 md:size-15'
        top='top-360 md:top-260'
        left='-left-[6vw] md:left-[5vw]'
      />
    </div>
  )
}
