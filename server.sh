export IPADDR="$(ipconfig getifaddr en0)"
cd example && hugo server --gc --themesDir=../../ --buildDrafts --bind $IPADDR --baseURL http://$IPADDR 