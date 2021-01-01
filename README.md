
# Run locally

```
npm run serve
```

# Compile SCSS files

To run the compiler

```
cd /Users/jv/Desktop/MyDevelopment/github/website/internet-resources/resources

./sass-compiler
```

May want to clear the cache.

```
cd /Users/jv/Desktop/MyDevelopment/github/website/internet-resources/resources

rm -rf .sass-cache
```

## To add a resource

1. Rename data/1.0.0.x to data/1.0.0.x+1

2. Edit index.html, change only

```
<script src="./resources/js/data/1.0.0.28/db.js"></script>
```

3. Edit `db.js`

Find section to contain the new resource.

Add, for example

```
{
	"image": "",
	"url": "https://www.mockaroo.com/",
	"header": "Mockaroo",
	"text": "Realistic Data Generator"
}
```

Add an image. If you cannot get an image, leave image empty and the default will be applied.

## Image

Usually by scanning the Network tab on page refresh a suitable image will be revealed.

For example

```
/assets/kangaroo-white-3a977872f8f57d25e13c772e9ae8756b0d1aa9a19fc49b1e4eb25ac8dc14c39a.svg
```

Get the image

```
wget "https://www.mockaroo.com/assets/kangaroo-white-3a977872f8f57d25e13c772e9ae8756b0d1aa9a19fc49b1e4eb25ac8dc14c39a.svg"
```

if get

```
OpenSSL: error:14077410:SSL routines:SSL23_GET_SERVER_HELLO:sslv3 alert handshake failure
```

use `curl`

```
curl "https://www.mockaroo.com/assets/kangaroo-white-3a977872f8f57d25e13c772e9ae8756b0d1aa9a19fc49b1e4eb25ac8dc14c39a.svg" > jv.svg
```

### Save Image

Copy the downloaded image to

```
/Users/jv/Desktop/MyDevelopment/github/website/internet-resources/resources/images/logos
```

Rename to the name of the site, for example `mockaroo.svg`


## SVG images


## Notes

* Based on: http://codingheroes.io/resources/

* Use images/logos/codesandbox.svg as a guide.
