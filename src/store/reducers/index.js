export const addDec = (state=0,action)=>{
  const {type} = action;
  switch(type){
      case 'ADD':
          return state+1;
      case 'DEC':
          return state - 1;
      default:
          return state;
  }
};
export const text = (state={},action)=>{
  const {type,payLoad} = action;
  switch(type){
      case 'TEXT':
          return Object.assign({},state,{userName:payLoad});
      default:
          return state;
  }
}


