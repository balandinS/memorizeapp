import { useEffect, useRef} from 'react';
import { Animated,  Easing } from 'react-native'

export function useFadeAnime() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        Animated.timing(fadeAnim,{
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
        })
        .start()
    })

    return fadeAnim
}

export function useTranslateAnime() {
    const translateAnime = useRef(new Animated.Value(-30)).current;
    useEffect(() => {
        Animated.timing(translateAnime,{
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            easing: Easing.linear
        })
        .start()
    })

    return translateAnime
}