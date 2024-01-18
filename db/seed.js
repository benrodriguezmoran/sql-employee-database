const query = `INSERT INTO department ( name ) 
VALUES
     ('sales'),
     ('warehouse'),
     ('customer_service'),
     ('accounting'),
     ('research');
     ('management');


INSERT INTO role ( title, salary, department_id )
VALUES
    ('salesperson',       50000, 1),
    ('accountant',        75000, 4),
    ('engineer',          60000, 2),
    ('panel builder',     50000, 2),
    ('service',           55000, 3),
    ('research',          65000, 5);
    ('manager',          120000, 5);


INSERT INTO employee ( first_name, last_name, role_id ) 
VALUES
    ('Dwight', 'Schrute', 1),
    ('Jim',    'Halpert', 1),
    ('Kelly',  'Kapoor',  3),
    ('Creed',  'Branton', 4),
    ('Darrly', 'Philbin', 2),
    ('Kevin',  'Malone',  5),
    ('Michael','Scott',   6);`

module.exports = query;