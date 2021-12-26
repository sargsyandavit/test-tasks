export const REMOVE_ITEM_IN_STORE = 'todo/reomve-item-in-store';

export default function removeItemInStore(id){
    return{
        type: REMOVE_ITEM_IN_STORE,
        id,
    }
}