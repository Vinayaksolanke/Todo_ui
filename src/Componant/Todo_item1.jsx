function Todo_item1(){
    let item = "Buy Milk"
    let date = "1/5/2024"
    return(
    <div className="row">
    <div className="col-6">{item}</div>
    <div className="col-4">{date}</div>
    <div className="col-2"><button type="button" className="btn btn-success">Submit</button>
    </div>
  </div>
    )
}
 export default Todo_item1