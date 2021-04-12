import { useEffect, useRef, useCallback, useState} from 'react';
import { Animated,  Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fillSafeAreaColor } from '../store/ui/UiAction'
import { colorSafeAreaSelector, isAppLoadingSelector } from '../store/selector'

//Fill color Safe area 
export function useColorSafeArea(color){
   const dispatch = useDispatch()
   const colorSafeAre = useSelector(colorSafeAreaSelector)
   const colored = useCallback(() => dispatch(fillSafeAreaColor(color)), [colorSafeAre])
   useEffect(() => {
       console.log('rernder');
       colored()
   }, [colorSafeAre])
}
//opacity anime
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
// traslate x anime
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
// this hook helps control steps for user  
export function useSteps(data){
    const [steps, updateStep] = useState({
        currentStepIndex: 0,
        data
    })
    const stepUp = () => {
        const index = steps.currentStepIndex;
        if(steps.data.length - 1 === index) {
            return null
        }

        const oldData = [...steps.data];
        oldData[index].done = true
        updateStep({
            currentStepIndex: index + 1,
            data: oldData,
        });
    }
  return [ steps , stepUp ]
}

