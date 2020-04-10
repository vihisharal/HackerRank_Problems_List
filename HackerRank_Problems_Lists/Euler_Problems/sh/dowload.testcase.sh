while  read -r line ;do output=$(echo "$line" | sed 's|.*/||' );wget -c "https://www.hackerrank.com/rest/contests/projecteuler/challenges/${output}/download_testcases" -O "${output}-testcase.zip" ;done < "${1}"


#https://www.hackerrank.com/rest/contests/projecteuler/challenges/euler030/download_testcases
