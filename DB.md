-- Criação da database
CREATE DATABASE cda_teste;

-- Uso da database
USE cda_teste;

-- Tabela emblems
CREATE TABLE emblems (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL
);

-- Tabela users
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Tabela emblemsuser
CREATE TABLE emblemsuser (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    emblem_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (emblem_id) REFERENCES emblems(id)
);

-- INSERTS

-- Inserção de dados na tabela emblems
INSERT INTO emblems (id, slug, name, image, category) VALUES
(1, 'cda', 'Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/cidade-alta.png', 'gold'),
(2, 'cda-valley', 'Cidade Alta Valley', 'https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png', 'gold'),
(3, 'policia', 'Policia do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/policia.png', 'silver'),
(4, 'hospital', 'Hospital do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/hospital.png', 'silver'),
(5, 'mecanica', 'Mecânica do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/mecanica.png', 'silver'),
(6, 'taxi', 'Taxi do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/taxi.png', 'silver'),
(7, 'curuja', 'Coruja', 'https://cidadealtarp.com/imagens/challenge/coruja.png', 'bronze'),
(8, 'hiena', 'Hiena', 'https://cidadealtarp.com/imagens/challenge/hiena.png', 'bronze'),
(9, 'gato', 'Gato', 'https://cidadealtarp.com/imagens/challenge/gato.png', 'bronze'),
(10, 'urso', 'Urso', 'https://cidadealtarp.com/imagens/challenge/urso.png', 'bronze');

INSERT INTO users (id, name, email, password) VALUES
(1, 'Admin', 'admin@cda.com.br', 'admin');

