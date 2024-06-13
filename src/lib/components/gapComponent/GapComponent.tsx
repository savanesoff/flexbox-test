export const GapComponent = () => {
  return (
    <div>
      <div> Gap Example</div>
      <div className="flex row-gap-4">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  )
}

const Box = () => {
  return (
    <div className="border border-red-900 bg-orange-200 p-2 text-red-500">
      box
    </div>
  )
}
