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
    email varchar(50)
);

-- 插入模拟数据
insert into user values
(null,'huang','123456','1049694780@qq.com'),
(null,'hzh','123456','143156520@qq.com'),
(null,'yyy','123456','147963521@qq.com');

-- 存储所有信息,备用
create table allmsg(
    id int primary key AUTO_INCREMENT,
    a_uid int,
    title varchar(60),
    class int,
    mood int,
    content text,
    ctime timestamp,
    img_url varchar(200),
    reflect varchar(300),
    describes int,
    foreign key(a_uid) references user(uid)
);
-- 用户图片的存储
create table photos(
    p_id int primary key auto_increment,
    p_uid int,
    p_src varchar(100),
    p_type int,
    p_msg varchar(50),
    p_href varchar(50),
    p_time timestamp,
    foreign key(p_uid) references user(uid)
);

-- 0 -> 主页  1 -> 趣事页
insert into photos values 
(null,1,"img/link/tbd.jpg",0,"强大的度娘","http://www.baidu.com",null),
(null,1,"img/link/tbm.jpg",0,"MDN 文档","https://developer.mozilla.org/zh-CN/",null),
(null,1,"img/link/tbb.jpg",0,"Boot CDN","https://www.bootcdn.cn/",null),
(null,1,"img/link/tbv.jpg",0,"Vue 框架","https://cn.vuejs.org/v2/api/",null),
(null,1,"img/link/t5.jpg",0,"找到爱和目标",null,null),
(null,1,"img/link/tbn.jpg",0,"不一样的JS","http://nodejs.cn/",null),
(null,1,"img/link/tbg.jpg",0,"激情的论坛","https://github.com/",null),
(null,1,"img/link/tbw.jpg",0,"创造奇迹","https://www.webpackjs.com/",null),
(null,1,"img/link/tba.jpg",0,"简单的美","https://www.iconfont.cn/",null),

(null,1,"img/blog/bt2.jpg",1,"热爱生活,热爱工作,加油",null,null),
(null,1,"img/blog/bt5.jpg",1,"用微笑告诉别人，今天的你比昨天更坚强。",null,null),
(null,1,"img/blog/bt8.jpg",1,"没有比脚更远的路，没有比人更高的山！",null,null),
(null,1,"img/blog/bt7.jpg",1,"简单的美不是要做一个单纯优秀的人，而是要做一个不可替代的人。",null,null),
(null,1,"img/blog/bt4.jpg",1,"原本认为自己做不到的事最后却做成了，感觉真的很好！",null,null),
(null,1,"img/blog/bt10.jpg",1,"所谓成熟，就是越来越发觉以前的自己是个傻逼。",null,null),
(null,1,"img/blog/bt3.jpg",1,"人生就象一个球，无论如何滚来滚去，总有在一个点上停止的时候。",null,null),
(null,1,"img/blog/bt6.jpg",1,"勤奋是你的密码，能译出你一部壮丽的史诗。",null,null),
(null,1,"img/blog/bt9.jpg",1,"观察走在你前面的人，看看他为何领先，学习他的优点。",null,null);


--文章,心情
create table article(
    a_id int primary key AUTO_INCREMENT,
    a_uid int,
    a_pid int,
    a_title varchar(50),
    a_content text,
    a_class int,
    a_mood int,
    a_time timestamp,
    foreign key(a_uid) references user(uid),
    foreign key(a_pid) references photos(p_id)
);
insert into article (a_uid,a_title,a_content,a_class,a_mood,a_time) values
(1,"生活要勇敢，相信自己，用双手创造未来，一起都不是梦","生活要勇敢，相信自己，用双手创造未来，一起都不是梦，决定未来的不是过去，是当下，你是否能掌控自己，或者说对自己的掌控成度决定了未来，用双手创造未来，不是让你去搬砖，那是一种低级表现，我们要做的就是通过掌控自己来创造理想生活。美好的生活等不来。之所以成功来之不易，是因为用汗水堆积成的堡垒；之所以未来明灯常亮，是因为用坚持叠成的灯塔；之所以人生绚烂多姿，是因为用努力筑成的丰碑。因为相信自己，所以坚持不懈；因为相信自己，所以勇往直前。扬起自信的风帆，成功仅一步之遥。",0,null,"2019-3-12"),
(1,"生活要勇敢，相信自己，用双手创造未来，一起都不是梦","其实无论做什么事，如何去做。都必须县相信自己，别人才会更相信你，因为相信了自己，才会有信心一直做下去，才会学的自我欣赏，才会学有所成。不要害怕困难，也不要害怕自己不行，因为不试又怎么知道？不经历风雨有怎能见彩虹？相信自己就是塑造未来。",0,null,"2019-3-12"),
(1,"生活要勇敢，相信自己，用双手创造未来，一起都不是梦","伴着盛开的花，蝴蝶才能快乐地飞舞；带着希望，梦想才能飞往高处；迎着温暖的风，我们不再感到孤独。用自己的实力来证明自己，不停下追逐快乐的脚步，不停下追赶幸福的步伐，最后获得最勇敢的幸福，只因相信自己，一直相信自己。也未曾说过放弃。",0,null,"2019-3-12"),
(1,"生活要勇敢，相信自己，用双手创造未来，一起都不是梦","曾经遇事胆怯的我，连与他人沟通都会害怕。直到有一次，我和另两位同学代表班级去参加辩论赛，小组成员个个都对答如流，尽管自己心里很着急，但依旧没有勇气站起来辩论。对于我的一大考验摆在面前。因为心里希望自己能成功，希望自己能为班级做出贡献，希望自己所在的小组能获奖，在经过一番思想斗争后，我还是站了起来，反对对方的观点，说完之后，我赢得了属于我自己的掌声，我的内心十分欣喜。第一次，我有勇气挑战了自己；第一次，我不再胆怯；第一次，我也获得了深深的鼓励;我相信自己，我对自己说：“我能行！",0,null,"2019-3-12"),
(1,"生活要勇敢，相信自己，用双手创造未来，一起都不是梦","记住：不是因为有些事情难以做到，我们才失去了信心，而是因为我们失去了信心，有些事情才显得难以做到。正如《为学》所说：世间事有难易乎，为之，则难者亦易矣；不为，则易者亦难矣。我们要自信面对每一天，自信面对每件事，直面生活和学习中的困难，要常常告诉自己——我是最棒的。我相信自己，我对自己说：“我能行！",0,null,"2019-3-12"),
(1,"做智者","庸者，相信别人，怀疑自己；愚者，相信自己，排斥别人；智者，相信自己，也相信别人。",null,0,"2018-12-12"),
(1,"问自己，认识自己","在生活中，你是否提出过这样的疑问：我该相信谁的话呢？又是否问过自己：是相信别人重要，还是相信自己重要呢？实际上，相信别人与相信自己同样重要。我们既不同意固执、自傲，也不懦弱，毫无主见。因此，我们既要相信自己，又要听取别人的意见。",null,0,"2018-12-12"),
(1,"越迷茫，越要静","朋友!你是否也在迷茫也在迷茫彷徨,不知道自己到底应该听从谁的意见。朋友!那么现在就让我们擦亮眼睛,带着属于自己的思绪自由飞翔着属于自己的思绪自由飞翔,让我们瞄准前方,在自信的脚踏实地的迈步中,去虚心听取别人的采纳别人正确的意见,摆渡好自己的人生小船,驶向前进的彼岸。",null,0,"2018-12-12");


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





