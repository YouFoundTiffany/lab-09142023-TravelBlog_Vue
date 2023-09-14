import { AppState } from '../AppState'
import { Blog } from '../models/Blog.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'


class BlogsService {
    async getBlogs() {
        // AppState.blogs = []
        const res = await api.get('api/blogs')
        logger.log(`gettin' them blogs`, res.data)
        AppState.blogs = res.data.map(blog => new Blog(blog))
    }

}

export const blogsService = new BlogsService()