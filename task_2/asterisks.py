# Diagram 1
def draw_square(size):
    row = '*' * size
    for i in range(size):
        print(row)

# Diagram 2
def draw_right_triangle(size):
    for i in range(1, size+1):
        row = '*' * i
        print(row)

# Diagram 3
def draw_reverse_right_triangle(size):
    for i in range(size, 0, -1):
        row = '*' * i
        print(row)

# use cases for each
draw_square(10)
draw_right_triangle(10)
draw_reverse_right_triangle(10)
