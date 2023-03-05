sumFunction = () => {
        
    const items = this.state.items.map( item =>{
        if(id === item.id){
            cena = parseInt(item.price)
            sum = cena + sum
            console.log(item.price)
            console.log(sum)
        }
        return sum
    }
    )
    this.setState({
        sum: sum,
        
    })
}