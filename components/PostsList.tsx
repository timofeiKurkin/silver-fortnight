import styles from '../styles/PostsList.module.scss'
import {useFilters} from "../hooks/useFilters";
import PostItem from './PostItem';

const PostsList = ({posts, sorting}) => {

    const { sortedPosts } = useFilters(posts, {
        sort: sorting,
        filter: {name: 'description', value: ''}
    })

    if(!posts || !sortedPosts) {
        return null
    }

    return (
        <div className={styles.post}>
            <div className={styles.post__wrapper}>
                <ul className={styles.post__list}>
                    <PostItem sortedPosts={sortedPosts}/>
                </ul>
            </div>
        </div>
    );
};

export default PostsList;
