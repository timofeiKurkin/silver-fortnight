import { posts } from './_posts/posts.json';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(posts)
    }
}