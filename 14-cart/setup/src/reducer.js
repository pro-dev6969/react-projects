
const reducer = (state,action) =>{

    if(action.type === 'clear-cart'){
        // state ko spread karke cart ko khali krne ko target karo
        return { ...state , cart: [] }
    }
    if(action.type === 'remove'){
        return { ...state ,
        cart: state.cart.filter((item)=>
            item.id !== action.payload
        )}
    }
    if(action.type === 'increase'){
        const temp = state.cart.map((item)=>{
            if(item.id===action.payload){
                return {...item,amount: item.amount+1}
            }
                return item
        })
        return {...state,cart: temp}
    }
    if(action.type === 'decrease'){
        const temp = state.cart.map((item)=>{
            if(item.id===action.payload){
                return {...item,amount: item.amount>0?item.amount-1:0}
            }

            return item

        }).filter((item) => item.amount !== 0)
        return {...state,cart: temp}
    }
    if(action.type === 'get-total'){
        let {total,amount} = state.cart.reduce((cartTotal,item)=>{
            const {price,amount} = item
            const itemTotal= price*amount

            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        },
        {
        total:0,
        amount:0,
        }
        )

        total = parseFloat(total.toFixed(2))

        return {...state,total,amount}
    }
    if(action.type === 'loading'){
        return {...state , loading:true}
    }
    if(action.type === 'display'){
        return {...state , cart:action.payload , loading:false}
    }
    return state
}

export default reducer;