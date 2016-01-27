VERSION:=$(shell xmlstarlet sel \
	-N rdf=http://www.w3.org/1999/02/22-rdf-syntax-ns\# \
	-N em=http://www.mozilla.org/2004/em-rdf\# \
	-t -v /rdf:RDF/rdf:Description/em:version install.rdf || echo nover)

XPI_PREFIX:=y-u-no-validate
XPI:=$(XPI_PREFIX)-$(VERSION).xpi
JAR:=chrome/y-u-no-validate.jar

all: $(XPI)

%.xpi: $(JAR) chrome.manifest install.rdf icon.png COPYING README
	rm -f $@
	zip $@ $?

$(JAR): chrome/content/*
	rm -f $@
	cd $(@D) && zip -r $(@F) content

clean:
	rm -f $(XPI_PREFIX)-*.xpi
	rm -f $(JAR)
