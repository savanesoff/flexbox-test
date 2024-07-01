import { useFocusable } from '@noriginmedia/norigin-spatial-navigation'
import { cn } from '@utils/cn'
import { ReactNode, useEffect } from 'react'

type ListProps = {
  children: ReactNode
  className?: string
  focus?: boolean
}

export const ListItem = ({ children, className, focus }: ListProps) => {
  const { ref, focused, focusSelf } = useFocusable()

  useEffect(() => {
    if (focus) {
      focusSelf()
    }
  }, [focus])
  return (
    <div
      ref={ref}
      className={cn(
        'w-full items-center justify-center p-2 text-sm',
        'bg-slate-400 text-slate-800',
        focused && 'bg-orange-500 text-white',
        className,
      )}
    >
      {children}
    </div>
  )
}
