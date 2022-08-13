const Form = ({ step, pic1, pic2 }) => {
    const onCLickSelectionBox = (evt) => {
        evt.currentTarget.parentElement.childNodes.forEach(function (node) {
            node.classList.remove('focus')
        });
        evt.currentTarget.classList.add('focus');
    }

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
                <div className="selectionBoxContainer">
                    <div id='selectionBox1' className="selectionBox" onClick={(evt) => onCLickSelectionBox(evt)}>
                        <div>
                            <img src={pic1} />
                        </div>
                        <div style={{ fontWeight: "bold" }}>For myself</div>
                        <div><br /> Write better. Think
                            <br />more clearly. Stay
                            <br />organized</div>
                    </div>
                    <div id='selectionBox2' className="selectionBox" onClick={(evt) => onCLickSelectionBox(evt)}>
                        <div> <img src={pic2} /></div>
                        <div style={{ fontWeight: "bold" }}>With my team</div>
                        <div><br />wikis, docs, tasks &
                            <br />projects, all in one
                            <br />place</div>
                    </div>
                </div>

            </>
        )
    }
}

Form.defaultProps = {
    step: 1,
    pic1: '',
    pic2: '',
}
export default Form
