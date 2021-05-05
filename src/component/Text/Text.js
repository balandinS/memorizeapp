import React, {useRef, useEffect} from 'react'
import { View, Animated, StyleSheet, Easing } from 'react-native'
import { useFadeAnime, useTranslateAnime } from '../../utilities/hooks'
import PropTypes from 'prop-types'
const PADDING_VERTICAL = 8 ;
const PADDING_HORIZONTAL = 5;
const PADDING = 5;
const MARGIN = 10;


export default function Text(props) {
    const { children } = props;
  
    const opacity = useFadeAnime()
    const translateX = useTranslateAnime()
    return (
        <View>
            <Animated.Text style={[props.style, {opacity, transform:[{translateX}]}]}>{children}</Animated.Text>
        </View>
    )
}


Text.propTypes = {
    children: PropTypes.string.isRequired,
    style: PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: PADDING,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: PADDING_VERTICAL,
        marginTop: MARGIN,
        marginBottom: MARGIN
    }
})