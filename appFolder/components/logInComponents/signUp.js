import React, { Component } from 'react';
import { Text, View, ScrollView, Button, CheckBox } from 'react-native';
import logInCss from "./logInCss";
import { OutlinedTextField } from 'react-native-material-textfield';
import { resisterUser } from './logInFireBase'


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            confirmPass: '',
            showpassword: false,
            errors: {},
        };
    }

    render() {
        return (
            <ScrollView>
                <View className="signupfullView" style={logInCss.signupfullView}>
                    <View className="initialView" style={logInCss.initialView}>
                        <Text className='mainHeader' style={logInCss.mainHeader}>
                            <Text style={{ color: '#4325F4', fontSize: 35 }}>F</Text>
                            <Text style={{ color: '#DB4437', fontSize: 35 }}>u</Text>
                            <Text style={{ color: '#F4B400', fontSize: 35 }}>n</Text>
                            <Text style={{ color: '#4355F4', fontSize: 35 }}>d</Text>
                            <Text style={{ color: '#0F9D58', fontSize: 35 }}>o</Text>
                            <Text style={{ color: '#DB4437', fontSize: 35 }}>o</Text>
                        </Text>
                        <Text style={{ fontSize: 32, marginTop: '2%' }}>
                            Create a Fundoo Account
                    </Text>
                        <Text style={{ fontSize: 18, marginTop: '3%' }}>
                            Enter your Details
                    </Text>
                    </View>
                    <View className="textViewContent" style={logInCss.textViewContent}>
                        <View className="textView" style={logInCss.textView}>
                            <OutlinedTextField
                                label='First Name'
                                value={this.state.firstName}
                                onChangeText={(firstName) => this.setState({ firstName })}
                                error={this.state.errors.firstName}
                                errorColor='red'
                                helperText={this.state.errors.firstName}
                            />
                        </View>
                        <View className="textView" style={logInCss.textView}>
                            <OutlinedTextField
                                label='Last Name'
                                value={this.state.lastName}
                                onChangeText={(lastName) => this.setState({ lastName })}
                                error={this.state.errors.lastName}
                                errorColor='red'
                                helperText={this.state.errors.lastName}
                            />
                        </View>
                        <View className="textView" style={logInCss.textView}>
                            <OutlinedTextField
                                label='Email-Id'
                                value={this.state.emailId}
                                onChangeText={(emailId) => this.setState({ emailId })}
                                error={this.state.errors.emailId}
                                errorColor='red'
                                helperText={this.state.errors.emailId}
                            />
                        </View>
                        <View className="textView" style={logInCss.textView}>
                            <OutlinedTextField
                                label='Password'
                                value={this.state.password}
                                secureTextEntry={!this.state.showpassword}
                                onChangeText={(password) => this.setState({ password })}
                                error={this.state.errors.password}
                                errorColor='red'
                                helperText={this.state.errors.password}
                            />
                        </View>
                        <View className="textView" style={logInCss.textView}>
                            <OutlinedTextField
                                label='Confirm Password'
                                value={this.state.confirmPass}
                                secureTextEntry={!this.state.showpassword}
                                onChangeText={(confirmPass) => this.setState({ confirmPass })}
                                error={this.state.errors.confirmPassword}
                                errorColor='red'
                                helperText={this.state.errors.confirmPass}
                            />
                        </View>
                        <View className='showPassword' style={logInCss.showPassword}>
                            <CheckBox
                                value={this.state.showpassword}
                                onChange={() => this.setState({ showpassword: !this.state.showpassword ? true : false })}
                            />
                            <Text style={{ marginTop: 5 }}>Show Password</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "flex-end", alignItems: 'flex-end', padding: 45 }}>
                        <Button
                            title="       Next        "
                            onPress={this.register}
                        />
                    </View>

                </View >
            </ScrollView>
        );
    }

    validation = () => {

        let errors = {};
        var validform = true;

        if (!this.state.firstName) {
            validform = false;
            errors["firstName"] = "*Please enter your First Name.";
        }

        if (!this.state.lastName) {
            validform = false;
            errors["lastName"] = "*Please enter your Last Name.";
        }

        if (!this.state.emailId) {
            validform = false;
            errors["emailId"] = "*Please enter your emailId.";
        }

        if (typeof this.state.emailId !== "undefined") {
            //regex used for email validation
            var pattern = new RegExp(/^[a-zA-Z0-9-.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
            if (!pattern.test(this.state.emailId)) {
                validform = false;
                errors["emailId"] = "*Please enter valid email in formate of number letter and specail charecter";
            }
        }

        if (!this.state.password) {
            validform = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof this.state.password !== "undefined") {
            if (!this.state.password.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                validform = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (!this.state.confirmPass) {
            validform = false;
            errors["confirmPassword"] = "*Please confirm your password.";
        }

        if (typeof this.state.confirmPass !== "undefined") {
            if (this.state.confirmPass !== this.state.password) {
                validform = false;
                errors["confirmPassword"] = "*Password does not match.";
            }
        }

        this.setState({
            errors: errors
        });
        //console.log("hfskjidghfdosigfhdfj");

        return validform;
    }

    register = () => {
        if (this.validation()) {
            resisterUser(this.state.firstName, this.state.lastName, this.state.emailId, this.state.password,
                () => {
                    this.props.navigation.navigate('LogIn')
                },
                (errors) => {
                    this.setState({
                        errors: errors
                    })
                });
        }
    }
}
export default SignUp;