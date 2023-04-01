import React, {useState} from 'react'
import * as ImIcon from 'react-icons/im'
import * as MdIcon from 'react-icons/md'
import * as AiIcon from 'react-icons/ai'
import * as HiIcon from 'react-icons/hi'
import * as GiIcon from 'react-icons/gi'
import * as SiIcon from 'react-icons/si'

const Pstyle = ()=>{
    return (
        <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');

            .one-top{
                background: linear-gradient(0deg, white 10%, #c6d8e3);
            }
            .img-div img{
                width:100%;
                height:370px;
                object-fit:cover;
            }
            .img-div-small img{
                width:100%;
                height:100px;
                object-fit:cover;
            }
            .money-card-top{
                padding:0px 20px;
            }
            .p-img{
                cursor:pointer;
            }
            .ema-top{
                color:gray;
            }
            .ema-img img{
                width:55px;
                height:55px;
                object-fit:cover;
                border-radius:50%;
            }
            .per-otit{
                font-size:23px;
                font-weight:600;
            }
            .per-tit{
                font-size:20px;
                font-weight:600;
            }
            .per-btit{
                font-weight:500;
            }

                .mainb-container{
                    background-color: rgb(228, 237, 253);
                }
                .container{
                    min-width:90%;
                }
                .con-5{
                    font-family: 'Poppins', sans-serif;
                }
                .one-p{
                    font-size:15px;
                }
                h3{
                    font-size:24px;
                    font-weight:600;
                }
                .container-cards{
                    width:82%;
                }
                .card-one{
                    height:260px;
                }
                .near-img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                }
                

                .card-one-ch{
                    height:74%;
                    width:74%;
                    border-radius:10px;
                    box-shadow: 1px 1px 30px red;
                }
                .card-one-ch img{
                    border-radius:10px;
                }
                .main-place{
                    background: linear-gradient(96deg, white 10%, rgb(255, 211, 145));
                }
                .con-5{
                    font-family: 'Poppins', sans-serif;
                }
                .form-container{
                    width:50%;
                    box-shadow: 1px 1px 30px rgb(236, 231, 231);
                }
                @media screen and (max-width:980px){
                    . gt-one{
                        
                    }
                }
                @media screen and (max-width:600px){
                    .gt-one{
                        margin:auto;
                    }
                    .money-card-top{
                        padding:0px 20px;
                    }
                    .form-container{
                        width:100%;
                        padding: 10px 10px;
                    }
                }
                
            `}
        </style>
    )
}
const Contact = () => {
    const iarr = ["./images/contact/w1.jpg","./images/contact/w2.jpg","./images/contact/w3.webp","./images/contact/w4.jpg"]
    const [imgChnage, setImgChnage] = useState(iarr[0])
  return (
    <div>
        <div className="one-top con-5">
        <div className="container pt-5">
        <div className="row con-5">
            <div className="col-10 col-md-7 pt-3 mb-2 gt-one px-0">
                <div className="img-div mb-3">
                    <img id='chimh' src={imgChnage} alt="" />
                </div>
                <div className="img-bottom-div">
                    <div className="row mb-2">
                        {iarr.map((fimg, index)=>{
                            return (
                                <div key={index} className="col-3 m-auto col-md-3 m-atuo img-div-small">
                                <img className='p-img' onClick={()=> setImgChnage(fimg)} src={fimg} alt="" />
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
            <div className="col-10 col-md-4 money-card-top m-auto bg-white py-4 rounded-3 my-3 con-5">
                <h3 className='per-otit'>Places Alexanderplatz</h3>
                <div className="span my-3"><span className='bg-warning py-2 px-3 rounded-3'>Office Availble</span></div>
                <div className='d-flex'><p className='me-2'><ImIcon.ImLocation2/></p> <p>Your own private office Brlin, BE 10178 Germany</p></div>
                <p><span className="me-2 per-btit"><MdIcon.MdWatchLater/></span>Coworking access:</p>
                <p><span className="ms-4">Mon-Wed</span> <span className="ms-4">7PM-9PM</span></p>
                <p><span className="ms-4">Thu-Fri</span> <span className="ms-5">8AM-8PM</span></p>
                <p><span  className="me-2"><MdIcon.MdWatchLater/></span> Show on m..</p>
                <p> <span className="me-2"><SiIcon.SiGmail/></span>fully furnished</p>
                <hr />
                <div className="row">
                    <div className="col-2 col-md-2 me-3 ema-img">
                        <img src="./images/contact/w2.jpg" alt="" />
                    </div>
                    <div className="col-9 col-md-9">
                        <h5 className="per-tit">Emma Arora</h5>
                        <p className='ema-top'>community Manager</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

         <div className="container con-5">
            <div className="container">
            <div className="perks-top my-5">
                <h3>Location perks</h3>
                <p>Updated with your health and safty in your mind</p>
            </div>
            <div className="row">
                <div className="col-5 col-md-3 m-auto text-center mb-5">
                <h3 className='text-warning'><MdIcon.MdWatchLater/></h3>
                <p>24/7 secure access</p>
                </div>
                <div className="col-5 col-md-3 m-auto text-center mb-5">
                <h3 className='text-warning'><SiIcon.SiGmail/></h3>
                <p>Recieve mails & packages</p>
                </div>
                <div className="col-5 col-md-3 m-auto text-center mb-5">
                <h3 className='text-warning'><GiIcon.GiSpeakerOff/></h3>
                <p>Designeted quite work space</p>
                </div>
                <div className="col-5 col-md-3 m-auto text-center mb-5">
                <h3 className='text-warning'><MdIcon.MdSignalWifi4Bar/></h3>
                <p>super fast wifi conection</p>
                </div>
            </div>
            </div>
        </div>

        <div className="mainb-container py-4 con-5">
            <div className="top-content text-center my-5">
                <h3>Workspace tailered to your needs</h3>
                <p>checkout what options we have for you and your business</p>
            </div>
            <div className="container con-5">
                <div className="row con-5">
                    <div className="col-10 col-md-3 money-card m-auto bg-white px-4 py-5 rounded-3 mb-5">
                        <div className="span"><span className='bg-light py-2 px-3 rounded-3'>Office Space</span></div>
                        <div className="span-one my-4"><span className='span-one-a'>220$</span><span className='span-one-b'>/ person, full month</span></div>
                        <p>Your own private office with a flexible contract that adapts to your business.</p>
                        <p> <span className="me-2"><MdIcon.MdWatchLater/></span>Access 24/7/365</p>
                        <p> <span className="me-2"><AiIcon.AiFillStar/></span>fully furnished</p>
                        <p> <span className="me-2"><AiIcon.AiFillHeart/></span>Membership perks include</p>
                        <button className="btn btn-warning w-100">Book a tour</button>
                    </div>
                    <div className="col-10 col-md-3 money-card m-auto bg-white px-4 py-5 rounded-3 mb-5">
                        <div className="span"><span className='bg-light py-2 px-3 rounded-3'>Office Space</span></div>
                        <div className="span-one my-4"><span className='span-one-a'>220$</span><span className='span-one-b'>/ person, full month</span></div>
                        <p>Your own private office with a flexible contract that adapts to your business.</p>
                        <p> <span className="me-2"><MdIcon.MdWatchLater/></span>Access 24/7/365</p>
                        <p> <span className="me-2"><AiIcon.AiFillStar/></span>Networking events</p>
                        <p> <span className="me-2"><AiIcon.AiFillHeart/></span>Membership perks include</p>
                        <button className="btn btn-warning w-100">Book a tour</button>
                    </div>
                    <div className="col-10 col-md-3 money-card m-auto bg-white px-4 py-5 rounded-3 mb-5">
                        <div className="span"><span className='bg-light py-2 px-3 rounded-3'>Office Space</span></div>
                        <div className="span-one my-4"><span className='span-one-a'>220$</span><span className='span-one-b'>/ person, full month</span></div>
                        <p>Your own private office with a flexible contract that adapts to your business.</p>
                        <p> <span className="me-2"><MdIcon.MdWatchLater/></span>Access 24/7/365</p>
                        <p> <span className="me-2"><ImIcon.ImLocation2/></span>Business access at place</p>
                        <p> <span className="me-2"><HiIcon.HiHome/></span>Membership perks include</p>
                        <button className="btn btn-warning w-100">Book a tour</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-5 con-5 py-2">
            <div className="row">
                <div className="col-10 col-md-4 m-auto place-one mb-5">
                    <h3 className='mb-3'>Why choose places Alexanderplatz</h3>
                    <p  className='mb-3 one-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, numquam tempore voluptatibus eius eum voluptatem. Iusto ea cupiditate quos inventore debitis a modi, porro quaerat, dignissimos fuga magni exercitationem sit.</p>
                    <p   className='mb-2 one-p'><span className='me-3'><ImIcon.ImLocation2/></span> Central Location</p>
                    <p   className='mb-2 one-p'><span className='me-3'><MdIcon.MdShoppingCart/></span> Nearby Services</p>
                    <p   className='mb-2 one-p'><span className='me-3'><AiIcon.AiFillHeart/></span> Designer Workplace</p>
                </div>
                <div className="col-10 col-md-6 m-auto">
                    <div className="card  mb-3">
                    <img src="./images/contact/p.png" className="card-img-top" alt="..."/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-cards m-auto my-5 con-5">
            <div className="text-center"> 
            <h3 className='mb-5'>Why choose places Alexanderplatz</h3></div>
            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-4 m-auto place-one mb-5">
                    <div className="card card-one m-auto">
                    <img className='near-img' src="./images/contact/w1.jpg" alt="..."/>
                    </div>
                    <div className="div mt-2">
                        <h5> places</h5>                    
                        <p>Lorem  places</p>
                    </div>
                </div>
                <div className="col-10 col-md-4 m-auto place-one mb-5">
                    <div className="card card-one m-auto">
                    <img className='near-img' src="./images/contact/w2.jpg" alt="..."/>
                    </div>
                    <div className="div mt-2">
                        <h5>Near place</h5>                    
                        <p>Check it</p>
                    </div>
                </div>
                <div className="col-10 col-md-4 m-auto place-one mb-5">
                    <div className="card card-one m-auto">
                    <img className='near-img' src="./images/contact/w4.jpg" alt="..."/>
                    </div>
                    <div className="div mt-2">
                        <h5>Design Room</h5>                    
                        <p>$dollar</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container m-auto d-flex justify-content-center flex-wrap con-5 mb-5">
                <div className="col-10 col-md-4 m-auto bg-white place-one pb-5 pe-4">
                    <h3 className='mb-4'>Why choose places Alexanderplatz</h3>
                    <p className='mb-4 one-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, numquam tempore voluptatibus eius eum voluptatem. Iusto ea cupiditate quos inventore debitis a modi, porro quaerat, dignissimos fuga magni exercitationem sit.</p>
                    <button className="btn bg-danger text-white px-4 py-2">Enroll a free tour</button>
                </div>
                <div className="col-10 col-md-6 m-auto main-place py-4">
                    <div className="card-one-ch m-5">
                    <img src="./images/contact/w4.jpg" className="card-img-top" alt="..."/>
                    </div>
                </div>
        </div>

        <div className='my-5'>

            <div className="form-container m-auto p-5 rounded-3 mb-5 con-5">
                <div className="topf-o text-center">
                    <h3>Let's get in touch</h3>
                    <p>Leave your details and get a free trial on a tour</p>
                </div>
            <form action="" className='con-5'>
                <p>What options you're intrested in?</p>
                <div className="form-top mb-3 d-flex flex-wrap">
                    <div className="form-check mb-3  me-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="r-one"/>
                    <label className="form-check-label"htmlFor="r-one">
                        EMI Tour
                    </label>
                    </div>
                    <div className="form-check mb-3  me-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="r-two"/>
                    <label className="form-check-label"htmlFor="r-two">
                    Full Tour
                    </label>
                    </div>
                </div>

            <div className="bottom-form">
                <p>Your Details</p>
                <div className="d-flex">
                    <div className="mb-3  me-3 w-50">
                    <input type="text" className="form-control w-100" id="name" placeholder="name*"/>
                    </div>
                    <div className="mb-3 w-50">
                    <input type="email" className="form-control w-100" id="email" placeholder="email*"/>
                    </div>
                </div>

                <div className="mb-3">
                <input type="text" className="form-control" id="phone" placeholder="phone*"/>
                </div>
                <div className="mb-3">
                <textarea className="form-control" id="description" rows="3" placeholder='Query*'></textarea>
                </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde amet veniam accusamus aperiam quaerat et aut? Unde, ex?olores, eius explicabo dolor similique at!</p>
            <div type="submit" className="btn bg-warning text-white my-2 px-3">Submit</div>
            </form>
            </div>

        </div>
       
        <Pstyle/>
    </div>
  )
}

export default Contact