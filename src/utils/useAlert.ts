import { Alert } from 'react-native'

interface AlertProps {
    title: string,
    message: string,
    buttons?: Array<any>
}

const useAlert = (params: AlertProps) => {
    Alert.alert(params.title, params.message, params.buttons);
}

export default useAlert