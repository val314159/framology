function run_htdocs() {
  (cd htdocs; python -m SimpleHTTPServer 2002)
}

function run_stackio() {
  ./bin/stackio --auth normalauth --config normal.json
}

. bin/activate

