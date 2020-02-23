import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

export default class ImageLoading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showGrid: false };
    }
    componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(60)).map((v, i) => {
            return { id: i, src: 'https://unsplash.it/400/400?image=' + (i + 1) };
        });
        that.setState({
            dataSource: items,
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                            <FastImage
                                style={styles.ImageLoading}
                                source={{
                                    uri: item.src,
                                    priority: FastImage.priority.high,
                                }}
                            />
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({

    ImageLoading: {
        height: 70,
        width: 100,
        marginRight: 10,
    },
});




//********************************************* iMAGE LOADING LIBRARY EXTRA TASK***************************************** */


/*Example of React Native Fast Image*/
// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     ScrollView,
//     TouchableOpacity,
//     Image,
//     FlatList,
// } from 'react-native';
// import FastImage from 'react-native-fast-image';

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { showGrid: false };
//     }
//     clickHandler() {
//         alert(this.state.showGrid);
//         //this.setState({showGrid:!this.state.showGrid});
//     }
//     componentDidMount() {
//         var that = this;
//         let items = Array.apply(null, Array(60)).map((v, i) => {
//             return { id: i, src: 'https://unsplash.it/400/400?image=' + (i + 1) };
//         });
//         that.setState({
//             dataSource: items,
//         });
//     }
//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 {!this.state.showGrid ? (
//                     <ScrollView style={{ flex: 1 }}>
//                         <View style={styles.container}>
//                             <Text style={styles.textLarge}>
//                                 Example of React native Fast Image
//               </Text>

//                             <View
//                                 style={{ padding: 16, flexDirection: 'row', marginTop: 20 }}>
//                                 <FastImage
//                                     style={styles.image}
//                                     source={{
//                                         uri: 'https://unsplash.it/400/400?image=1',
//                                         headers: { Authorization: '9876543210' },
//                                     }}
//                                 />
//                                 <Text style={{ flex: 1, textAlign: 'center' }}>
//                                     Simple FastImage {'\n'} source + header
//                 </Text>
//                             </View>

//                             <View
//                                 style={{ padding: 16, flexDirection: 'column', marginTop: 20 }}>
//                                 <Text style={{ textAlign: 'center' }}>
//                                     Different FastImage with different priority
//                 </Text>
//                                 <View
//                                     style={{
//                                         flexDirection: 'row',
//                                         marginTop: 20,
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                     }}>
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=2',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.low,
//                                         }}
//                                     />
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=3',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.normal,
//                                         }}
//                                     />
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=4',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.high,
//                                         }}
//                                     />
//                                 </View>
//                             </View>

