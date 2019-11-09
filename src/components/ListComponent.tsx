// For more details see https://web.dev/virtualize-long-lists-react-window/
import React from 'react'
import { FixedSizeList } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import UserItem from './UserItem'
import Spinner from './Spinner'

const ListComponent = (props) => {
  const { items, loadMore, hasNextPage } = props
  const Row = ({ index, style }) => {
    const itemLoading = index === items.length

    if (itemLoading) {
      return <Spinner style={style} />
    } else {
      return <UserItem user={items[index]} style={style} />
    }
  }

  const itemCount = hasNextPage ? items.length + 1 : items.length

  return (
    <InfiniteLoader isItemLoaded={(index) => index < items.length} itemCount={itemCount} loadMoreItems={loadMore}>
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          height={400}
          width={400}
          itemCount={itemCount}
          itemSize={40}
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {Row}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  )
}

export default ListComponent
