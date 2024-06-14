import { JSComponents, TSComponent, GapComponent, Fonts } from '@components'

export const App = () => {
  return (
    <div className="flex h-1/2 flex-col bg-orange-300 p-5 col-gap-2">
      <div className="btn-red p-2">Hello, Preact!</div>
      <JSComponents text={'Custom prop'} />
      <TSComponent text={'Custom prop'} />
      <GapComponent />
      <Fonts />
    </div>
  )
}
