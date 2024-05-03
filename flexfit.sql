 CREATE TABLE abonne (
  nom varchar(10) NOT NULL,
  prenom varchar(10) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `poids` double DEFAULT NULL,
  `genre` varchar(10) DEFAULT NULL,
  `taille` double DEFAULT NULL,
  `objectif` varchar(255) DEFAULT NULL,
  `mail` varchar(50) NOT NULL,
  PRIMARY KEY (`mail`),
  CONSTRAINT `fk` FOREIGN KEY (`mail`) REFERENCES `profil` (`mail`) ON DELETE CASCADE
);
CREATE TABLE `admin` (
  `mail` varchar(50) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL
);
 CREATE TABLE `profil` (
  `mail` varchar(50) NOT NULL,
  `fullname` varchar(30) DEFAULT NULL,
  `tel` varchar(8) DEFAULT NULL,
  `pass` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`mail`)
);
 CREATE TABLE `workout` (
  `nomw` varchar(10) NOT NULL,
  `duree` int DEFAULT NULL,
  `miveau` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`nomw`)
);
 CREATE TABLE `regime` (
  `type` varchar(10) NOT NULL,
  `calories` int DEFAULT NULL,
  PRIMARY KEY (`type`)
);
 CREATE TABLE `compte` (
  `mail` varchar(50) NOT NULL,
  `nomw` varchar(10) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`mail`),
  KEY `nomw` (`nomw`),
  KEY `typw` (`type`),
  CONSTRAINT `compte_ibfk_1` FOREIGN KEY (`mail`) REFERENCES `profil` (`mail`) ON DELETE CASCADE,
  CONSTRAINT `compte_ibfk_2` FOREIGN KEY (`nomw`) REFERENCES `workout` (`nomw`) ON DELETE CASCADE,
  CONSTRAINT `compte_ibfk_3` FOREIGN KEY (`type`) REFERENCES `regime` (`type`) ON DELETE CASCADE
);
CREATE TABLE `exercice` (
  `id` int NOT NULL,
  `def` varchar(100) DEFAULT NULL,
  `focus_area` varchar(10) DEFAULT NULL,
  `level` int DEFAULT NULL,
  `duree` int DEFAULT NULL,
  `nbr_rep` int DEFAULT NULL,
  PRIMARY KEY (`id`)
);

