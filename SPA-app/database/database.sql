create database ng_games_db;

use ng_games_db;

create table game(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

RENAME TABLE game to games;

DESCRIBE games;