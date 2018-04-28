BEGIN;

DROP TABLE IF EXISTS users, photos CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL
);

INSERT INTO users (username, password) VALUES
('Ivi', 'password123');

COMMIT;
