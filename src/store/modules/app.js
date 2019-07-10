
import temMenu from "../temMenu";

const   state = {
        menushow: false,//显示隐藏二级菜单
        preActiveMenuEle: '',
        hoverMenuEle: 'index',
        currentActiveMenuEle: '',
        menuList: temMenu,
        currentActiveMenuTitle : '系统首页',
        menuWrapperSize:{
            width:0
        }
    };
const   mutations ={
        switchMenuShow(state, status){
            state.menushow = status;
        },
        setCurrentActiveMenuTitle(state, title) {
            state.currentActiveMenuTitle = title;
        },
        setMenuWrapperSize(state, size) {
            console.log(size);
            
            state.menuWrapperSize = size;
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
