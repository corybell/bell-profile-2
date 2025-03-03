import { Star } from './Star'

export function HomePageStars() {
  return (
    <div className='absolute h-full'>
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
        top='top-115 md:top-120'
        left='-left-[6vw] md:left-[10vw]'
      />
      <Star
        color='blue'
        size='size-8 md:size-10'
        top='top-305 md:top-215'
        left='left-[85vw] md:left-[80vw]'
      />
      <Star
        color='green'
        size='size-8 md:size-10'
        top='top-560 md:top-320'
        left='-left-[3vw] md:left-[6vw]'
      />
      <Star
        color='blue'
        size='size-10 md:size-12'
        top='top-560 md:top-320'
        left='left-4 md:left-[12vw]'
      />
      <Star
        color='green'
        size='size-8 md:size-10'
        top='top-685 md:top-400'
        left='left-[84vw]'
      />
    </div>
  )
}
