import { JSComponents, TSComponent } from '@components'
import { GapComponent } from '@components/gapComponent'

export const App = () => {
  return (
    <div className="col-gap-2 flex h-1/2 flex-col bg-orange-300 p-5">
      <div className="btn-red p-2">Hello, Preact!</div>
      <JSComponents text={'Custom prop'} />
      <TSComponent text={'Custom prop'} />
      <GapComponent />
    </div>
  )
}
