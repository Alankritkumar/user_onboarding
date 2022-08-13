const ProgressTabCountSteps = ({ ProgressTabCountSteps }) => {

    if (document.getElementById('ProgressBar')) {
        const query = document.getElementById('ProgressBar').childNodes[0].childNodes;
        for (let index = 0; index <= ProgressTabCountSteps - 1; index++) {
            if (index === ProgressTabCountSteps - 1) {
                query[index].classList.add('active');
            }
            else {
                query[index].classList.replace('active', 'complete');
            }
        }
    }
    return (
        <>
        </>
    )
}

ProgressTabCountSteps.defaultProps={
    ProgressTabCountSteps:1,
}
export default ProgressTabCountSteps
