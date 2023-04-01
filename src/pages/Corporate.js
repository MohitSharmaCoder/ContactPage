import React, {useEffect} from 'react'
import Carousel from '../components/Carousel'
import * as RiIcon from "react-icons/ri";
import * as BsIcon from "react-icons/bs";
import * as GiIcon from "react-icons/gi";
// RiEarthFill
const   MStyle = ()=>{
    return (
        <style>
            {`
             .header h1{
                font-size: 20px;  
                // font-family: 'Fredoka', sans-serif;
                font-family: 'Poppins', sans-serif;
             }
             .m-box{
                // font-family: 'Fredoka', sans-serif;
                font-family: 'Poppins', sans-serif;
                background-color: "gray";
             }
             .m-box h2{
                font-size: 22px;
                padding-bottom: 10px;
             }
             
             .image h2{
                font-size: 23px;
             }
             
            form .form{
                width: 70%;
                flex-wrap: wrap;
                justify-content: space-between;
                font-family: 'Poppins', sans-serif;
            } 
            form .form .wid{
                width: 350px;
            }      
            .main-container{
                margin-top: 40px;
                padding: 50px 0px 50px 0px;
                background-color: #17262F; 
                color: white;
                border-radius: 10px;
                font-family: 'Poppins', sans-serif;
            }           
            .form button{
                color: white;
            }   
            .form button:hover{
                color: white;
            }
            .image{
                position: relative;
                width: 250px;
                height: 260px;
                font-family: 'Poppins', sans-serif;
            }
            .image-img{
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .image-overlay{
                font-family: 'Poppins', sans-serif;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.4);
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.25s;
            }

            .image-overlay > *{
                transform: translateY(20px);
                transition: transform 0.25s;

            }
            .image-overlay:hover > *{
                transform: translateY(0);

            }
            .image-overlay:hover{
                opacity: 1;
            }
            .image-title{
                font-size: 24px;
                font-weight: 500;
            
            }
            .image-description{
                font-size: 18px;
                margin-top: 3px;
                font-weight: 500;
            }
            .carousel-img{
                width: 100%;
                height: 350px;
                object-fit: cover;
            }
            .image p{
                font-size: 15px;
            }
            `}
        </style>
    )
}

