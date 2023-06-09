import React from 'react'
import { View, Text , StyleSheet} from 'react-native'



export const VerticalBox = (props) => {
    return (
        <View style={{paddingHorizontal:props.style}}>
        <Text style={{color:'green'}}>khlklkjhkl</Text>
        </View>
    )
}

export const PaddingBox = (props) => {
    return (
        <View style={{height:props.style}}>
        
        </View>
    )
}



export  const Box = (props) => {
   {
        return (
            <View style={[styles.box, props.style]}>
             
            </View>
        );
    }
}

export  class Center extends React.Component {
    render() {
        return (
            <View style={[styles.center, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

export  class Left extends React.Component {
    render() {
        return (
            <View style={[styles.left, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

export  class Right extends React.Component {
    render() {
        return (
            <View style={[styles.right, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}



const styles = StyleSheet.create({
    box: {
        paddingHorizontal:20,
        backgroundColor:"green",height:40
    },
    center:{
        alignSelf:"center",
        alignItems:"center",
    },
    left:{
        alignSelf:"flex-start",
        alignItems:"center",
    },
    right:{
        alignSelf:"flex-end",
        alignItems:"center",
    },
});
