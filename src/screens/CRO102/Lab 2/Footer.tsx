import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type FooterProps = {
    timeUpdate: string,
    backgroundColor: string
}

const Footer: React.FC<FooterProps> = memo(props => {
    const { timeUpdate, backgroundColor } = props;
    return (
        <View style={containerStyle({ height: 100, backgroundColor: backgroundColor, alignItems: 'center', justifyContent: 'center' })}>
                <Text style={styles.text}>Thời gian bạn cập nhật thông tin: {timeUpdate}</Text>
        </View>
    );
});

const styles = StyleSheet.create(
    {
        text: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center'
        }
    }
)
const containerStyle = (props: ViewStyle) => ({
    ...props,
})
export default Footer;
