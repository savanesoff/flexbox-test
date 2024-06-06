import { useEffect } from 'react'

export const TSComponent = ({ text }: { text: string }) => {
  useEffect(() => {
    console.log('TSComponent mounted')
    return () => {
      console.log('TSComponent unmounted')
    }
  }, [])
  return (
    <div className="bg-green-300 h-1/2 ">
      <div className="btn-blue overflow-hidden overflow-ellipsis whitespace-nowrap w-10">
        Hello, Preact! {text}
      </div>
    </div>
  )
}
