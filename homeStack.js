import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Negeri from './components/Negeri';
import Kategori from './components/Kategori';
import Detail from './components/Detail';


const screens = {
    Negeri: {
        screen: Negeri
    },
    Kategori: {
        screen: Kategori
    },
    Detail: {
        screen: Detail
    }
}

const homeStack = createStackNavigator(screens);
export default createAppContainer(homeStack);

