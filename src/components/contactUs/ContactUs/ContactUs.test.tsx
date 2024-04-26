import { expect, test, afterEach } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactUs from './';

afterEach(() => {
    cleanup()
})

test('"ContactUs" form is rendered', () => {
    render(<ContactUs/>);
    const firstNameInput = screen.getByLabelText('Nombre/s (*)');
    const lastNameInput = screen.getByLabelText('Apellido/s (*)');
    const emailInput = screen.getByLabelText('Email (*)');
    const phoneInput = screen.getByLabelText('Teléfono');
    const commentsTextarea = screen.getByLabelText('Comentarios');
    const submitButton = screen.getByText('Enviar');
    const resetButton = screen.getByText('Limpiar');
    expect(firstNameInput).toBeDefined();
    expect(lastNameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(phoneInput).toBeDefined();
    expect(commentsTextarea).toBeDefined();
    expect(submitButton).toBeDefined();
    expect(resetButton).toBeDefined();
});

test('when user submits required values, then comment is saved', async () => {
    const {container} = render(<ContactUs/>);
    const user = userEvent.setup()
    const firstNameInput: HTMLInputElement = screen.getByLabelText('Nombre/s (*)');
    const lastNameInput: HTMLInputElement = screen.getByLabelText('Apellido/s (*)');
    const emailInput: HTMLInputElement = screen.getByLabelText('Email (*)');
    const submitButton: HTMLInputElement = screen.getByText('Enviar');
    firstNameInput.focus();
    await user.keyboard('Juan');
    lastNameInput.focus();
    await user.keyboard('Perez');
    emailInput.focus();
    await user.keyboard('juanPerez@gmail.com');
    await user.click(submitButton);
    const title = container.querySelector('.contactUs__form__title');
    const message = container.querySelector('.contactUs__form__success__message');
    const icon = container.querySelector('.contactUs__form__success__icon');
    const logo = container.querySelector('.contactUs__form__success__logo');
    const comeBackButton = screen.getByText('Volver');
    expect(title?.textContent).to.be.equals('!Sus datos fueron recibidos con éxito!');
    expect(message?.textContent).to.be.equals('Estimado/a Juan Perez, gracias por contactarse con nosotros. Nos pondremos en contacto con usted a la brevedad posible');
    expect(icon?.classList[0]).to.be.eql('remixicon');
    expect(logo).toBeDefined();
    await user.click(comeBackButton);
    const firstNameIpt = screen.getByLabelText('Nombre/s (*)');
    const lastNameIpt = screen.getByLabelText('Apellido/s (*)');
    const emailIpt = screen.getByLabelText('Email (*)');
    const submitBtn = screen.getByText('Enviar');
    expect(firstNameIpt).toBeDefined();
    expect(lastNameIpt).toBeDefined();
    expect(emailIpt).toBeDefined();
    expect(submitBtn).toBeDefined();
});