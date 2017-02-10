CREATE TABLE profiles(id serial PRIMARY KEY, name VARCHAR (30) NOT NULL, color VARCHAR (20) NOT NULL);

CREATE TABLE char_categories(id serial PRIMARY KEY, name VARCHAR (30) NOT NULL);

CREATE TABLE characteristics(id serial PRIMARY KEY, name VARCHAR (30) NOT NULL, category integer REFERENCES char_categories (id));

CREATE TABLE personalities(profile_id integer NOT NULL, characteristic_id integer NOT NULL, priority integer NOT NULL, PRIMARY KEY (profile_id, characteristic_id), CONSTRAINT personality_user_id FOREIGN KEY (profile_id) REFERENCES profiles (id), CONSTRAINT personality_char_id FOREIGN KEY (characteristic_id) REFERENCES characteristics (id));

INSERT INTO profiles (name, color) VALUES ('Alex', 'red'), ('Eli', 'purple'), ('Andi', 'blue'), ('Basti', 'green'), ('Peter', 'cyan'), ('Maksim', 'orange'), ('Julia', 'yellow');
