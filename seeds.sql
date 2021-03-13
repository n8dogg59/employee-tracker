INSERT INTO department (id, name)
VALUES
(1, "Sales"),
(2, "IT"),
(3, "Marketing"),
(4, "Research and Development"),
(5, "Human Resouces");

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, "Sales Associate", 65000, 1),
(2, "Sales Manager", 95000, 1),
(3, "System Administrator", 70000, 2),
(4, "IT Manager", 90000, 2),
(5, "Marketing Spectialist", 55000, 3),
(6, "Product Manager", 70000, 3),
(7, "Research Engineer", 65000, 4),
(8, "Director of Research and Development", 90000, 4),
(9, "Human Resource Assistant", 45000, 5),
(10, "Director of Human Resources", 80000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, "Michael", "Jordan", 4, NULL),
(2, "Lebron", "James", 3, 1),
(3, "Wilt", "Chamberlain", 1, NULL),
(4, "Bill", "Russell", 7, 3),
(5, "Kareem", "Abdul-Jabbar", 5, 2),
(6, "Larry", "Bird", 8, 1),
(7, "Kobe", "Bryany", 2, NULL),
(8, "Oscar", "Robertson", 10, 8),
(9, "Tim", "Duncan", 1, 3),
(10, "Shaq", "O'Neal", 9, 2),
(11, "Magic", "Johnson", 8, 10);