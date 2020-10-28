def a(i, g):
    if i == 1:
        return g
    r = i/2
    if i%2!= 0:
        r = (i * 3) + 1
    return a(r, g+1)
n=1
for x in range(1,100000):
    t = a(x, 1)
    if t > n:
        m = x
        n = t
print(m)
