-- #设置链接字符
set names utf8;

-- #清除数据库，并创建
drop database if exists bk;
create database bk charset utf8;

-- #链接数据库
use bk;

-- # 创建用户数据表
create table user(
    uid int primary key auto_increment,
    uname varchar(20) unique not null,
    upwd varchar(48)  not null,
    email varchar(50),
    index(upwd)
);

-- 插入模拟数据
insert into user values
(null,'huang','123456','1049694780@qq.com'),
(null,'hzh','123456','143156520@qq.com'),
(null,'yyy','123456','147963521@qq.com');

--文章,心情
create table article(
    a_id int primary key AUTO_INCREMENT,
    a_uid int,
    a_title varchar(50),
    a_class int,
    a_mood int,
    a_content text,
    a_time timestamp,
    foreign key(a_uid) references user(uid)
);

-- 用户图片的存储
create table photos(
    p_id int primary key auto_increment,
    p_uid int,
    p_aid int,
    p_url varchar(100),
    p_type varchar(50),  
    foreign key(p_uid) references user(uid),
    foreign key(p_aid) references article(a_id)
);

--自评,反思
create table reflect(
    r_id int primary key auto_increment,
    r_aid int,
    r_time timestamp,
    r_content text,
    foreign key(r_aid) references article(a_id)
)


-- 详细信息表
-- create table u_yz(
--     yid int primary key auto_increment,
--     y_uid int,
--     user_name varchar(32) not null,
--     gender tinyint,
--     email varchar(50),
--     phone varchar(20),
--     foreign key(y_uid) references user(uid)
-- );