//                             <View
//                                 style={{ padding: 16, flexDirection: 'column', marginTop: 20 }}>
//                                 <Text style={{ textAlign: 'center' }}>
//                                     Different FastImage with different resizeMode
//                 </Text>
//                                 <View
//                                     style={{
//                                         flexDirection: 'row',
//                                         marginTop: 20,
//                                         justifyContent: 'center',
//                                     }}>
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=5',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.normal,
//                                         }}
//                                         resizeMode={FastImage.resizeMode.contain}
//                                     />
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=5',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.normal,
//                                         }}
//                                         resizeMode={FastImage.resizeMode.cover}
//                                     />
//                                 </View>
//                                 <View
//                                     style={{
//                                         flexDirection: 'row',
//                                         marginTop: 10,
//                                         justifyContent: 'center',
//                                     }}>
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=5',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.normal,
//                                         }}
//                                         resizeMode={FastImage.resizeMode.cover}
//                                     />
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=5',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.normal,
//                                         }}
//                                         resizeMode={FastImage.resizeMode.center}
//                                     />
//                                 </View>
//                             </View>
//                             <View
//                                 style={{
//                                     padding: 16,
//                                     flexDirection: 'column',
//                                     marginTop: 20,
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                 }}>
//                                 <Text style={{ textAlign: 'center' }}>
//                                     Different FastImage with different Cache
//                 </Text>
//                                 <View
//                                     style={{
//                                         flexDirection: 'row',
//                                         marginTop: 20,
//                                         justifyContent: 'center',
//                                     }}>
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=6',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.normal,
//                                             cache: FastImage.cacheControl.immutable,
//                                         }}
//                                     />
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=7',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.normal,
//                                             cache: FastImage.cacheControl.web,
//                                         }}
//                                     />
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=8',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.normal,
//                                             cache: FastImage.cacheControl.cacheOnly,
//                                         }}
//                                     />
//                                 </View>
//                             </View>
//                             <View
//                                 style={{
//                                     padding: 16,
//                                     flexDirection: 'column',
//                                     marginTop: 20,
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                 }}>
//                                 <Text style={{ textAlign: 'center' }}>
//                                     Gif Support in React Native
//                 </Text>
//                                 <View style={{ flexDirection: 'row', marginTop: 20 }}>
//                                     <FastImage
//                                         style={styles.image}
//                                         source={{
//                                             uri:
//                                                 'https://cdn-images-1.medium.com/max/1600/1*-CY5bU4OqiJRox7G00sftw.gif',
//                                             headers: { Authorization: '9876543210' },
//                                             priority: FastImage.priority.normal,
//                                             cache: FastImage.cacheControl.immutable,
//                                         }}
//                                     />
//                                 </View>
//                             </View>
//                             <View
//                                 style={{
//                                     padding: 16,
//                                     flexDirection: 'column',
//                                     marginTop: 20,
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                 }}>
//                                 <Text style={{ textAlign: 'center' }}>
//                                     Controll the Corner Radius of Image
//                 </Text>
//                                 <View style={{ flexDirection: 'row', marginTop: 20 }}>
//                                     <FastImage
//                                         style={{
//                                             borderRadius: 50,
//                                             height: 100,
//                                             backgroundColor: '#ddd',
//                                             margin: 20,
//                                             width: 100,
//                                             flex: 0,
//                                         }}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=9',
//                                         }}
//                                     />
//                                     <FastImage
//                                         style={{
//                                             borderRadius: 50,
//                                             borderTopLeftRadius: 10,
//                                             borderBottomRightRadius: 10,
//                                             height: 100,
//                                             backgroundColor: '#ddd',
//                                             margin: 20,
//                                             flex: 1,
//                                         }}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=9',
//                                         }}
//                                     />
//                                 </View>
//                             </View>
//                             <View
//                                 style={{
//                                     padding: 16,
//                                     flexDirection: 'column',
//                                     marginTop: 20,
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                 }}>
//                                 <Text style={{ textAlign: 'center' }}>
//                                     Fast Image with Callback
//                 </Text>
//                                 <View
//                                     style={{
//                                         flexDirection: 'row',
//                                         marginTop: 20,
//                                         justifyContent: 'center',
//                                     }}>
//                                     <FastImage
//                                         style={{ height: 100, width: 100 }}
//                                         source={{
//                                             uri: 'https://unsplash.it/400/400?image=9',
//                                         }}
//                                         onLoadStart={e => console.log('Loading Start')}
//                                         onProgress={e =>
//                                             console.log(
//                                                 'Loading Progress ' +
//                                                 e.nativeEvent.loaded / e.nativeEvent.total
//                                             )
//                                         }
//                                         onLoad={e =>
//                                             console.log(
//                                                 'Loading Loaded ' + e.nativeEvent.width,
//                                                 e.nativeEvent.height
//                                             )
//                                         }
//                                         onLoadEnd={e => console.log('Loading Ended')}
//                                     />
//                                 </View>
//                             </View>
//                         </View>
//                     </ScrollView>
//                 ) : (
//                         <View style={{ flex: 1 }}>
//                             <FlatList
//                                 data={this.state.dataSource}
//                                 renderItem={({ item }) => (
//                                     <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
//                                         <FastImage
//                                             style={styles.imageThumbnail}
//                                             source={{
//                                                 uri: item.src,
//                                                 priority: FastImage.priority.high,
//                                             }}
//                                         />
//                                     </View>
//                                 )}
//                                 //Setting the number of column
//                                 numColumns={3}
//                                 keyExtractor={(item, index) => index}
//                             />
//                         </View>
//                     )}
//                 <TouchableOpacity
//                     activeOpacity={0.7}
//                     onPress={() => this.setState({ showGrid: !this.state.showGrid })}
//                     style={styles.TouchableOpacityStyle}>
//                     <Image
//                         source={{
//                             uri:
//                                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
//                         }}
//                         style={styles.FloatingButtonStyle}
//                     />
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         marginTop: 30,
//     },
//     textLarge: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     image: {
//         height: 70,
//         width: 100,
//         marginRight: 10,
//     },
//     TouchableOpacityStyle: {
//         position: 'absolute',
//         width: 50,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         right: 30,
//         bottom: 30,
//     },
//     imageThumbnail: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 100,
//     },
//     FloatingButtonStyle: {
//         resizeMode: 'contain',
//         width: 50,
//         height: 50,
//         //backgroundColor:'black'
//     },
// });




// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     View,
//     FlatList,
//     ActivityIndicator
// } from 'react-native';
// import FastImage from 'react-native-fast-image';

// export default class FastImageDemo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { loading: false };
//     }

//     componentDidMount() {
//         var that = this;
//         let items = Array.apply(null, Array(100)).map((v, i) => {
//             return { id: i, src: 'https://unsplash.it/400/400?image=' + (i + 1) };
//         });
//         that.setState({
//             dataSource: items,
//         });
//     }
//     render() {

//         return (

//             <View style={{ flex: 1 }}>
//                 <FlatList
//                     data={this.state.dataSource}
//                     renderItem={({ item }) => (
//                         <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
//                             <FastImage
//                                 style={styles.imageThumbnail}
//                                 source={{
//                                     uri: item.src,
//                                     priority: FastImage.priority.high,
//                                 }}
//                             // onLoadStart={() => { this.setState({ loading: true }) }}
//                             // onLoadEnd={() => { this.setState({ loading: false }) }}
//                             >
//                                 {/* <ActivityIndicator animating={this.state.loading} color="white" /> */}
//                             </FastImage>
//                         </View>
//                     )}
//                     //Setting the number of column
//                     numColumns={2}
//                     keyExtractor={(item, index) => index}
//                 />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     imageThumbnail: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 200,
//     },
// });




///************************************************DEEP LINKING HTTPS//.. ************************************************* */