import connection from '../../config/connection';
import { CohortPostsQueryArgs } from '../../../utils/types';

const getCohortPostsQuery = ({ id, offset }: CohortPostsQueryArgs) => {
  const sql = {
    text: `
      SELECT
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
      WHERE
        posts.cohort_id = $1
      GROUP BY
        users.id,
        posts.id
      ORDER BY
        posts.id DESC
      OFFSET $2
      LIMIT 10;
    `,
    values: [id, offset],
  };
  return connection.query(sql);
};

export default getCohortPostsQuery;
