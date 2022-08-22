import styles from '../styles/RadioButton.module.scss'

const RadioButton = ({name, text, sorting, setSorting}) =>  {

    const changeTest = (e) => {
        setSorting(e.target.name)
    }

    return (
        <div className={styles.radioInput}>
            <input type="radio"
                   name={name}
                   checked={sorting === name}
                   onChange={changeTest}
            />
            <label htmlFor={name}>{text}</label>
        </div>
    )
}

export default RadioButton