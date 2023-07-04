interface CommentQuery {
  content: string;
  postId: number;
  userId: number;
}

interface CommentsPostQuery {
  postId: number;
}
export { CommentQuery, CommentsPostQuery };
