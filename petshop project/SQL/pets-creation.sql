CREATE TABLE `pet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL DEFAULT 'nameless',
  `species` varchar(45) NOT NULL DEFAULT 'none',
  `breed` varchar(45) NOT NULL DEFAULT 'none',
  `description` varchar(45) NOT NULL DEFAULT 'description here',
  `zip` varchar(45) NOT NULL DEFAULT '00000',
  `shelter` varchar(256) NOT NULL DEFAULT 'N/A',
  `image` varchar(1000) NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Dog_silhouette.svg/429px-Dog_silhouette.svg.png',
  PRIMARY KEY (`id`)
)