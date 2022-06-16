set IPADDR="192.168.155.168"
cd example
hugo server --gc --themesDir=../../ --buildDrafts --bind %IPADDR% --baseURL http://%IPADDR%:1313
