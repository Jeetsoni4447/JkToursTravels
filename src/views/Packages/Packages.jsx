import { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './Packages.css'

function Packages() {

  useEffect(() => {
    const hiddenBoxes = document.querySelectorAll('.transition_hide');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('transition_show');
        } else {
          entry.target.classList.remove('transition_show');
        }
      });
    });

    hiddenBoxes.forEach((box) => observer.observe(box));

    return () => {
      hiddenBoxes.forEach((box) => observer.unobserve(box));
    };
  }, []);

  const PackageCards = [
    {
      id: 1,
      title: ' LEH-LADAKH ',
      image: './src/external_folder/jkimg/packages/Leh-Ladakh.webp',
      paragraph_title: '10-Nights / 11-Days',
      paragraph: '01 Night Manali 01 Night Jispa 02 Night Leh 01 Night Nubra 01 Night Leh 01 Night Pangong Lake 01 Night Leh 01  Night Kargil 01 Night Srinagar',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 2,
      title: ' CHARDHAM YATRA ',
      image: './src/external_folder/jkimg/packages/Chardham-Yatra.webp',
      paragraph_title: '10-Nights / 11-Days',
      paragraph: 'Delhi - Haridwar(1-Night) - Barkot(2-Night) - Uttarkashi(2-Night) - Sitapur(2-Night) - Badrinath(1-Night) - Pipakoti/Joshimath(1-Night) - Haridwar(1-Night) - Delhi Droping only',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 3,
      title: ' HIMACHAL ',
      image: './src/external_folder/jkimg/packages/Manali.jpg',
      paragraph_title: '9-Nights / 10-Days',
      paragraph: '02 Nights Shimla 03 Night Manali 01 Night Dharamshala 02 Night Dalhousie 01 Night Amritsar',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 4,
      title: ' RAJASTHAN ',
      image: './src/external_folder/jkimg/packages/rajasthan.jpg',
      paragraph_title: '7-Nights / 8-Days',
      paragraph: '02 Nights Jaipur 01 Night Pushkar 01 Night Jodhpur 01 Night Mountabu 02 Night Udaipur',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 5,
      title: ' UTTARAKHAND ',
      image: './src/external_folder/jkimg/packages/Mussoorie.jpg',
      paragraph_title: '7-Nights / 8-Days',
      paragraph: 'Delhi - Nainital-(2 Nights) Jim Corbett-(2 Nights) Haridwar(1 Nights) Mussoorie(2 Nights) - Delhi',
      paragraph_note: 'For Booking Call Or Whatsapp',
    },
    {
      id: 6,
      title: ' GOA ',
      image: './src/external_folder/jkimg/packages/goa.jpg',
      paragraph_title: '3-Nights / 4-Days',
      paragraph: 'Goa - North Goa - South Goa - Goa',
      paragraph_note: 'For Booking Call Or Whatsapp',
    }
  ]

  return (
    <>
      <Hero />

      <div className="package_title transition_hide">
        <h3>PACKAGES</h3>
      </div>

      <div className="main_package">
        <div className="main_package_frame transition_hide">
          {PackageCards.map((pc) => (
            <div key={pc.id} className="package_card transition_hide">
              <div className="card_img">
                <img src={`${pc.image}`} className="card_img_contant" alt="..." />
              </div>
              <div className="card_contant">
                <div className="card_heading transition_hide">
                  {pc.title}
                </div>
                <div className="card_note">
                  <p className="card_paragraph_title transition_hide">
                    {pc.paragraph_title}
                  </p>
                  <p className="card_paregraph transition_hide">
                    {pc.paragraph}<br /><br />
                    {pc.paragraph_note}
                  </p>
                  <div className="card_btn_component">
                    <a href="https://wa.me/919904803601" className="WhatsAppbtn" >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <FontAwesomeIcon icon={faWhatsapp} />WhatsApp
                    </a>
                    <a href="tel:+918866381429" className="Contactbtn" >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <FontAwesomeIcon icon={faPhone} />Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="end_note transition_hide">
        <h1 className="end_note_title">NOTE :-&nbsp;</h1>
        <p>Contact This Number&nbsp;:- 9904803601 For More Packages And Custom Packages.</p>
      </div>
    </>
  )
}

export default Packages
