BEGIN;

INSERT INTO cohorts (name, thumbnail, start_date, end_date)
VALUES
  ('Cohort 1', '', '2023-01-01', '2023-06-30'),
  ('Cohort 2', '', '2023-02-01', '2023-07-31');

INSERT INTO users (full_name, username, email, password, avatar, is_active, career_status_id)
VALUES
  ('John Doe', 'johndoe', 'johndoe@example.com', 'password123', 'avatar1.jpg', true, 1),
  ('Jane Smith', 'janesmith', 'janesmith@example.com', 'password456', 'avatar2.jpg', true, 2);

INSERT INTO posts (content, image, is_public, user_id, cohort_id)
VALUES
  ('Hello, world!', 'https://i.pinimg.com/564x/2f/f0/80/2ff08011a5379cad8d2f2b6afa8d10cb.jpg', true, 1, 1),
  ('Check out this article!', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', true, 2, 2);
  
INSERT INTO likes (user_id, post_id)
VALUES
  (1, 1),
  (2, 2);
  
INSERT INTO notes (content, mentor_id, student_id)
VALUES
  ('Great progress!', 1, 2),
  ('Keep up the good work!', 2, 1);

INSERT INTO comments (content, user_id, post_id)
VALUES
  ('Nice post!', 1, 1),
  ('I agree!', 2, 2);
  
INSERT INTO saved_posts (user_id, post_id)
VALUES
  (1, 1),
  (2, 2);
  
COMMIT;