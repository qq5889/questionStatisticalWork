export default {
  namespace: "global", 
  state: {
    columns: [],
    dataSource: [],
    baseDatas: []
  },
  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload }
    },
    saveBaseData(state, { payload }){
      if(payload.length>0){
        const obj = payload[0]
        const tmpMap = {}
        const columns = Object.keys(obj).map((key, index) => {
          const indexStr = index + ""
          tmpMap[key] = indexStr
          return {
            key: indexStr,
            title: key,
            dataIndex: indexStr
          }
        });
        const dataSource = payload.map((data, index)=>{
          Object.keys(data).forEach(item=>{
            data[tmpMap[item]] = data[item]
          })
          data.key = index
          return data
        })

        return {
          ...state,
          baseDatas: payload,
          columns,
          dataSource
        }
      }else{
        return {...state}
      }
      
    }
  },
  effects:{
  //   *fetchNum({ payload }, { call, put,select }) {
  // 　},
  },
　
  // subscriptions:{
  //   // 订阅监听，比如我们监听路由，进入页面就如何，可以在这写
  //   setup ({ dispatch, history, query }) {
  //      return history.listen(async ({ pathname, search, query}) => {
  //        if (pathname==="/testdemo") {// 当进入testdemo这路由，就会触发fetchUser方法
  //         dispatch({ type: "fetchUser" })
  //       }
  //     })
  //   }　
  // }
}