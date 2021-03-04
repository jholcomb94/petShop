CREATE DATABASE  IF NOT EXISTS `pet_shop`;
USE `pet_shop`;

CREATE TABLE `shelter` (
  `shelterid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`shelterid`)
) 