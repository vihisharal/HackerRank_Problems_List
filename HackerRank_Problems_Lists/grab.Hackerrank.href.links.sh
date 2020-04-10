input == "$(pwd)${1}";output== "$(pwd)${2}";
echo $input $output;

cat "${input}" | grep -Eo "(http|https)://[a-zA-Z0-9./?=_-]*" | grep challenges | sort -u > "${output}"
