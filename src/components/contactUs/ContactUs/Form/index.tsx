import { useForm, SubmitHandler, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { ContactUsFormData } from '../../../../assets/types/ContactUsFormData';
import './Form.css';

interface FormProps {
    submitFormData: (data: ContactUsFormData) => void,
    resetFormData: () => void
}

function Form(props: FormProps) {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors }
    } = useForm<ContactUsFormData>()

    const handleSubmitForm: SubmitHandler<ContactUsFormData> = (data) => {
        props.submitFormData(data);
    };

    const handleReset = () => {
        props.resetFormData();
        reset();
    };

    return(
        <form onSubmit={handleSubmit(handleSubmitForm)} className="contactUs__form__form">
            <div className="contactUs__form__item">
                <label htmlFor="firstName">Nombre/s (*)</label>
                <input
                    id='firstName'
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
          
            <div className="contactUs__form__item">
                <label htmlFor="lastName">Apellido/s (*)</label>
                <input
                    id='lastName'
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

            <div className="contactUs__form__item">
                <label htmlFor="email">Email (*)</label>
                <input
                    id='email'
                    {...register("email", 
                        {
                            required: 'Su email es requirido',
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Debe ingresar un email válido',
                            },
                        }
                    )}
                />
                {errors.email && <span>{`${errors.email.message}`}</span>}
            </div>
                        
            <div className="contactUs__form__item">
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
                            id='phone'
                        />
                    )}
                />
                {errors.phone && <span>{`Debe ingresar un número de teléfono válido`}</span>}
            </div>

            <div className="contactUs__form__item">
                <label htmlFor="comments">Comentarios</label>
                <textarea rows={3}  {...register("comments")} id="comments"/>
            </div>

            <div className="contactUs__form__requiredFields">
                Los campos marcados con (*) son requeridos
            </div>
            <div className="contactUs__form_buttonContainer">
                <input className="contactUs__form__button" type="submit" value="Enviar"/>
                    <input className="contactUs__form__button" type="reset" onClick={handleReset} value="Limpiar"/>
            </div>
        </form>
    )
}

export default Form;