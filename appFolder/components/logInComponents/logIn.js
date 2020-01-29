import React, { Component } from 'react';
import { Text, View, ScrollView, CheckBox } from 'react-native';
import logInCss from "./logInCss";
import { OutlinedTextField } from 'react-native-material-textfield';
import { Button } from 'react-native-elements';
import { toDashboard } from './logInFireBase'

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: "",
            passwordItem: "",
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
                        <Text style={{ fontSize: 28, marginTop: '2%' }}>
                            LogIn your Fundoo Account
                    </Text>
                        <Text style={{ fontSize: 18, marginTop: '4%' }}>
                            Enter your Details
                    </Text>
                    </View>
                    <View className="textViewContent" style={logInCss.textViewContent}>
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
                                value={this.state.passwordItem}
                                secureTextEntry={!this.state.showpassword}
                                onChangeText={(passwordItem) => this.setState({ passwordItem })}
                                error={this.state.errors.password}
                                errorColor='red'
                                helperText={this.state.errors.passwordItem}
                            />
                        </View>
                        <View className='showPassword' style={logInCss.showPassword}>
                            <CheckBox
                                value={this.state.showpassword}
                                onChange={() => this.setState({ showpassword: !this.state.showpassword ? true : false })} />
                            <Text style={{ marginTop: 5 }}>Show Password</Text>
                        </View>
                    </View>
                    <View>
                        <Button
                            title="Forgate Password"
                            type="clear"
                            onPress={() =>
                                this.props.navigation.navigate('ForgatePassword')}
                        />
                    </View>
                    <View className="linkButton" style={logInCss.linkButton}>
                        <View className="registerButton" style={logInCss.registerButton} >
                            <Button
                                title="     Create Account"
                                type="clear"
                                onPress={() =>
                                    this.props.navigation.navigate('SignUp')}
                            />
                        </View>
                        <View className="nextButton" style={logInCss.nextButton}>
                            <Button
                                title="         Next          "
                                onPress={this.submitForm}
                            />
                        </View>
                    </View>


                </View >
            </ScrollView>
        );
    }


    validation = () => {

        let errors = {};
        var validform = true;

        if (!this.state.emailId) {
            validform = false;
            errors["emailId"] = "Please enter your email-ID.";
        }

        if (typeof this.state.emailId !== "undefined") {
            //regex used for email validation
            var pattern = new RegExp(/^[a-zA-Z0-9-.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
            if (!pattern.test(this.state.emailId)) {
                validform = false;
                errors["emailId"] = "Please enter valid emailID.";
            }
        }

        if (!this.state.passwordItem) {
            validform = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof this.state.passwordItem !== "undefined") {
            if (!this.state.passwordItem.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                validform = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return validform;
    }

    submitForm = () => {
        if (this.validation()) {
            // this.setState({
            //     [this.props.name]: this.props.value,
            //     [this.props.formvalid]: !this.props.formvalid
            // })
            toDashboard(this.state.emailId, this.state.passwordItem,
                () => {
                    this.props.navigation.navigate('Notes')
                },
                (errors) => {
                    this.setState({
                        errors: errors
                    })
                });


            //console.warn(this.state.emailId + '   : ' + this.state.passwordItem)
        }
    }
}
export default LogIn;