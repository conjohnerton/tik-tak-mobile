import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

const SigninScreen = ({navigation}) => {
	// TODO: Verify that username and password are entered on AuthForm
	const {state, signin } = useContext(AuthContext);

	return <View>
		<AuthForm 
			headerText="Log into Tik Tak"
			errorMessage={state.errorMessage}
			onSubmit={signin}
			submitButtonText="Log in"
		/>
		<NavLink 
			navigateTo="Signup" 
			linkText="Don't have an account yet? Sign up here."
		/>
	</View>
};

SigninScreen.navigationOptions = {
	header: null
};

const styles = StyleSheet.create({
});

export default SigninScreen;