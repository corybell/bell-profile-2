import Image from 'next/image'

export function Star({
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
