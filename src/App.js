import './App.css';
import React, { useState, useCallback, useEffect, useRef } from 'react'
// import HTMLFlipBook from 'react-pageflip';
import Explore from './components/Explore';
// import Page from './components/page'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flatsurface from './components/Flatsurface';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import { Camera } from "react-camera-pro";
// import html2pdf from 'html2pdf.js';
// import TriviaQuestion from './components/TriviaQuestion';
// import html2canvas from 'html2canvas';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

//open passport function

function Passport() {
  return (
    <>
    </>
  )
}

function App(props) {
  const printRef = React.useRef();
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [display, setDisplay] = useState(true);
  const [click, setClick] = useState(false)
  const [beginGame, setBeginGame] = useState(true);
  const [showText, setTextHide] = useState(false)
  const [popup, setPopup] = useState(false);
  const [preview, setPreview] = useState(true);
  const [edit, setEdit] = useState(true);
  const [imageData, setImageData] = useState('');
  const pdfRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [storedImage, setStoredImage] = useState(null);
  const [storedImagemap, setStoredImagemap] = useState(null);
  const [storedAntarticaImagemap, setStoredAntarticaImagemap] = useState(null);
  const [storedNorthAmericaaImagemap, setStoredNorthAmericaaImagemap] = useState(null);
  const [storedEuropeImagemap, setStoredEuropeImagemap] = useState(null);
  const [storedAfricaImagemap, setStoredAfricaImagemap] = useState(null);
  const [storedAsiaImagemap, setStoredAsiaImagemap] = useState(null);
  const [storedSouthAmericaImagemap, setStoredSouthAmericaImagemap] = useState(null);






  // useEffect(() => {
  //   // Retrieve the stored image from localStorage on component mount
  //   const storedImageData = localStorage.getItem("imageData");
  //   setStoredImage(storedImageData);
  // }, []);

  // const handleImageChange = (event) => {
  // var a=  document.getElementById('profileCameraImage')
  //   const c = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     const imageData = e.target.result;
  //     setSelectedImage(imageData);
  //   };

  //   reader.readAsDataURL(c);
  // };

  // const handleStoreImage = () => {
  //   if (selectedImage) {
  //     localStorage.setItem("imageData", selectedImage);
  //     setStoredImage(selectedImage);
  //   }
  // };
  const startToExplore = () => {
    let name = document.getElementById("typeEmailX");
    //username is stored in vaiable, this can be used for passport.
    let username = document.getElementById("typeEmailX").value
    console.log(username, "username");
    let form = document.getElementById("form");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (name.value === '') {
        // alert("vlaid")
      } else {
        setBeginGame(false);
        const exploring = document.getElementById('screen-2')
        exploring.style.display = "block"
        setTimeout(() => {
          setTextHide(true)
        }, 3000);
      }
    })
  }

  const imageToUrl = () => {
    let imageStorage = document.getElementById('thumbnail')
    console.log(imageStorage);
    localStorage.setItem('arr', imageStorage)
    // const reader = new FileReader();
    // localStorage.setItem("recent-image",reader.result);

  }




  let img
  const save = () => {

    let username = document.getElementById("playerfirstname").value
    // alert(username)
    let usernameonpassport = document.getElementById("usernameonpassport").innerHTML = username;
    // Assuming you have an image element with the id "myImage"
    var imageElement = document.getElementById('profileCameraImage')
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    canvas.width = 350;
    canvas.height = 300;

    context.drawImage(imageElement, 0, 0);

    var dataURL = canvas.toDataURL('image/jpeg');
    localStorage.setItem("savedImages", dataURL);
    console.log("savedImages")
    console.log(dataURL);


    checkCookie(username);
    if (usernameonpassport == username) {
      setPopup(false);
    }
    hideEditOption();
  }



  const editableOption = () => {
    setPopup(!popup);
    // setEdit(false);
  }
  const closeOption = () => {
    setPopup(false);
  }
  const hideCamera = () => {
    setImage(camera.current.takePhoto())
    // storedImage=image
    // handlePhotoCapture()
    setPreview(false)
  }
  const enableCamera = () => {
    console.log("clicked");
    setPreview(true)
  }
  const hideEditOption = () => {
    // setEdit(true);
    console.log('saved');
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  // useEffect(()=>{

  // },[])

  // function checkFromLocalStorage(imageElement) {
  //   let image = getCookie("username");
  //   if (user != "") {
  //     if(usernameonpassport !="John"){
  //       setCookie("username", usernameonpassport, 30);
  //     }else{
  //       document.getElementById('usernameonpassport').innerHTML=user;
  //     }
  //   } else {

  //      if (user != "" && user != null) {
  //        setCookie("username", user, 30);
  //      }else if(usernameonpassport!= "John"){
  //        setCookie("username", usernameonpassport, 30);
  //      }
  //   }
  // }

  function checkCookie(usernameonpassport) {
    let user = getCookie("username");
    if (user != "") {
      if (usernameonpassport != "John") {
        setCookie("username", usernameonpassport, 30);
      } else {
        document.getElementById('usernameonpassport').innerHTML = user;
      }
    } else {

      if (user != "" && user != null) {
        setCookie("username", user, 30);
      } else if (usernameonpassport != "John") {
        setCookie("username", usernameonpassport, 30);
      }
    }
  }
  useEffect(() => {
    checkCookie("John");
  }, [])
  const divRef = useRef(null);
  const handleDownload = () => {
    setEdit(false);
    html2canvas(divRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, 'div_screenshot.png');
      });
    });
  };
  useEffect(() => {
    // Retrieve the stored image from localStorage on component mount
    const storedImageData = localStorage.getItem("savedImages");
    console.log(storedImageData, "storedImageData reterived");
    if (storedImageData) {
      setImage(storedImageData)
      console.log("ghk");
    }
    // setStoredImage(image)
    // setStoredImage(storedImageData);   mapImageEuropeContinen=== 'Europecontinentfromlocalstorage'

  }, []);

  console.log(storedImage, "s");
  console.log(image, "i");
  ///africa
  useEffect(() => {
    const mapImageAfricaContinent = localStorage.getItem("africacontinentfromlocalstorage");
    console.log(mapImageAfricaContinent, "africaimage");
    setStoredAfricaImagemap(mapImageAfricaContinent);
  })


  ///europe
  useEffect(() => {
    const mapImageEuropeContinent = localStorage.getItem("europecontinentfromlocalstorage");
    console.log(mapImageEuropeContinent, "europeimage");
    setStoredEuropeImagemap(mapImageEuropeContinent);
  })
  ///northamerica 
  useEffect(() => {
    const mapImageNorthamericaContinent = localStorage.getItem("northAmericacontinentfromlocalstorage");
    console.log(mapImageNorthamericaContinent, "northamericaimage");
    setStoredNorthAmericaaImagemap(mapImageNorthamericaContinent);
  })

  //asia  mapImageasiacaContinent

  useEffect(() => {
    const mapImageasiacaContinent = localStorage.getItem("asiacacontinentfromlocalstorage");
    console.log(mapImageasiacaContinent, "asiaimage");
    setStoredAsiaImagemap(mapImageasiacaContinent);
  })

  ///southamerica 
  useEffect(() => {
    const mapImageSouthamericaContinent = localStorage.getItem("southcacontinentfromlocalstorage");
    console.log(mapImageSouthamericaContinent, "southamericaimage");
    setStoredSouthAmericaImagemap(mapImageSouthamericaContinent);
  })
  ///antartica
  useEffect(() => {
    const mapImageantarticaContinent = localStorage.getItem("antarticacontinentfromlocalstorage");
    console.log(mapImageantarticaContinent, "antarticaimage");
    setStoredAntarticaImagemap(mapImageantarticaContinent);
  })
  //austrlia content
  useEffect(() => {
    const mapImageContinent = localStorage.getItem("continentfromlocalstorage");
    console.log(mapImageContinent, "image");
    setStoredImagemap(mapImageContinent);
  })
  return (
    <>

      {/* <Router> */}
      <Explore />
      {/* <Flatsurface/>  */}
      {/* <TriviaQuestion/> */}


      {/* passport working */}
      <div id='mobilebiewonly' style={{ display: 'none' }} >

        <div className="passport-header">
          <div className="site-logo-passport-ns"><img src="/images/milkybarLogo.png" alt='logo' /></div>
          <div id="homebutton1" className="passport-home-ns"><img src='/images/hometab.png' /></div>
        </div>

        <div className='container milkybar-bg'>

        </div>

        <div>
          <div className='container download justify-content-center align-items-center downloaderpassport' id="invoice" ref={divRef}>
            {/* <img className='landingfly' src='/images/backgroundpassport.png' /> */}
            <div className='bluepassbook'>
              <img className='mypass' src='/images/mypassport.png' />
              <div>
                <div className='passportsection'>
                  <div className=""><div className=''>
                    <div className=''>
                      <img className='pages' src='/images/pages.png' />
                      <div className='top d-flex justify-content-end'>
                        <div className='px-1 py-2'>
                          {edit && <img className='editing' onClick={editableOption} src='/images/Editing.png' />
                          }


                          <img className='profilesection' id='savedprofile' src="/images/fallback.png" width="20px" height="40px" />

                          <img id='profileCameraImage' className='profilesection' src={image} width="20px" height="40px" />
                        </div>
                        <div className='px-2 py-2 text-dark font-face-gm'>
                          <font className="passportusername">Name</font> <br />
                          <font id="usernameonpassport" className="passportUser">Your Name</font>
                          <p className='texttitle  font-face-gm'>IAM READY TO DISCOVER<br /> THE WORLD!</p>
                        </div>
                      </div>
                    </div>
                    <div className='bottompages'>
                      <img className='continentpages' src='/images/bottompage.png' />
                      <div className='bottom font-face-gm text-center px-2 py-1 yellow'><p className='yellow'> Containents Explored</p>
                        <div className='continents'>
                          {storedNorthAmericaaImagemap ? <img id="northimage" className='northamerica' src={storedNorthAmericaaImagemap} /> : <img id="northimage" className='northamerica' src='./images/Continents/north america-01.png' />
                          }
                          {storedSouthAmericaImagemap ? <img id="southimage" className='southamerica' src={storedSouthAmericaImagemap} /> : <img id="southimage" className='southamerica' src='./images/Continents/south america-01.png' />
                          }{storedAntarticaImagemap ? <img id="antimage" className='antratica' src={storedAntarticaImagemap} /> : <img id="antimage" className='antratica' src='./images/Continents/antratica-01.png' />
                          }                            {storedImagemap ? <img id="ausimage" className='australia' src={storedImagemap} /> : <img id="ausimage" className='australia' src='./images/Continents/australia-01.png' />

                          }

                          {storedAfricaImagemap ? <img id="afrimage" className='africa' src={storedAfricaImagemap} /> : <img id="afrimage" className='africa' src='./images/Continents/africa-01.png' />
                          }
                          {storedAsiaImagemap ? <img id="asiaimage" className='asia' src={storedAsiaImagemap} /> : <img id="asiaimage" className='asia' src='./images/Continents/asia-01.png' />
                          }{storedEuropeImagemap ? <img id="euroimage" className='europe' src={storedEuropeImagemap} /> : <img id="euroimage" className='europe' src='./images/Continents/europe-01.png' />
                          }                          </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="editBtn d-flex justify-content-end">
          <div onClick={handleDownload}> <img className='downloadpassport' src='/images/downloadedbutton.png' /></div>

        </div>
        {popup ? <div className='w3-container w3-center w3-animate-top'>
          <div className='popupModal'>
            <div className='d-flex justify-content-end px-3 py-2'>
              <div className='close' onClick={closeOption}><img src='/images/closebtn.png' width="25px" /></div>
            </div>
            <div>
              <div className='camera'>
                {preview ? <div className='photo'>
                  <Camera className="smileplease" ref={camera}
                  />
                  <div className='capturedPic' onClick={() => hideCamera()}><img src='/images/shutterbutton.png' /></div>
                </div> : <div className='photo'>
                  <div className=''>
                    <img className='previewProfileSection' id='clickedPic' src={image} width="170px" height="160px" />
                    <div className='capturedPreviewPic' onClick={() => enableCamera()}><img className='retake' src='/images/preview.png' /></div>
                  </div>
                </div>}
              </div>
              <div className='playerName'>
                <input id="playerfirstname" className='player font-face-gm  py-2' type='text' placeholder='Enter your first name ' required={true} />
              </div>
              <div className='saveBtn'>
                <button onClick={save} className='font-face-gm savingBtn px-3 py-1'>Save</button>
              </div>
            </div>
          </div>
        </div> : ""}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
