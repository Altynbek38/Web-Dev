def election(a, b, c):
    sum = a + b + c
    if sum >= 2:
        return 1
    else:
        return 0

a = input().split()

print(election(int(a[0]), int(a[1]), int(a[2])))