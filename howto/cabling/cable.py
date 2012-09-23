from math import sqrt

VOLTAGE=240

def getVe(Vs, We, Rc):
    termv=(Vs*Vs-8*We*Rc)
    if termv <=0: return -1
    sqterm= sqrt(termv)
    return (Vs+sqterm)/2.0 #(Vs-sqterm)/2

WR15 = 12/1000.0

print '<table class="table table-striped">'
print '<tr>'
print '<th>\\\\(L\\\\backslash W_E\\\\)</th>'
for pstep in range (1,11):
    print '<th>%5d</th>' % (20*pstep)
print '</tr>'

for dstep in range(1,11):
    clen = dstep*200
    print '<tr>'
    print '<th>%5d</th>' % clen
    for pstep in range (1,11):
        drop = getVe(VOLTAGE,20*pstep,WR15*clen)
        if drop > 0:
            print '<td>%5.1f</td>' % drop
        else: 
            print '<td>*****</td>'
    print '</tr>'
print '</table>'
