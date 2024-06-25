import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../config/app-them'
import { ClaculatorButton } from '../components/ClaculatorButton'

export const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>

                <Text style={styles.mainResult}>1500</Text>
                <Text style={styles.subResult}>15</Text>

            </View>

            <View style={styles.row}>
                <ClaculatorButton label='C'    blackText color={colors.lightGray}  />
                <ClaculatorButton label='+/-'  blackText color={colors.lightGray}  />
                <ClaculatorButton label='del'  blackText color={colors.lightGray}  />
                <ClaculatorButton label='÷' color={colors.orange} />
            </View>
            <View style={styles.row}>
                <ClaculatorButton label='7'    />
                <ClaculatorButton label='8'    />
                <ClaculatorButton label='9'    />
                <ClaculatorButton label='X'  color={colors.orange} />
            </View>
            <View style={styles.row}>
                <ClaculatorButton label='4'    />
                <ClaculatorButton label='5'    />
                <ClaculatorButton label='6'    />
                <ClaculatorButton label='-' color={colors.orange} />
            </View>
            <View style={styles.row}>
                <ClaculatorButton label='1'    />
                <ClaculatorButton label='2'    />
                <ClaculatorButton label='3'    />
                <ClaculatorButton label='+' color={colors.orange} />
            </View>
            <View style={styles.row}>
                <ClaculatorButton label='0' doubleSize   />
                <ClaculatorButton label='.'        />
                <ClaculatorButton label='=' color={colors.orange} />
            </View>
        </View>
    )
}
