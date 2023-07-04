BEGIN;

INSERT INTO cohorts (name, thumbnail, start_date, end_date)
VALUES
  ('g1', '', '2023-02-01', '2023-07-31'),
  ('g2', '', '2023-02-01', '2023-07-31'),
  ('g3', '', '2023-02-01', '2023-07-31'),
  ('g4', '', '2023-02-01', '2023-07-31'),
  ('g5', '', '2023-02-01', '2023-07-31'),
  ('g6', '', '2023-02-01', '2023-07-31'),
  ('g7', '', '2023-02-01', '2023-07-31'),
  ('g8', '', '2023-02-01', '2023-07-31'),
  ('g9', '', '2023-02-01', '2023-07-31'),
  ('g10', '', '2023-02-01', '2023-07-31'),
  ('g11', '', '2023-01-01', '2023-06-30'),
  ('g12', '', '2023-02-01', '2023-07-31'),
  ('g13', '', '2023-02-01', '2023-07-31'),
  ('g14', '', '2023-02-01', '2023-07-31'),
  ('g15', '', '2023-02-01', '2023-07-31'),
  ('g16', '', '2023-02-01', '2023-07-31'),
  ('g17', '', '2023-02-01', '2023-07-31'),
  ('g18', '', '2023-02-01', '2023-07-31'),
  ('g19', '', '2023-02-01', '2023-07-31'),
  ('g20', '', '2023-02-01', '2023-07-31'),
  ('g21', '', '2023-02-01', '2023-07-31'),
  ('g22', '', '2023-02-01', '2023-07-31'),
  ('g23', '', '2023-02-01', '2023-07-31'),
  ('g24', '', '2023-02-01', '2023-07-31'),
  ('g25', '', '2023-02-01', '2023-07-31'),
  ('g26', '', '2023-02-01', '2023-07-31'),
  ('g27', '', '2023-02-01', '2023-07-31'),
  ('g28', '', '2023-02-01', '2023-07-31'),
  ('g29', '', '2023-02-01', '2023-07-31'),
  ('g30', '', '2023-02-01', '2023-07-31');


INSERT INTO users (full_name, username, email, github, linkedin, password, avatar, date_of_birth, career_status_id, gender, is_active)
VALUES
  ('John Doe', 'johndoe', 'johndoe@example.com', 'johndoe', 'johndoe', 'password123', 'avatar.jpg', '1990-01-01', 1, 'Male', true),
  ('Jane Smith', 'janesmith', 'janesmith@example.com', 'janesmith', 'janesmith', 'password456', 'avatar.jpg', '1992-05-15', 1, 'Female', true),
  ('Mike Johnson', 'mikejohnson', 'mikejohnson@example.com', 'mikejohnson', 'mikejohnson', 'password789', 'avatar.jpg', '1988-11-30', 2, 'Male', true);

INSERT INTO posts (content, image, is_public, user_id, cohort_id)
VALUES
  ('Hello, world!', 'https://i.pinimg.com/564x/2f/f0/80/2ff08011a5379cad8d2f2b6afa8d10cb.jpg', true, 1, NULL),
  ('Check out this article!', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', true, 2, NULL),
  ('th', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 2, 2),
  ('for', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 1, 1),
  ('five', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 2, 2),
  ('ce!', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 1, 1),
   ('Nour', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 2, 2),
  ('karam', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 1, 1);
  
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

INSERT INTO user_roles (user_id, role_id, cohort_id)
VALUES
  (1, 1, 1),
  (2, 3, 1),
  (3, 4, 1),
  (3, 2, 2),
  (3, 2, 3),
  (3, 2, 4);
 

COMMIT;