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
  ('Karam Zomolt', 'karamzomlot', 'zomlutk@gmail.com', 'https://github.com/karamzomlot', 'https://github.com/karamzomlot', 'password123', 'https://cdn.discordapp.com/attachments/1084099509363155024/1125024600363892779/63299107.jpg', '1990-01-01', 2, 'Male', true),
  ('Nour Agha', 'nouragha1099', 'nouragha1099@gmail.com', 'https://github.com/Nour-Agha99', 'https://github.com/Nour-Agha99', 'password456', 'https://cdn.discordapp.com/attachments/1084099509363155024/1125024600615555183/111684675.jpg', '1992-05-15', 1, 'Male', true),
  ('Khaled Nabihan', 'khaled', 'KhaledAref13@gmail.com', 'https://github.com/KhaledAref13', 'https://github.com/KhaledAref13', 'password789', 'https://cdn.discordapp.com/attachments/1084099509363155024/1125024600883986512/114813782.jpg', '1988-11-30', 1, 'Male', true),
  ('Mohammed Batrawi', 'Batrawi', 'Batrawi@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'https://cdn.discordapp.com/attachments/1084099509363155024/1125024601144041582/76455946.jpg', '1988-11-30', 1, 'Male', true),
  ('Shatha Amin', 'Shatha-Amin', 'Shatha-Amin@gmail.com', 'https://github.com/Shatha-Amin', 'https://github.com/Shatha-Amin', 'password789', 'https://cdn.discordapp.com/attachments/1084099509363155024/1125024601915789312/72302786.jpg', '1988-11-30', 1, 'Male', true),
  ('haitham haitham', 'haitham', 'haitham@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('Yaser Amro', 'Yaser', 'Yaser@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('Hamdy Radwan', 'Hamdy', 'Hamdy@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('Alaa Ahmed', 'Alaa', 'Alaa@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('Sbeta', 'Sbeta', 'Sbeta@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('Abdullah Alsherif', 'Abdullah', 'Abdullah@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('Ahmed Irheem', 'Ahmed', 'Ahmed@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('Momen Momen','Momen', 'Momen@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('Basel Basel','basel', 'basel@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('Toha nadaTeam','toha', 'toha@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('Nada Nada','nada', 'nada@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 3, 'Male', true),
  ('Amal Mosa','amal', 'amal@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 1, 'Male', true),
  ('lina Ebaid','lina', 'lina@gmail.com', 'https://github.com/Batrawi', 'https://github.com/Batrawi', 'password789', 'avatar.jpg', '1988-11-30', 3, 'Male', true);

INSERT INTO posts (content, image, is_public, user_id, cohort_id)
VALUES
  ('Hello, world!', 'https://i.pinimg.com/564x/2f/f0/80/2ff08011a5379cad8d2f2b6afa8d10cb.jpg', true, 1, NULL),
  ('Check out this article!', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', true, 2, NULL),
  ('th', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 2, 2),
  ('for', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 1, 1),
  ('five', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 2, 2),
  ('ce!', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 1, 1),
   ('Nour', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 3, 2),
  ('karam', 'https://i.pinimg.com/564x/be/38/4d/be384d8bf28019aa36ee8502c8a8534d.jpg', false, 2, 1);
  
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
  (2, 4, 1),
  (2, 3, 2),
  (2, 3, 3),
  (3, 4, 3),
  (4, 4, 3),
  (5, 4, 3),
  (6, 4, 3),
  (7, 4, 3),
  (8, 4, 3),
  (9, 4, 3),
  (10, 4, 3),
  (11, 4, 3),
  (12, 4, 3),
  (13, 4, 3),
  (14, 4, 3),
  (15, 4, 3),
  (16, 4, 3),
  (17, 2, 3),
  (18, 4, 3),
  (19, 2, 3);
 

COMMIT;