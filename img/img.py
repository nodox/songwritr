import urllib, urlparse
import os

import shutil
import requests

images = ["http://www.chordsbykey.com/images/AsM9.jpg","http://www.chordsbykey.com/images/BsM9.jpg","http://www.chordsbykey.com/images/CsM9.jpg","http://www.chordsbykey.com/images/DsM9.jpg","http://www.chordsbykey.com/images/EsM9.jpg","http://www.chordsbykey.com/images/FsM9.jpg","http://www.chordsbykey.com/images/GsM9.jpg"]

count = 0

for x in images:
	url = x
	count += 1
	name = url[34:35];
	response = requests.get(url, stream=True)
	with open( name+'sm9.jpg', 'wb') as out_file:
		shutil.copyfileobj(response.raw, out_file)
	del response