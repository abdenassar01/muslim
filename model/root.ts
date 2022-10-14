import AsyncStorage from "@react-native-async-storage/async-storage";
import { types } from "mobx-state-tree";

type RootStore = {
    fontSize: number,
    setFontSize: (x: number) => void
}


const _storeFont = async (value: number) => {
    try {
        await AsyncStorage.setItem('fontSize', value.toString());
    } catch (e) {
        return e;
    }
}

const Store = types.model("rootStore", {
    fontSize: types.optional(types.number, 16)
}).actions(self => ({
    async setFontSize(value: number){
        self.fontSize = value
        await _storeFont(value) 
    }
})).views(self => ({
    get fontSizeGetter(){
        return self.fontSize
    }
}))


let _rootStore: RootStore;
export const useRootStore = () => {
    if(!_rootStore){
        _rootStore = Store.create({
            fontSize: 16
        });
    }
    return _rootStore;
}