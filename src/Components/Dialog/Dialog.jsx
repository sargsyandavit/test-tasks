import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getUsersData from "../../Store/Actions/UsersAction";

const DialogPage = () => {
    const dispach = useDispatch();
    const state = useSelector((state) => ({
        usersStore: state.usersStore
    }));

    useEffect(() =>{
        dispach(getUsersData());
    }, [])

    console.log(state, 'users')

    // const userLeft = false;
    // const userWatchingCateMem = true;

    // let p = new Promise((resolve, reject) => {
    //     let a = 5 + 1;
    //     if(a == 2){
    //         resolve('sucsses')
    //     }else{
    //         reject('faild')
    //     }
    // })

    // p.then((massage) => {
    //     console.log('This is the then ' + massage)
    // }).catch((massage) => {
    //     console.log('this is the then ' + massage)
    // })

    // function watchTotorialPromis(){
    //     return new Promise((reslve, reject) => {
    //         if(userLeft){
    //             reject({
    //                 name: 'user lefy',
    //                 massage: ':('
    //             })
    //         }else if(userWatchingCateMem){
    //             reject({
    //                 name: 'user watching cate memo',
    //                 massage: 'webDevSimpliFite < Cat'
    //             })
    //         }else {
    //             reslve('thubs up and subscribe')
    //         }
    //     })
    // }

    // watchTotorialPromis().then((massage) => {
    //     console.log('Sucsess ' + massage)
    // }).catch((error) => {
    //     console.log(error.name + ' ' + error.massage)
    // })
    return(
     <div>
     {state.usersStore?.users.map((user) => 
       <h1>{user.name}</h1>
      )}   
    </div>
    );
}

export default DialogPage;