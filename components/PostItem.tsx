import styles from '../styles/PostItem.module.scss'

const PostItem = ({sortedPosts}) => {
    return (
        <>
            {sortedPosts.map(({id, title, description}) =>
                <li key={id} className={styles.item}>
                    <h2 className={styles.item__title}><span>{id}.</span> {title}</h2>
                    <p className={styles.item__description}>{description}</p>
                </li>
            )}
        </>
    )
}

export default PostItem