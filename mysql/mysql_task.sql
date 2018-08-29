-- Assignment:1
select * from mcart_wallet
         order by from_unixtime(created)  desc;

select * from mcart_wallet
         order by created  desc limit 100;
         
select * from mcart_wallet
         order by created  desc limit 20,100;



-- Assignment:2

create table customer(id int(10) auto_increment ,primary key(id),
mccid int(10),transaction_type varchar(200), amount int(10),total int(10)); 


insert into customer (id,mccid,transaction_type,amount,total)
values
(1,1,'Recharge',100,100),
(2,2,'Recharge',150,150),
(3,1,'Deduction',-20,80),
(4,3,'Recharge',100,100),
(5,2,'Deduction',-50,100),
(6,1,'Deduction',-50,30),
(7,3,'Deduction',-10,90),
(8,3,'Deduction',-40,50),
(9,2,'Deduction',-50,50),
(10,1,'Recharge',20,50);

 
select * from customer
where id in (select max(id) from customer where id not in
(select max(id) from customer  group by mccid) group by mccid);
 
  

select * from customer
where id in ( select max(id) from customer where id not in 
(select max(id) from customer  group by mccid) and id not in ( select max(id) from customer where id not in
(select max(id) from customer group by mccid) group by mccid)
group by mccid);





-- Assignent:3
-- create database test;
-- mysql -u root -p test <test.sql

-- gunzip <test.sql.gz|mysql -u root -p test

-- mysql -u root -p test >home/dump.sql

-- mysql -u root -p test > home/dump.sql.gz
--  mysql -u root -p -h 127.74.6.9 -P 2045



Assignment 4:

     --  mysqladmin
--     
--      
--      a) Using mysqladmin create a database.
--           mysqladmin -u root -p create newdb
--           
--      b) Using mysqladmin drop a database.
--           mysqladmin -u root -p drop newdb
--           
--      c)  Using mysqladmin show variables. 
--         mysqladmin -u root -p variables
--         
--      d)  Using mysqladmin restart mysql.
--      
--          mysqladmin -u root -p reload
--          
--      e)  Using mysqladmin shutdown mysql.
--          mysqladmin -u root -p shutdown
--         
--      f)  Using mysqladmin stop mysql.
--         sudo /etc/init.d/mysql stop




-- Assignment 5:

alter table testdata.mcart_wallet add index(mccsid); 
select * from testdata.mcart_wallet;
-- Assignment 6:
-- 
 
update mcart_wallet as w
set w.total=5000
where w.id in
(SELECT max(w1.id) FROM (SELECT * FROM mcart_wallet) as w1 where
w1.transaction_type="Recharge" and w1.amount>2000
and from_unixtime(w1.created) between '2018-07-1' and '2018-08-31' group by w1.mccsid);

select * from mcart_wallet;


delete from mcart_customers where mccsid in 
(select mccsid
 from mcart_wallet where 
from_unixtime(created) between '2017-08-26' and '2018-08-26'
and transaction_type !="Recharge");

-- Assignment 7:
create database test;

use test;

create table customers(customer_id int,primary key(customer_id),
customer_name varchar(100),customer_mobile int(15),apartment_id int,block_id int);

create table wallet(wallet_id int ,primary key(wallet_id),customer_id int, balance int);

create table Apartment(apartment_id int ,primary key(apartment_id),`name` varchar(100));

create table `Block`(block_id int,primary key(block_id),apartment_id int,
`name` varchar(120));

create table `Order`(order_id int, primary key(order_id),customer_id int,
order_total int,delivery_charge int);

create table Order_items(item_id int,primary key(item_id),
order_id int,sku varchar(100),product_price int);

create table Products(product_id int,primary key(product_id),sku varchar(1000));

insert into customers( customer_id,customer_name,customer_mobile,apartment_id,block_id)
values(1,'cus1',11111,1,1),
(2,'cus2',222222,1,1),
(3,'cus3',333333,2,3),
(4,'cus4',4444444,3,4),
(5,'cus5',555555,1,7),
(6,'cus6',6666666,3,5),
(7,'cus7',7777777,2,8),
(8,'cus8',88888888,4,9),
(9,'cus9',9999999,1,1),
(10,'cus10',123456,2,3);

insert into wallet(wallet_id,customer_id,balance)
values(1,1,10),
(2,5,20),
(3,6,15),
(4,7,65),
(5,9,15),
(6,10,100),
(7,3,58),
(8,2,69);

insert into Apartment(apartment_id,`name`)
values(1,'ap1'),
(2,'ap2'),
(3,'ap3'),
(4,'ap4'),
(5,'ap5'),
(6,'ap6');

insert into Block(block_id,apartment_id,`name`)
values(1,1,'a'),
(2,1,'b'),
(3,2,'c'),
(4,3,'d'),
(5,3,'e'),
(7,1,'f'),
(8,2,'g'),
(9,4,'h'),
(10,5,'i');

insert into `Order`(order_id,customer_id,order_total,delivery_charge)
values(1,1,1000,50),
(2,2,2000,50),
(3,3,3000,50),
(4,1,1000,50),
(5,1,2000,50),
(6,5,3000,50),
(7,10,1000,50),
(8,9,2000,50),
(9,5,3000,50),
(10,3,1500,50);

insert into Order_items(item_id,order_id,sku,product_price)
values(1,1,'A',10),
(2,1,'B',15),
(3,1,'C',20),
(4,2,'A',10),
(5,2,'B',15),
(6,3,'A',10),
(7,3,'B',15),
(8,4,'A',10),
(9,5,'A',10),
(10,6,'D',20),
(11,7,'E',10),
(12,7,'F',15),
(13,8,'G',10),
(14,8,'A',10),
(15,8,'B',10),
(16,8,'C',10),
(17,9,'E',10),
(18,10,'A',10),
(19,10,'B',15),
(20,10,'C',20);

insert into Products(product_id,sku)
values(1,'A'),
(2,'B'),
(3,'C'),
(4,'D'),
(5,'E'),
(6,'F'),
(7,'G'),
(8,'H'),
(9,'I'),
(10,'J');

select c.customer_id,c.customer_name,c.customer_mobile,a.`name`as apartment_name,b.`name`as block_name,
w.balance from customers as c right outer join Apartment as a on c.apartment_id=a.apartment_id
inner join wallet as w on c.customer_id=w.wallet_id
right join `Block` as b on c.block_id=b.block_id;

select c.customer_id,c.customer_name,c.customer_mobile,o.order_total,o.delivery_charge,oi.sku,oi.product_price
from customers as c right outer join `Order` as o on c.customer_id=o.customer_id
left join Order_items as oi on o.order_id=oi.order_id;

select c.customer_id,c.customer_name,c.customer_mobile,w.balance,a.`name` as apartment_name,
b.`name` as block_name,o.order_total,o.delivery_charge,oi.sku,oi.product_price
from customers as c left outer join wallet as w on c.customer_id=w.customer_id
inner join Apartment as a on c.apartment_id=a.apartment_id
left join `Block` as b on b.block_id=c.customer_id
inner join `Order` as o on c.customer_id=o.customer_id
left outer join Order_items as oi on o.order_id=oi.order_id;
