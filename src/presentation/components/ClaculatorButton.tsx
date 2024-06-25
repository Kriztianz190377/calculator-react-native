import { Pressable, Text } from "react-native"
import { colors, styles } from '../../config/app-them';



interface Props {
    label: string
    color?: string
    doubleSize?: boolean
    blackText?: boolean
}


export const ClaculatorButton = ({
    label, blackText=false,
    doubleSize = false,
    color = colors.darkGray
}: Props) => {

    return (
        <Pressable style={({ pressed }) => ({
            ...styles.button,
            backgroundColor: color,
            opacity: (pressed) ? 0.8 : 1,
            width: (doubleSize) ? 180 : 80,
           
        })}
        >
            <Text style={{
                ...styles.buttonText,
                color: (blackText) ? 'black': 'white'
                }}>{label}</Text>
        </Pressable >
    )
}
