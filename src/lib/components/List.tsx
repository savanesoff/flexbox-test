import {
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation'
import { cn } from '@utils/cn'
import { ReactNode } from 'react'

type ListProps = {
  children: ReactNode
  className?: string
}

export const List = ({ children, className }: ListProps) => {
  const { ref, focusKey } = useFocusable()

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className={cn('flex flex-col col-gap-2', className)}>
        {children}
      </div>
    </FocusContext.Provider>
  )
}
