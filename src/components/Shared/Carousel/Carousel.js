import React, { useState } from 'react'
import { View } from 'react-native'
import { Image } from '@rneui/base'
import ImageCarousel, { Pagination } from '@sergiorj/react-native-snap-carousel'
import { style } from './Carousel.styles'
import { size } from 'lodash'

export function Carousel (props) {
  const { arrayImages, width, height, hideDots } = props
  const [activeDotIndex, setActiveDotIndex] = useState(0)

  const renderItem = ({ item }) => {
    return (
      <Image
        source={{ uri: item }}
        style={{ height, width }}
      />
    )
  }

  const pagination = () => {
    return (
      <Pagination
        dotsLength={size(arrayImages)}
        activeDotIndex={activeDotIndex}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        containerStyle={style.dotContainer}
        dotStyle={style.dot}
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
        onSnapToItem={(index) => setActiveDotIndex(index)}
      />

      {
        !hideDots && pagination()
      }
    </View>
  )
}
