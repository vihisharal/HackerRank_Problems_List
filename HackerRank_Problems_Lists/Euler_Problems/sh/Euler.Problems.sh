for i in `seq -f "%03g" 80 251` ; do curl -L "https://www.hackerrank.com/rest/contests/projecteuler/challenges/euler$i/download_pdf?language=English" > hr_euler_$i.pdf ; done
