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
      <div className="btn-blue overflow-hidden overflow-ellipsis whitespace-normal line-clamp-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. {text}
      </div>
    </div>
  )
}
