import { EditPost, NewPost } from "../generated/BBPosts/BBPosts"
import { Post } from "../generated/schema"

export function handleNewPost(event: NewPost): void {
  let post = new Post(event.params.postId.toString())
  post.profileId = event.params.profileId
  post.cid = event.params.cid
  post.save()
}

export function handleEditPost(event: EditPost): void {
  let id = event.params.postId.toString()
  let post = Post.load(id)
  if(post == null) {
    post = new Post(id)
  }
  post.profileId = event.params.profileId
  post.cid = event.params.cid
  post.save()
}