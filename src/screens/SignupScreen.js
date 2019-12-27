import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({navigation}) => {
	// TODO: Verify that username and password are entered on AuthForm
	const {state, signup } = useContext(AuthContext);

	return <View>
		<AuthForm 
			headerText="Sign up for Tik Tak"
			errorMessage={state.errorMessage}
			onSubmit={signup}
			submitButtonText="Sign up"
		/>
		<NavLink 
			navigateTo="Signin" 
			linkText="Have an account already? Sign in here."
		/>
	</View>
};

const styles = StyleSheet.create({
});

export default SignupScreen;