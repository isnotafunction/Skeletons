## Skeleton express with handlebars app including PostgreSQL database setup

1.  clone the repo
    `git clone ...`

2.  install dependencies:
    `npm install`

3.  create a .env file in root folder:
    `touch .env`

4.  open `psql` and create a local database

````CREATE DATABASE [database name];
CREATE USER [username] WITH SUPERUSER PASSWORD['password'];
ALTER DATABASE [database name] OWNER TO [username];```

5. update .env file with username, password and database name;

6. exit psql and run the build the database locally using:
	-	`\q` (exits psql)
	-	npm run build

7. Select data from users table:
    - psql
    - \c [database name]
	- `SELECT * FROM users`
````
