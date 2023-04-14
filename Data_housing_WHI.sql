CREATE TABLE population_and_demography (  
	"Country name" varchar(100),
	"Year" int,
	"Population" double precision,
	"Population of children under the age of 1" double precision,
	"Population of children under the age of 5" double precision,
	"Population of children under the age of 15" double precision,
	"Population under the age of 25" double precision,
	"Population aged 15 to 64 years" double precision,
	"Population at age 1" double precision,
	"Population aged 1 to 4 years" double precision,
	"Population aged 5 to 9 years" double precision,
	"Population aged 10 to 14 years" double precision,
	"Population aged 15 to 19 years" double precision,
	"Population aged 20 to 29 years" double precision,
	"Population aged 30 to 39 years" double precision,
	"Population aged 40 to 49 years" double precision,
	"Population aged 50 to 59 years" double precision,
	"Population aged 60 to 69 years" double precision,
	"Population aged 70 to 79 years" double precision,
	"Population aged 80 to 89 years" double precision,
	"Population aged 90 to 99 years" double precision,
	"Population older than 100 years" double precision,
	"population__all__15plus__records" double precision,
	"population__all__18plus__records" double precision
);

select * from population_and_demography;


CREATE TABLE total_government_expenditure_on_education_gdp (
	"Entity" varchar(50),
	"Code" varchar(10),
	"Year" int,
	"Government expenditure on education, total (% of GDP)" double precision 
);

select * from total_government_expenditure_on_education_gdp;

CREATE TABLE migration_data_un(
	"Region, development group, country or area of destination" varchar(100),
	"Notes of destination" int,
	"Location code of destination" int,
	"Type of data of destination" varchar(100),
	"Region, development group, country or area of origin" varchar(100),
	"Location code of origin" int,
	"1990" int,
	"1995" int,
	"2000" int,
	"2005" int,
	"2010" int,
	"2015" int,
	"2020" int
);

select * from migration_data_un;


select * 
from population_and_demography 
where "Year" between 2015 and 2020; 

select * 
from total_government_expenditure_on_education_gdp
where "Year" between 2015 and 2020; 

select "Region, development group, country or area of destination","Notes of destination","Location code of destination", "Type of data of destination", "Region, development group, country or area of origin", "Location code of origin", "2015", "2020"
from migration_data_un;
