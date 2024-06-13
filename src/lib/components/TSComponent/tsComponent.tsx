type TSComponentProps = {
  /** The text to display in the component */
  text: string
}

/**
 * TS Component
 * @returns
 */
export const TSComponent = ({ text }: TSComponentProps) => {
  return (
    <div className="h-1/2 bg-red-400 p-2">
      <div className="w-32 overflow-hidden overflow-ellipsis whitespace-nowrap">
        Text Ellipses Example {text}
      </div>
    </div>
  )
}
