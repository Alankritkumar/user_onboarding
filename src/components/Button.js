const Button = ({ StepIncrement, step }) => {
    
    return (
        <div>
            <button type="submit" className="btn btn-primary" 
            onClick={ () => StepIncrement(step)}>Create Workspace</button>
        </div>
    )
}
Button.defaultProps={
    step:1,
}
export default Button
