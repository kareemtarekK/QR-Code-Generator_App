# QR-Code-Generator_App
### Application to generate QR Code with Javascript only not using AI
<h3>The Idea Of Application</h3>
<pre> QR Code Application used to generate QR-Image form its hyber link using javascript
library As AI generate QR Code </pre>
<h1>QRCodejs</h1>
<p>Steps to generate QR-Image</p>
<ul>
  <li>specify link you need to generate QR-Image</li>
  <li>Type link into input</li>
  <li>choose size you want</li>
  <li>click on generate QR Code</li>
  <li>Download QRCode if you need</li>
</ul>
<p>Start of application </p>
<img src="https://github.com/kareemtarekK/QR-Code-Generator_App/blob/main/github/4.jpg" width="500">
<p>when enter the data</p>
<img src="https://github.com/kareemtarekK/QR-Code-Generator_App/blob/main/github/2.jpg" width="500">
<p>QR-Code</p>
<img src="https://github.com/kareemtarekK/QR-Code-Generator_App/blob/main/github/1.jpg" width="500">
<p>if you signed from mobile</p>
<img src="https://github.com/kareemtarekK/QR-Code-Generator_App/blob/main/github/5.png" width="500">
<p>Code for QRCode js Library</p>
<code>
  const generate_QR_Code = () =>{
    new QRCode(qrcode , {
    text : urlInput.value,
    width : select.value,
    height : select.value,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
    });
};
</code>
<pre>
  To read more about library QRCodejs visit this link
  <a href="">visit</a>
</pre>
<a href="https://davidshimjs.github.io/qrcodejs/">Start-Application</a>
