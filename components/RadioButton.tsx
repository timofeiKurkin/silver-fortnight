import styles from '../styles/RadioButton.module.scss'

const RadioButton = ({name, text, sorting, setSorting}) =>  {

    const changeSorting = (e) => {
        setSorting(e.target.name)
    }

    return (
        <div className={styles.radioInput}>
            <input type="radio"
                   name={name}
                   checked={sorting === name}
                   onChange={changeSorting}
            />
            <label htmlFor={name}>{text}</label>
        </div>
    )
}

export default RadioButton
