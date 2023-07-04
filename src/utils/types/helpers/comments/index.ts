interface CommentQuery {
  content: string;
  postId: number;
  userId: number;
}

interface CommentsPostQuery {
  postId: number;
}

interface CommentIdQuery {
  id: string;
}

interface EditCommentQuery {
  content: string;
  id: string;
}

export { CommentQuery, CommentsPostQuery, CommentIdQuery, EditCommentQuery };
