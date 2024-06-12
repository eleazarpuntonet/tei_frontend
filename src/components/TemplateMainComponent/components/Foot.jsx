import React from "react";
import { assets } from "../../../assets";
import WhatsApp from "../../../assets/icons/SVG/WhatsApp";
export const Foot = () => {
    return (
        <>
        {/* Inicio Footer */}
		<div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
			<div className="container">
				<div className="row gx-5" style={{height: '100%'}}>
					<div className="col-lg-4 col-md-12 pt-5 mb-5 d-flex center_v">
						<img id="logo_COLOR" src={assets.logo_color} className='logo' alt="logo"></img>
					</div>
					<div className="col-lg-2 col-md-12 pt-0 pt-lg-5  d-flex center_v">
						<div className="section-title section-title-sm position-relative pb-3 mb-4">
							{/* <h3 className="text-light mb-0">Sobre Nosotros</h3> */}
						</div>
					</div>
					<div className="col-lg-2 col-md-12 pt-0 pt-lg-5  d-flex center_v">
						<div className="section-title section-title-sm position-relative pb-3 mb-4">
							{/* <h3 className="text-light mb-0">Ayuda</h3> */}
						</div>
					</div>
					<div className="col-lg-4 col-md-12 pt-0 pt-lg-5  d-flex center_v">
						{/* <div className="section-title section-title-sm position-relative pb-3 mb-4"> */}
							{/* <h3 className="text-light mb-0">Contactanos</h3> */}
						{/* </div> */}
						<div className="link-animated d-flex flex-column justify-content-start">
							<div className='icon_box_'>
								<div className='icons'>
									<a href="https://www.instagram.com/tuenlaceccs/" rel="noreferrer" target="_blank">
										<img src={assets.instagram} alt="instagram" />
									</a>
									<a href="https://www.instagram.com/tuenlaceccsvip/" rel="noreferrer" target="_blank" className="custom-text-link">
										<img src={assets.instagram} alt="instagram" /> <span>VIP</span>
									</a>
									<a href="https://www.tiktok.com/@tuenlaceccsoficial?_t=8n7Qi6rmXpN&_r=1" rel="noreferrer" target="_blank" className="icon-37">
										<img src={assets.tiktok} alt="tiktok"  style={{height: '35px'}}/>
									</a>
									<a href="https://wa.me/message/IEXROXELMZXXD1" rel="noreferrer" target="_blank" className="icon-37">
										<img src={assets.whatsapp} alt="twitter" style={{height: '35px'}}/>
									</a>
								</div>                                
							</div>  
						</div>
					</div>
				</div>
			</div>
		</div>	
		{/* Fin Footer */}
        </>
    )
}