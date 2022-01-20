import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export  enum COLOR {
    MAIN_COLOR = '#F96851',
    // MAIN_COLOR = '#F97316',
    
   }

export  enum SCREEN {
    WIDTH = windowWidth,
    HEIGHT = windowHeight

}