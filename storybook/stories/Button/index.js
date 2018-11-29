import React from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, View} from 'react-native';

export default function App(props) {

    return (
        <View style={style.container}>
            <Button onPress={props.onClick} title={props.type ? "Please wait..." : props.title} color={props.color}
                    type={props.type}/>
        </View>
    );

}

Button.defaultProps = {
    onClick: () => {
    },
};

Button.propTypes = {
    onClick: PropTypes.func,
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
