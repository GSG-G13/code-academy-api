BEGIN;

DROP TABLE IF EXISTS users, user_roles, roles, cohorts, posts, likes, career_status, notes, comments, saved_posts CASCADE;

SET TIME ZONE 'UTC';

CREATE TABLE career_status (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
INSERT INTO career_status (name) values ('Student'), ('open to work'), ('Hired');

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  username VARCHAR(200) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  github VARCHAR(255),
  linkedin VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  avatar TEXT,
  date_of_birth DATE,
  career_status_id int DEFAULT 1,
  gender VARCHAR(10),
  is_active Boolean,
  FOREIGN KEY (career_status_id) REFERENCES career_status(id) ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO users (full_name, username, email, password, avatar, is_active, career_status_id)
VALUES
  ('Admin', 'admin', 'codeacademy.gsg@gmail.com', '$2b$10$EXkKb.e1TQrSJkoGnbQ2nO5.V2uWuIOeLqwICylJEj5cG1BTXblBa', 'avatar2.jpg', true, 3);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
INSERT INTO roles (name) values ('Admin'), ('Ca-team'), ('V-Mentor'), ('Member');

CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  thumbnail VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  start_date Date,
  end_date Date
);

CREATE TABLE user_roles (
  id SERIAL PRIMARY KEY,
  user_id int NOT NULL ,
  role_id int NOT NULL,
  cohort_id int,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (cohort_id) REFERENCES cohorts(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO user_roles (user_id, role_id, cohort_id) VALUES (1, 1, null);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  content text NOT NULL,
  image VARCHAR(255),
  is_public Boolean NOT NULL,
  user_id int NOT NULL,
  cohort_id int,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (cohort_id) REFERENCES cohorts(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id int NOT NULL,
  post_id int NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  content VARCHAR(255),
  mentor_id int NOT NULL,
  student_id int NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (mentor_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  content VARCHAR(255),
  user_id int NOT NULL,
  post_id int NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE saved_posts (
  id SERIAL PRIMARY KEY,
  user_id int NOT NULL,
  post_id int NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE
);

COMMIT;
