import React from 'react'
import { StyleSheet, Text } from 'react-native'

type Props = {
    children: React.ReactNode
}

const DefaultText = ({children}: Props) => {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans'
    }
})

export default DefaultText
