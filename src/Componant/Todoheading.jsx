function Todoheading() {
    return (
        <>
            <div className="row">
                <div className="col-6"><input type="text" placeholder='Enter Text Here..' /></div>
                <div className="col-4"><input type="date" /></div>
                <div className="col-2"><button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>

        </>
    )

}
export default Todoheading;