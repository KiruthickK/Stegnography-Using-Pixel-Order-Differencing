# Stegnography-Using-Pixel-Order-Differencing
## this project is live at : <a href="https://plain-worm-pea-coat.cyclic.app/"> Click Here</a>
Steganography using dual ecryption, once on pixel itself and other on changing the pixel order according to user input.
This project is implemented as website using <b>NodeJs</b><br>
To run this project make sure the localhost port 3000 is free.

requirements and how to run:
<ul>
  <li>node js</li>

  <li>*run "npm install" command to run all the dependencies</li>

  <li>run "node app" to start the serve</li>
  
  <li>search "localhost:3000" in the browser to open the website</li>
  <li>Create a Database connection with MongoDB and paste the connection link in the app.js</li>
</ul>
<h3>Methodology</h3>
In this study an improvised image steganography method called Pixel Order 
Differencing (POD) with reference to pixel value differencing. Where in PVD, the pixels which 
are going to be hidden will choose the cover image pixel where the cover image pixel will the 
difference between two adjacent pixels, so more data is embedded into two pixels located in 
the edge area, than in the smooth area. This is only applicable if we hide small image in a big 
cover image or hide text inside image. In our model we are trying to hide a secret image with 
same size of cover image. In this process the secret image pixels will divide into blocks and 
each block is reversed, encrypted then hidden into the cover image. Instead of simply reversing 
all pixels, reversing small blocks of pixels will produce a great difference in ordering the pixels 
in cover image. In this process, the block size is determined by the secret key, which is given 
while encryption. First the remainder of dividing the secret key with 16 will be stored in a 
variable, then the block size will be formed by multiplying the remainder with secret key 
followed by multiplied with a constant, so each secret key has unique output, so if the wrong 
secret key is given while decrypting, even the wrong key is one value higher than the correct 
key, the output will produce a great difference. Why we have chosen 16 because we will use 
the same remainder variable to perform XOR pixel encryption operation later, so we are going 
to encrypt each pixel which is the MSB of secret image, meaning the pixel will only be 4-bits 
(0-15 in decimal), so the resultant of encryption should be range from 0-15. The remainder by 
diving 16 will range from 0 to 15 and XOR operation between two 4-bit value will result in 4-
bit and if anyone operand is 8-bit then the output will also be 8-bit. The embedded secret image 
can be extracted from the resulting stego-image without referencing the original cover image.
Every pixel of secret image after pixel order differencing will undergo XOR pixel encryption 
before they embedded inside cover image.