const Corporate = () => {

    const images = ["./images/corporate/c18.jpg","./images/corporate/c16.jpg","./images/corporate/c3.avif","./images/corporate/c1.avif","./images/corporate/c4.avif","./images/corporate/c5.avif","./images/corporate/c8.avif","./images/corporate/c17.webp","./images/corporate/c19.jpg"]
    useEffect(()=>{
        document.title = "Corporate Holidays – MyTourMakers"
    },[])
  return (
    <>
        <Carousel>
            {images.map((item)=>{
                return (
                    <div>
                        <img className='carousel-img' src={item} alt="" />
                    </div>
                )
            })}
        </Carousel>

        <div className="container">
            <div className="header text-center my-5">
                <h1>THIS IS WHISPER WITH <span className='text-danger'>CORPORATE</span> CLEAN LOOK</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum <br /> repellendus quia nemo tempora hic nesciunt officia vero</p>
            </div>
        </div>
        <hr className="container" />

        <div className="container bg-light my-4">
            <div className="row">
                <div className="col-10 px-3 py-2 m-box mx-auto col-md-4 my-3">
                    <h2 className='px-2'><span className="pe-3"><RiIcon.RiEarthFill/></span> Think Out Of The Box</h2>
                    <p className='px-2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit debitis dolorem quae officiis tempora perspiciatis nihil? Iusto labore, necessitatibus iure ratione consectetur soluta, doloremque nulla at quia alias est.</p>
                </div>
                <div className="col-10 px-3 py-2 m-box mx-auto col-md-4 my-3">
                    <h2  className='px-2'><span className="pe-3"><BsIcon.BsBrushFill/></span> Super Clean Design</h2>
                    <p className='px-2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit debitis dolorem quae officiis tempora perspiciatis nihil? Iusto labore, necessitatibus iure ratione consectetur soluta, doloremque nulla at quia alias est.</p>
                </div>
                <div className="col-10 px-3 py-2 m-box mx-auto col-md-4 my-3">
                    <h2   className='px-2'><span className="pe-3"><GiIcon.GiWoodFrame/></span> Resposive Layout</h2>
                    <p className='px-2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit debitis dolorem quae officiis tempora perspiciatis nihil? Iusto labore, necessitatibus iure ratione consectetur soluta, doloremque nulla at quia alias est.</p>
                </div>
            </div>
        </div>

        <hr  className="container" />

        <div className="container my-5">
            <div className="row">
                <div className="col-10 bg-light py-2 rounded-3 image mx-auto col-md-3 mx-2 my-2">
                <h2 className='pt-2 pb-2'>Lestest project</h2>
                <p>Column Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ea fugiat cum nesciunt aperiam quaerat asperiores, maiores sint maxime iste at aliquid ad nam omnis reiciendis? Consectetur dicta eius ipsa!</p>
                </div>
                <div className="image col-10 py-2 border bg-light rounded-3 mx-auto col-md-3 mx-2 my-2">
                    <img className='image-img  rounded-3' src="./images/corporate/c1.avif" alt="" />
                    <div className="image-overlay">
                        <div className="image-title">Bird</div>
                        <p className="image-description">Here we have bird</p>
                    </div>
                </div>
                <div className="image col-10 py-2 border bg-light rounded-3 mx-auto col-md-3 mx-2 my-2">
                    <img className='image-img  rounded-3' src="./images/corporate/c2.avif" alt="" />
                    <div className="image-overlay">
                        <div className="image-title">Bird</div>
                        <p className="image-description">Here we have bird</p>
                    </div>
                </div>
                <div className="image col-10 py-2 border bg-light rounded-3 mx-auto col-md-3 mx-2 my-2">
                    <img className='image-img  rounded-3' src="./images/corporate/c15.webp" alt="" />
                    <div className="image-overlay">
                        <div className="image-title">Bird</div>
                        <p className="image-description">Here we have bird</p>
                    </div>
                </div>
            </div>
        </div>

        <hr className="container" />

        <div className="container my-5">
            <div className="row">
            <div className="image col-10 py-2 border bg-light rounded-3 mx-auto col-md-3 mx-2 my-2">
                    <img className='image-img  rounded-3' src="./images/corporate/c14.webp" alt="" />
                    <div className="image-overlay">
                        <div className="image-title">Bird</div>
                        <p className="image-description">Here we have bird</p>
                    </div>
                </div>
                <div className="image col-10 py-2 border bg-light rounded-3 mx-auto col-md-3 mx-2 my-2">
                    <img className='image-img  rounded-3' src="./images/corporate/c12.jpg" alt="" />
                    <div className="image-overlay">
                        <div className="image-title">Bird</div>
                        <p className="image-description">Here we have bird</p>
                    </div>
                </div>
                <div className="image col-10 py-2 border bg-light rounded-3 mx-auto col-md-3 mx-2 my-2">
                    <img className='image-img  rounded-3' src="./images/corporate/c21.jpg" alt="" />
                    <div className="image-overlay">
                        <div className="image-title">Bird</div>
                        <p className="image-description">Here we have bird</p>
                    </div>
                </div>     
                <div className="col-10 bg-light py-2 rounded-3 image mx-auto col-md-3 mx-2 my-2">
                <h2 className='pt-2 pb-2'>Lestest project</h2>
                <p>Column Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ea fugiat cum nesciunt aperiam quaerat asperiores, maiores sint maxime iste at aliquid ad nam omnis reiciendis? Consectetur dicta eius ipsa!</p>
                </div>
            </div>
        </div>

        <hr className="container" />

        <div className="container main-container my-5 bg-light text-black">
        
        <form action="/">
            <div className="container d-flex form">
                <div className="wid mb-3 ">
                <label for="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Full Name*"/>
                </div>
                <div className="wid mb-3">
                <label for="company" className="form-label">Company Name</label>
                <input type="text" className="form-control" id="compony" placeholder="Company Name*"/>
                </div>
                <div className="wid mb-3">
                <label for="exampleFormControlInput1" className="form-label">Legal Entry Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Legal Entry Name*"/>
                </div>
                <div className="wid mb-3">
                <label for="phone" className="form-label">Phone*</label>
                <input type="phone" className="form-control" id="phone" placeholder="Phone Number*"/>
                </div>
                <div className="wid mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email*"/>
                </div>
                <div className="wid mb-3">
                <label for="size" className="form-label">Company Size</label>
                <input type="text" className="form-control" id="size" placeholder="Company Size*"/>
                </div>
                <div className="wid mb-3">
                <label for="cin" className="form-label">CIN No</label>
                <input type="text" className="form-control" id="cin" placeholder="CIN No*"/>
                </div>
            </div>
            <div className="container form">
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
            </div>
            <div className="container my-5 form">  
            <button className='container btn btn-danger'>SUBMIT NOW</button>
            </div>
        </form>
    </div>
          
        <MStyle/>
    </>
  )
}

export default Corporate