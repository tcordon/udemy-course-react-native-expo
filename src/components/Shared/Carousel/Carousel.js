import React from 'react'
import { View } from 'react-native'
import { Image } from '@rneui/base'
import ImageCarousel from '@sergiorj/react-native-snap-carousel'
import { style } from './Carousel.styles'

export function Carousel (props) {
  const { arrayImages, width, height } = props

  const renderItem = ({ item }) => {
    console.log('item', item)
    return (
      <Image
        source={{ uri: item }}
        style={{ height, width }}
      />
    )
  }

  return (
    <View style={style.content}>
      <ImageCarousel
        layout='default'
        data={arrayImages}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
      />
    </View>
  )
}
