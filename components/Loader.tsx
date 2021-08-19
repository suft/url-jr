import cn from 'classnames'

const Loader = (): JSX.Element => {
  const circle = 'w-6 h-6 rounded-full bg-black'
  return (
    <div className="flex justify-center gap-3 pt-12 pb-1 m-2">
      <div className={cn(circle, 'animate-bounce')}></div>
      <div className={cn(circle, 'animate-bounce200')}></div>
      <div className={cn(circle, 'animate-bounce400')}></div>
    </div>
  )
}

export default Loader
