while  read -r line ;do output=$(echo "$line" | grep -Po "challenges\/\K(.*)(?=\/download)" ); wget -c -O "${output}.pdf" "${line}" ;done < Algorithm.links-2.sh;
