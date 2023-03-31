CREATE TABLE usuario (
    usuario_id int not null identity(1,1) primary key,
    senha varchar(32) not null,
    nome_usuario varchar(50) not null
)

CREATE TABLE objetivo(
objetivo_id int not null identity(1,1) primary key,
nome_objetivo varchar(50) not null,
descricao_objetivo text not null,
concluir_objetivo bit not null)

CREATE TABLE carteira(
carteira_id int not null identity(1,1) primary key,
valor_carteira decimal(9,2))

CREATE TABLE cliente(
cliente_id int not null identity(1,1) primary key,
nome varchar(50) not null,
sobrenome varchar(50) not null,
email varchar(50) not null,
telefone varchar(20) not null,
objetivo_id int not null foreign key(objetivo_id) references objetivo,
carteira_id int not null foreign key (carteira_id) references carteira)

CREATE TABLE meta(
meta_id int not null identity(1,1) primary key,
descricao_meta text not null,
meta_status bit not null,
objetivo_id int not null foreign key(objetivo_id) references objetivo,
carteira_id int not null foreign key (carteira_id) references carteira)

CREATE TABLE tipo_meta(
tipo_meta_id int not null identity(1,1) primary key,
valor varchar(50) not null,
meta_id int not null foreign key (meta_id) references meta)
