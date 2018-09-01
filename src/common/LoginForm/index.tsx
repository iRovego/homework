import * as React from 'react';
import { Alert, Form, FormField, FormInput, Button } from 'elemental';

import styles from './style.less';

export interface IProps {  }
export interface IState {
	emailValue: string,
	emailValid: boolean,
	emailError: string,
	passwordValue: string,
	passwordValid: boolean,
	passwordError: string
}

class LoginForm extends React.Component<IProps, IState> {
	constructor(props: IState) {
		super(props);
		this.state = {
			emailValue: '',
			emailValid: false,
			emailError: '',
			passwordValue: '',
			passwordValid: false,
			passwordError: ''
		};

		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	private handleChangeEmail = (event) => {
		this.setState({emailValue: event.target.value});
	}

	private handleChangePassword = (event) => {
		this.setState({passwordValue: event.target.value});
	}

	private checkPassword = (passwordValue) => {
		if (passwordValue.length >= 6) {
			this.setState({
				passwordValid: true,
				passwordError: ''
			});
			return true;
		} else {
			this.setState({
				passwordValid: false,
				passwordError: 'Password is invalid'
			});
			return false;
		}
	}

	private checkEmail = (emailValue) => {
		let state = 1;

		/* Данную проверку добавил по причине того, что после символа "@" все русские символы заменяются на
		коды, которые в дальнейшем проходят проверку регулярным выражением. К сожалению не получилось придумать
		другого способа для исправления этой проблемы.  */
		if (/xn--/.test(emailValue)) {
			state = -1;
		}

		if (state == -1) {
			this.setState({
				emailValid: false,
				emailError: 'Email is invalid'
			});
			return false;
		} else {
			/* может это уже не по заданию, но я добавил некоторые условия
			первый, последний, а также симолы вокруг @ должны быть буквами или цифрами */
			const reg = /^[0-9a-z]*[0-9a-z-.]*[0-9a-z]\@[0-9a-z][0-9a-z-]+\.*[0-9a-z-.]*[0-9a-z]/i;

			if (!emailValue.replace(reg, '') && emailValue) {
				this.setState({
					emailValid: true,
					emailError: ''
				});
				return true;
			} else {
				this.setState({
					emailValid: false,
					emailError: 'Email is invalid'
				});
				return false;
			}
		}
	}

	private onSubmit = () => {
		let resultCheckPassword = this.checkPassword(this.state.passwordValue),
			resultCheckEmail = this.checkEmail(this.state.emailValue);

		if (resultCheckEmail && resultCheckPassword) {
			console.log("Success");
		}
	}

	public render() {
		let {emailError, passwordError} = this.state;
		let formErrors;

		if (emailError && passwordError) {
			formErrors = <Alert type="danger">{emailError}, {passwordError}</Alert>
		} else if (emailError || passwordError) {
			formErrors = <Alert type="danger">{emailError || passwordError}</Alert>
		} else {
			formErrors = ''
		}

		return (
			<div>
				{formErrors}
				<Form>
					<FormField label="Email address" htmlFor="basic-form-input-email">
						<FormInput
							autoFocus
							type="email"
							placeholder="Enter email"
							name="basic-form-input-email"
							className={emailError ? styles.invalid : ''}
							onChange={this.handleChangeEmail}
						/>
					</FormField>
					<FormField label="Password" htmlFor="basic-form-input-password">
						<FormInput
							type="password"
							placeholder="Enter password"
							name="basic-form-input-password"
							className={passwordError ? styles.invalid : ''}
							onChange={this.handleChangePassword}
						/>
					</FormField>
					<Button type="primary" onClick={this.onSubmit}>Log in</Button>
				</Form>
			</div>
		);
	}
}

export default LoginForm;