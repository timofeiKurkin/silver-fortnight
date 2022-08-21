import styles from '../styles/PostsList.module.scss'
import {useFilters} from "../hooks/useFilters";
import {useState} from "react";

const PostsList = ({posts}) => {
    const [sorting, setSorting] = useState("ASC")

    const sortingChange = (e) => {
        setSorting(e.target.name)
    }

    const { sortedPosts } = useFilters(posts, {
        sort: sorting,
        filter: {name: 'title', value: 'dolorem'}
    })

    if(!posts || !sortedPosts) {
        return null
    }

    return (
        <div className={styles.post}>
            <div className={styles.post__wrapper}>
                <div className={styles.post__radio}>
                    <div className={styles.post__radioInput}>
                        <input type="radio"
                               name='ASC'
                               checked={sorting === "ASC"}
                               onChange={sortingChange}
                        />
                        <label htmlFor="ASC">Сортировка по возрастанию</label>
                    </div>
                    <div className={styles.post__radioInput}>
                        <input type="radio"
                               name='DESC'
                               checked={sorting === "DESC"}
                               onChange={sortingChange}
                        />
                        <label htmlFor="DESC">Сортировка по убыванию</label>
                    </div>
                </div>
                <ul className={styles.post__list}>
                    {sortedPosts.map(({id, title, description}) =>
                        <li key={id} className={styles.post__item}>
                            <h2 className={styles.post__title}><span>{id}.</span> {title}</h2>
                            <p className={styles.post__description}>{description}</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default PostsList;