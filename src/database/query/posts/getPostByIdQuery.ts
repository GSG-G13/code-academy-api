import { PostIdQueryArgs } from '../../../utils';
import connection from '../../config/connection';

const getPostByIdQuery = ({ id }: PostIdQueryArgs) => {
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
          (SELECT COUNT(*) FROM likes WHERE likes.post_id = posts.id) AS "likesCount",
          (SELECT COUNT(*) FROM comments WHERE comments.post_id = posts.id) AS "commentsCount",
          (SELECT COUNT(*) FROM saved_posts WHERE saved_posts.post_id = posts.id) AS "savesCount"
        FROM
          posts
        JOIN
          users ON posts.user_id = users.id
        WHERE
          posts.id = $1
        ORDER BY
          posts.id DESC`,
    values: [id],
  };
  return connection.query(sql);
};

export default getPostByIdQuery;
