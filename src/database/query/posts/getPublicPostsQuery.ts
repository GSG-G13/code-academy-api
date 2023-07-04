import { PublicPostsQueryArgs } from '../../../utils/types';
import connection from '../../config/connection';

const getPublicPostsQuery = ({ offset }: PublicPostsQueryArgs) => {
  const sql = {
    // eslint-disable-next-line quotes
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
    COUNT(saved_posts.id) AS "savesCount"
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
  GROUP BY
    users.id,
    posts.id
  ORDER BY
    posts.created_at DESC
  OFFSET $1
  LIMIT 15;
  
  `,
    values: [offset],
  };
  return connection.query(sql);
};

export default getPublicPostsQuery;
