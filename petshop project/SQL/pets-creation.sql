CREATE DATABASE  IF NOT EXISTS `pet_shop`;
USE `pet_shop`;

CREATE TABLE `pet` (
  `id` int NOT NULL DEFAULT '0',
  `name` varchar(45) NOT NULL DEFAULT 'nameless',
  `species` varchar(45) NOT NULL DEFAULT 'none',
  `breed` varchar(45) NOT NULL DEFAULT 'none',
  `description` varchar(45) NOT NULL DEFAULT 'description here',
  `zip` varchar(45) NOT NULL DEFAULT '00000',
  `shelter` int NOT NULL DEFAULT '1',
  `image` varchar(1000) DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Dog_silhouette.svg/429px-Dog_silhouette.svg.png',
  PRIMARY KEY (`id`),
  KEY `shelterID_idx` (`shelter`)
) 
