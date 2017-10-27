CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int,
  message varchar(255),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  ID int,
  user varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  ID int,
  room varchar(255),
  PRIMARY KEY (ID)
);

CREATE TABLE chatterbox (
  ID int,
  messageId int,
  userId int,
  roomId int,
  FOREIGN KEY (messageId) REFERENCES messages(ID),
  FOREIGN KEY (userId) REFERENCES users(ID),
  FOREIGN KEY (roomId) REFERENCES rooms(ID),
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
