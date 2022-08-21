import PostsList from "../components/PostsList";
import {IPost} from "../types";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/posts`)
  const data: IPost = await res.json()

  if(!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { posts: data }
  }
}

export default function Home({posts}) {
  return (
      <div className={'wrapper'}>
        <div className={'title'}>
          <h1>Список постов</h1>
        </div>
        <PostsList posts={posts}/>
      </div>

  )
}
