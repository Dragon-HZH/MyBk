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
    upwd varchar(20)  not null,
    email varchar(50),
    index(upwd)
);

-- 插入模拟数据
insert into user values
(1,'huang','123456','1049694780@qq.com'),
(2,'hzh','123456','143156520@qq.com'),
(3,'yyy','123456','147963521@qq.com');

-- 验证信息表
create table u_yz(
    yid int primary key auto_increment,
    y_uid int,
    user_name varchar(32) not null,
    gender tinyint,
    email varchar(50),
    phone varchar(20),
    foreign key(y_uid) references user(uid)
);

-- 创建发布信息表 mood心情
create table u_text(
tid int primary key auto_increment,
t_uid int,
mtime timestamp,
mood varchar(20), 
mtext text,
foreign key(t_uid) references user(uid)
);


-- 用户图片的存储
create table u_photo(
    pid int primary key auto_increment,
    p_uid int,
    P_tid int,
    p_route varchar(66),
    p_type varchar(20),  
    foreign key(p_uid) references user(uid),
    foreign key(p_tid) references user(uid)
);

