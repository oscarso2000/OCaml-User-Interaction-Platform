MODULES=encryption authors checkers checkersAI minesweeper app testhelper
OBJECTS=$(MODULES:=.cmo)
TEST=test.byte
MLIS=$(MODULES:=.mli)
OCAMLBUILD=ocamlbuild -use-ocamlfind

default: build
	utop

build:
	$(OCAMLBUILD) $(OBJECTS)

test:
	$(OCAMLBUILD) -tag 'debug' $(TEST) && ./$(TEST)

run : 
	./messenger

connect : 
	telnet localhost 9000

oscar :
	ocamlopt -c encryption.mli encryption.ml
	ocamlfind ocamlopt -package emoji -c reproduce.mli reproduce.ml
	ocamlfind ocamlopt -c checkers.mli checkersAI.mli checkers.ml checkersAI.ml
	ocamlfind ocamlopt -c minesweeper.mli minesweeper.ml
	ocamlfind ocamlopt -package emoji,uutf,cohttp-lwt-unix,lambdasoup,lwt,lwt.unix,logs,str,logs.lwt -c app.mli app.ml
	ocamlfind ocamlopt -package emoji,uutf,cohttp-lwt-unix,lambdasoup,lwt,lwt.unix,logs,str,logs.lwt -linkpkg -o messenger ./minesweeper.ml ./checkers.ml ./checkersAI.ml ./reproduce.ml ./encryption.ml ./app.ml

install : 
	opam update
	opam upgrade
	opam install emoji
	opam install graphics
	opam install cohttp-lwt-unix
	opam install lambdasoup
	opam install lwt logs extlib

docs: docs-public docs-private

docs-public: build
	mkdir -p doc.public
	ocamlfind ocamldoc -I _build -package $(PKGS) \
		-html -stars -d doc.public $(MLIS)

docs-private: build
	mkdir -p doc.private
	ocamlfind ocamldoc -I _build -package $(PKGS) \
		-html -stars -d doc.private \
		-inv-merge-ml-mli -m A -hide-warnings $(MLIS) $(MLS)

zip :
	zip final.zip *.ml *.mli *.txt _tags Makefile emo*

clean:
	ocamlbuild -clean
	rm -rf final.zip
	rm -rf *.o
	rm -rf *.cm*

loc:
	cloc --match-f="\.mli?$$" --found 'LOC-files.txt' --exclude-dir='_build' --not-match-f='^reproduce\.ml' .
