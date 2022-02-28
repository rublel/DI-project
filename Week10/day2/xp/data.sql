CREATE TABLE public (
    id INT PRIMARY KEY IDENTITY (1, 1),
    desc VARCHAR (255) NOT NULL,
    price NUMERIC (3, 2) DEFAULT 0
); 

INSERT INTO public (
    desc,  
price)
VALUES
    (
        'Small Desk',
        100
    ),
    (
        'Large desk',
		300
    ),
    (
        'Fan',
        80
    );