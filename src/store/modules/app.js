
import temMenu from "../temMenu";

const   state = {
        menushow: false,//显示隐藏二级菜单
        preActiveMenuEle: '',
        hoverMenuEle: 'index',
        currentActiveMenuEle: '',
        menuList: temMenu
    };
const   mutations ={
        switchMenuShow(state, status){
            state.menushow = status;
        }
    };
 const  actions = {

    }
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
