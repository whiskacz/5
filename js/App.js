class App extends React.Component{
    state = {
       items: [
        { id: 1, name: "herbata", active: false, price: 5},
        { id: 2, name: "kawa", active: false, price: 7},
        { id: 3, name: "kasza", active: false, price: 12},
        { id: 4, name: "makaron", active: false, price: 15},
        { id: 5, name: "zupa", active: false, price: 10},
        { id: 5, name: "chleb", active: false, price: 3},
       ], 
       sum : 0,
    }

    handleChangeStatus = (id) => {
        
        const items = this.state.items.map( item =>{
        if(id === item.id){
                item.active = !item.active       
        }       
            return item


        })
    this.setState({
        items: items,
        
    })
   
    }
    
    sumFunction = (id) => {
        let cena = 0 
        const items = this.state.items.map( item =>{
            if(id === item.id){
                   
                cena = cena + item.cena 
            }       
                return cena
                
            })
        this.setState({
            sum: cena
            
        })
    }


    

    render(){
        return(
            <>
            <Header items={this.state.items} />
            <Content items={this.state.items} sum={this.state.sum} sumFunction={this.sumFunction}/>
            <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} sumFunction={this.sumFunction}/>
            </>
            
        )
    }
}