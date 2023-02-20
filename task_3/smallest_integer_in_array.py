def find_smallest_integer(arr):
    smallest = arr[0]
    for num in arr:
        if num < smallest:
            smallest = num
    return smallest

# use cases
arr1 = [-5, -2, 0, -10, -3]
print(find_smallest_integer(arr1))

arr2 = [2, 5, 8, 10, 33, 55, 1, 7, 100, 30]
print(find_smallest_integer(arr2))