import React, { Component } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import logInCss from "./logInCss";
import { OutlinedTextField } from 'react-native-material-textfield';
import { forgatePassword } from './logInFireBase'

class ForgatePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: "",
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
                        <Text style={{ fontSize: 28, marginTop: '3%' }}>
                            Reset your Fundoo Account
                    </Text>
                        <Text style={{ fontSize: 18, marginTop: '5%' }}>
                            Enter your Email
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
                    </View>
                    <View style={{ justifyContent: "flex-end", alignItems: 'flex-end', padding: 45, marginTop: 110 }}>
                        <Button
                            title="       Next        "
                            onPress={this.submitForm}
                        />
                    </View>

                </View >
            </ScrollView>
        );
    }

    validateEmail = () => {
        let errors = {};
        var validform = true;

        if (!this.state.emailId) {
            validform = false;
            errors["emailId"] = "please Enter your Email:"
        }

        if (typeof this.state.emailId !== "undefined") {
            //regex used for email validation
            var pattern = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
            if (!pattern.test(this.state.emailId)) {
                validform = false;
                errors["emailId"] = "please Enter a valid email:";
            }
        }
        this.setState({
            errors: errors
        });
        return validform;
    }

    submitForm = () => {
        if (this.validateEmail()) {
            forgatePassword(this.state.emailId,
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
export default ForgatePassword;