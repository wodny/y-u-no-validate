zulernia.xpi: chrome/zulernia.jar chrome.manifest install.rdf
	rm -f zulernia.xpi && zip zulernia.xpi chrome/zulernia.jar chrome.manifest install.rdf

chrome/zulernia.jar: chrome/content/*
	cd chrome && rm -f zulernia.jar && zip -r zulernia.jar content

clean:
	rm -f zulernia.xpi && rm -f chrome/zulernia.jar
