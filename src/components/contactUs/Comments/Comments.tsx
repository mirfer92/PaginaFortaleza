import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { useState } from "react"
import { RiHeart3Fill } from '@remixicon/react'
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

import './Comments.css'
import "react-phone-number-input/style.css";
import { capitalize } from "../../../utils/commonUtils";
import legend from '../../../assets/legend.png';
import logo from '../../../assets/logo_15.jpg';

interface CommentsFormProps {
    firstName: string
    lastName: string
    email: string
    phone?: string
    comments: string
};

function Comments() {
    const [isSubmitForm, setIsSubmitForm] = useState<boolean>(false);
    const [formData, setFormData] = useState<CommentsFormProps>(
        {firstName: '', lastName: '', email: '', phone: '', comments: ''}
    );
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors }
    } = useForm<CommentsFormProps>()
    
    const onSubmit: SubmitHandler<CommentsFormProps> = (data) => {
        setFormData(data);
        setIsSubmitForm(true);
    };

    const handleReset = () => {
        setFormData({firstName: '', lastName: '', email: '', phone: '', comments: ''});
        setIsSubmitForm(false);
        reset();
    };

    return(
        <section className="comments">
            <div className="comments__form">
                <h2 className="comments__form__title">
                    {isSubmitForm ?
                        '!Sus datos fueron recibidos con éxito!'
                    :
                        'Ponte en contacto con nosotros'
                    }
                </h2>
                {isSubmitForm ? 
                    <div className="comments__form__success">
                        <div className="comments__form__success__message">
                            {'Estimado/a'} <b>{`${capitalize(formData.firstName)} ${capitalize(formData.lastName)}`}</b>{', gracias por contactarse con nosotros. Nos pondremos en contacto con usted a la brevedad posible'}
                            <RiHeart3Fill size={0} className="comments__form__success__icon"/>
                        </div>
                        <div className="comments__form__success__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div
                            className="comments__form__button comments__form__success__comeBack"
                            onClick={handleReset}
                        >
                            Volver
                        </div>
                    </div>
                :
                    <form onSubmit={handleSubmit(onSubmit)} className="comments__form__form">
                        <div className="comments__form__item">
                            <label htmlFor="firstName">Nombre/s (*)</label>
                            <input
                                {...register("firstName",
                                    {
                                        required: 'Su nombre es requirido',
                                        maxLength: {
                                            value: 50,
                                            message: 'Se admiten sólo 50 caracteres',
                                        },
                                    }
                                )}
                            />
                            {errors.firstName && <span>{`${errors.firstName.message}`}</span>}
                        </div>
                        
                        <div className="comments__form__item">
                            <label htmlFor="lastName">Apellido/s (*)</label>
                            <input
                                {...register("lastName",
                                    {
                                        required: 'Su apellido es requirido',
                                        maxLength: {
                                            value: 50,
                                            message: 'Se admiten sólo 50 caracteres',
                                        },
                                    }
                                )}
                            />
                            {errors.lastName && <span>{`${errors.lastName.message}`}</span>}
                        </div>

                        <div className="comments__form__item">
                            <label htmlFor="email">Email (*)</label>
                            <input 
                                {...register("email", 
                                    {
                                        required: 'Su email es requirido',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: 'Debe ingresar un email válido',
                                        },
                                    }
                            )} />
                            {errors.email && <span>{`${errors.email.message}`}</span>}
                        </div>
                        
                        <div className="comments__form__item">
                            <label htmlFor="phone">Teléfono</label>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: false,
                                    validate: (value) => 
                                        !value ?
                                            true :
                                            isValidPhoneNumber(value),
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <PhoneInput
                                        value={value}
                                        onChange={onChange}
                                        defaultCountry="BO"
                                    />
                                )}
                            />
                            {errors.phone && <span>{`Debe ingresar un número de teléfono válido`}</span>}
                        </div>

                        <div className="comments__form__item">
                            <label htmlFor="comments">Comentarios:</label>
                            <textarea rows={3}  {...register("comments")} />
                        </div>

                        <div className="comments__form__requiredFields">
                            Los campos marcados con (*) son requeridos
                        </div>
                        <div className="comments__form_buttonContainer">
                            <input className="comments__form__button" type="submit"/>
                            <input className="comments__form__button" type="reset" onClick={handleReset} value="Limpiar"/>
                        </div>
                    </form>
                }
            </div>
            <figure className="comments__picture">
                <img src={legend} alt="" />
            </figure>
        </section>
    )
}

export default Comments;