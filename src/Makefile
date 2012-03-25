y-u-no-validate.xpi: chrome/y-u-no-validate.jar chrome.manifest install.rdf
	rm -f y-u-no-validate.xpi && \
	    zip y-u-no-validate.xpi \
	        chrome/y-u-no-validate.jar \
		chrome.manifest \
		install.rdf \
		icon.png \
		COPYING \
		README

chrome/y-u-no-validate.jar: chrome/content/*
	cd chrome && rm -f y-u-no-validate.jar && zip -r y-u-no-validate.jar content

clean:
	rm -f y-u-no-validate.xpi && rm -f chrome/y-u-no-validate.jar
