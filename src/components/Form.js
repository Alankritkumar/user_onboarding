

const Form = ({ step,pic1,pic2 }) => {

    if (step == 1) {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input className="form-control" id="InputFullName" placeholder="Steve Jobs" />
                    </div>
                    <div className="form-group">
                        <label>Display Name</label>
                        <input type="text" className="form-control" id="InputDisplayName" placeholder="Steve" />
                    </div>
                </form>
            </>
        )
    } else if (step == 2) {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label>Workspace Name</label>
                        <input className="form-control" id="WorkSpaceName" placeholder="Eden" />
                    </div>
                    <label>WorkSpace URL(optional)</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon">www.Eden.com/</span>
                        </div>
                        <input type="text" className="form-control" id="WorkSpaceURL" aria-describedby="addon" placeholder="Example" />
                    </div>
                </form>
            </>
        )
    } else if (step == 3) {
        return (
            <>
                <div className="input-group">
                    <label>
                        <input type="radio" name="select" />
                        <span>
                            <br /> <img src={pic1} />
                            <br />For myself
                            <br /> Write better. Think
                            <br />more clearly. Stay
                            <br />organized</span>
                    </label>
                    <label>
                        <input type="radio" name="select" />
                        <span>
                            <br /> <img src={pic2} />
                            <br />With my team
                            <br />wikis, docs, tasks &
                            <br />projects, all in one
                            <br />place</span>
                    </label>
                </div>
            </>
        )
    } 
}
Form.defaultProps={
    step:1,
    pic1:'',
    pic2:'',
}
export default Form
