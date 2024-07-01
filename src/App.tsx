import { List } from '@components/List'
import { ListItem } from '@components/ListItem'

export const App = () => {
  return (
    <div className="m-auto !mt-2 h-full w-[500px]">
      <FlexList />
      <div className="h-6" />
      <NestedFlexList />
    </div>
  )
}

const FlexList = () => {
  return (
    <div className="bg-blue-100">
      <div>Flexbox Flex-col</div>
      <List>
        <ListItem focus>Text component 1</ListItem>
        <ListItem>Text component 2</ListItem>
        <ListItem>Text component 3</ListItem>
      </List>
    </div>
  )
}

const NestedFlexList = () => {
  return (
    <div className="bg-blue-100">
      <div>Flexbox Flex-col Nested</div>
      <List>
        <FlexItem index={1} />
        <FlexItem index={2} />
        <FlexItem index={3} />
      </List>
    </div>
  )
}

const FlexItem = ({ index }: { index: number }) => {
  return (
    <ListItem className="flex flex-row row-gap-2">
      <div className={'bg-cyan-600 p-2'}>Flex item {index}</div>
      <div className={'bg-cyan-600 p-2'}>Flex item {index}</div>
    </ListItem>
  )
}
