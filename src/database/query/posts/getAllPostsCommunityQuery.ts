import connection from '../../config/connection';

const getPostsCommunityQuery = () => {
  const sql = {
    text: 'select * from posts where is_public = true;',
  };
  return connection.query(sql);
};

export default getPostsCommunityQuery;
