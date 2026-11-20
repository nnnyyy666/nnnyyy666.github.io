"use strict";

function main() {
  // Get A WebGL context
  /** @type {HTMLCanvasElement} */






  imagesLoaded(document.querySelectorAll('.intro__pic-wrap'), () => {
 // $('.intro__pic-wrap').imagesLoaded( function() {
      const canvas = document.getElementById("canvas");
      const imgTarget = document.getElementById("imgTarget");
      // canvas.width = parent.width();
      canvas.width = imgTarget.offsetWidth;
      canvas.height = imgTarget.offsetHeight;

      imgTarget.style = "opacity: 0;"
     // imgTarget.css("opacity", "0");
     // alert(canvas.width+" мои размеры "+canvas.height);
      body.classList.remove('loading');
    //  alert("убрали");
  });
 // });
  //
    //canvas.height = 300;

  const gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  let originalImage = { width: 1, height: 1 }; // replaced after loading
  const originalTexture = twgl.createTexture(gl, {
    src: "img/44.jpg",
    crossOrigin: '',
  }, (err, texture, source) => {
    originalImage = source;
  });
  
  const mapTexture = twgl.createTexture(gl, {
    src: "img/44-2.jpg", crossOrigin: '',
  });
  

  // compile shaders, link program, lookup location
  const programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);

  // calls gl.createBuffer, gl.bindBuffer, gl.bufferData for a quad
  const bufferInfo = twgl.primitives.createXYQuadBufferInfo(gl);

  const mouse = [0, 0];
  document.addEventListener('mousemove', (event) => {
    mouse[0] = (event.clientX / gl.canvas.clientWidth  * 2 - 1) * -0.02;
    mouse[1] = (event.clientY / gl.canvas.clientHeight * 2 - 1) * -0.02;
  });
	
	document.addEventListener('touchmove', (event) => {
    mouse[0] = (event.touches[0].clientX / gl.canvas.clientWidth  * 2 - 1) * -0.02;
    mouse[1] = (event.touches[0].clientY / gl.canvas.clientHeight * 2 - 1) * -0.02;
  });
	
	document.addEventListener('touchend', (event) => {
    mouse[0] = 0;
    mouse[1] = 0;
  });
	
	var nMouse = [0, 0];
	var oMouse = [0, 0];
  
  requestAnimationFrame(render);
  
  function render() {
    
    twgl.resizeCanvasToDisplaySize(gl.canvas);



    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);


    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(programInfo.program);

    // calls gl.bindBuffer, gl.enableVertexAttribArray, gl.vertexAttribPointer
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);

    const canvasAspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const imageAspect = originalImage.width / originalImage.height;

     // alert(imageAspect);
    const mat = m3.scaling(imageAspect / canvasAspect, -1);
		
		nMouse[0] += (mouse[0] - nMouse[0]) * 0.05;
		nMouse[1] += (mouse[1] - nMouse[1]) * 0.05;
			
    // calls gl.activeTexture, gl.bindTexture, gl.uniformXXX
    twgl.setUniforms(programInfo, {
      u_matrix: mat,
      u_originalImage: originalTexture,
      u_mapImage: mapTexture,
      u_mouse: nMouse,
    });
		
    // calls gl.drawArrays or gl.drawElements
    twgl.drawBufferInfo(gl, bufferInfo);
    
    requestAnimationFrame(render);
  }
}

const body = document.body;

if (document.body.classList.contains('index')) {

//if (body.hasClass("index")) {
//  alert("проверка на главную");
main();

  //  TweenMax.to(".intro__h1", 2, {x:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut});

    if (window.innerWidth > 991) {
        TweenMax.from(".intro__h1", 1.5, {
            x: "+300",
            opacity: 0,
            ease: Power2.easeInOut
        });
        TweenMax.from(".intro__h2", 1, {
            opacity: "0",
            y: "30",
            delay: .5,
            ease: Power2.easeInOut
        });
        TweenMax.from(".intro__main-text", 1, {
            opacity: "0",
            y: "30",
            delay: 1,
            ease: Power2.easeInOut
        });

        TweenMax.from(".intro__btn-wrap", 1, {
            opacity: "0",
            x: "100",
            delay: 1.5,
            ease: Power2.easeInOut
        });


        TweenMax.staggerFrom(".header .nav-item", .2, {
            opacity: "0",
            y: "10",
            delay: .2,
            ease: Power2.easeInOut
        }, .2);

        TweenMax.from(".soc-icons", .3, {

            x: "50",
            opacity: "0",
            delay: 2,
            ease: Power2.easeInOut
        });

        // TweenMax.staggerTo(yourArray, duration, {...properties...}, delayBetweenEach);


    }




}