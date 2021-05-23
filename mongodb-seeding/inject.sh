echo "=================== cleaning up db"
mongo mongodb://localhost:27017/devdb --eval "db.dropDatabase()"

FILES="$(ls /mongodb-seeding/*.js | sort -n)"
for f in $FILES
do
    echo "=================== injecting script: $(basename $f)"
	mongo mongodb://localhost:27017/devdb $f
    script_exit_code=$?
	if [ $script_exit_code != 0 ]; then
    exit $script_exit_code
    fi
done