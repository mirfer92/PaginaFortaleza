import { RiHeart3Fill } from '@remixicon/react'
import { useState } from "react";

import './ContactUs.css'
import "react-phone-number-input/style.css";
import Form from './Form';
import { ContactUsFormData } from '../../../assets/types/ContactUsFormData';
import { capitalize } from "../../../utils/commonUtils";
import legend from '../../../assets/img/legend.png';
import logo from '../../../assets/img/logo_15.jpg';



function ContactUs() {
    const [isSubmitForm, setIsSubmitForm] = useState<boolean>(false);
    const [formData, setFormData] = useState<ContactUsFormData>(
        {firstName: '', lastName: '', email: '', phone: '', comments: ''}
    );
    const submitFormData = (data: ContactUsFormData) => {
        setFormData(data);
        setIsSubmitForm(true);
    };

    const resetFormData = () => {
        setFormData({firstName: '', lastName: '', email: '', phone: '', comments: ''});
        setIsSubmitForm(false);
    };
    return(
        <section className="contactUs">
            <div className="contactUs__form">
                <h2 className="contactUs__form__title">
                    {isSubmitForm ?
                        '!Sus datos fueron recibidos con éxito!'
                    :
                        'Ponte en contacto con nosotros'
                    }
                </h2>
                {isSubmitForm ? 
                    <div className="contactUs__form__success">
                        <div className="contactUs__form__success__message">
                            {'Estimado/a'} <b>{`${capitalize(formData.firstName)} ${capitalize(formData.lastName)}`}</b>{', gracias por contactarse con nosotros. Nos pondremos en contacto con usted a la brevedad posible'}
                            <RiHeart3Fill size={0} className="contactUs__form__success__icon"/>
                        </div>
                        <div className="contactUs__form__success__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div
                            className="contactUs__form__button contactUs__form__success__comeBack"
                            onClick={resetFormData}
                        >
                            Volver
                        </div>
                    </div>
                :
                    <Form submitFormData={submitFormData} resetFormData={resetFormData}/>
                }
            </div>
            <figure className="contactUs__picture">
                <img src={legend} alt="" />
            </figure>
        </section>
    )
}

export default ContactUs;