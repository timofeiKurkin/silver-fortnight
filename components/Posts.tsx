import styles from '../styles/PostsList.module.scss'
import PostsList from './PostsList'
import RadioButton from './RadioButton'
import { useState } from 'react'


const Posts = ({posts}) => {
    const [sorting, setSorting] = useState("ASC")

    return (
        <>
            <div className={styles.post__radio}>
                <RadioButton name={'ASC'}
                             text={'Сортировка по возрастанию'}
                             sorting={sorting}
                             setSorting={setSorting}/>

                <RadioButton name={'DESC'}
                             text={'Сортировка по убыванию'}
                             sorting={sorting}
                             setSorting={setSorting}/>
            </div>
            <PostsList posts={posts} sorting={sorting}/>
        </>
    )
}

export default Posts