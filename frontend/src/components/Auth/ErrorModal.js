import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return(
        <div className={classes.ErrorModal}>
            <header>
                <p>{props.title}</p>
            </header>
            

        </div>
    )
}

export default ErrorModal;