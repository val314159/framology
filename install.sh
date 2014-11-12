virtualenv .
. bin/activate
pip install -r requirements.txt

npm install stack.io
(cd bin; ln -s ../node_modules/stack.io/bin/stackio .)

