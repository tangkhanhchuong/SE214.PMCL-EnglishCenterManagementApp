CREATE TABLE PersonalAddress
(
	id VARCHAR(10) PRIMARY KEY,
	streetDetails VARCHAR(50),
	ward VARCHAR(30),
	city VARCHAR(50),
	country VARCHAR(30)
);

CREATE TABLE PersonalInfomation
(
	id VARCHAR(10) PRIMARY KEY,
	firstName VARCHAR(30),
	lastName VARCHAR(30),
	phoneNumber VARCHAR(10),
	gender int,
	dob DATETIME,
	addressId VARCHAR(100),
	email VARCHAR(20)
);

alter table PersonalInfomation
add constraint fk_info_address foreign key(addressId) references PersonalAddress(id);
