import { PostsByUserId } from '../../../utils/types';
import connection from '../../config/connection';

const getAllPostsByUserId = ({ offset, userId }: PostsByUserId) => {
  const sql = {
    text: `SELECT
    users.id AS "userId",
    users.username AS "username",
    users.avatar AS "avatar",
    posts.id AS "id",
    posts.image AS "image",
    posts.content AS "content",
    posts.created_at AS "createdAt",
    posts.updated_at AS "updatedAt",
    COUNT(likes.id) AS "likesCount",
    COUNT(comments.id) AS "commentsCount",
    COUNT(saved_posts.id) AS "savesCount",
    EXISTS (
      SELECT 1
      FROM likes
      WHERE likes.post_id = posts.id
        AND likes.user_id = $1
    ) AS "isLiked"
  FROM
    posts
  JOIN
    users ON posts.user_id = users.id
  LEFT JOIN
    likes ON likes.post_id = posts.id
  LEFT JOIN
    comments ON comments.post_id = posts.id
  LEFT JOIN
    users AS comment_users ON comments.user_id = comment_users.id
  LEFT JOIN
    saved_posts ON saved_posts.post_id = posts.id
  WHERE posts.user_id = $1
  GROUP BY
    users.id,
    posts.id
  ORDER BY
    posts.created_at DESC
  OFFSET $2
  LIMIT 10;
  
  `,
    values: [userId, offset],
  };
  return connection.query(sql);
};

export default getAllPostsByUserId;
