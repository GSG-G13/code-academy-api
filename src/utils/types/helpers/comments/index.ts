interface CommentQuery {
  content: string;
  postId: number;
  userId: number;
}

interface CommentsPostQuery {
  postId: number;
}

interface CommentIdQuery {
  commentId: number;
}

interface EditCommentQuery {
  content: string;
  commentId: number;
}

interface DeleteComment {
  commentId: number;
}

export { CommentQuery, CommentsPostQuery, CommentIdQuery, EditCommentQuery, DeleteComment };
