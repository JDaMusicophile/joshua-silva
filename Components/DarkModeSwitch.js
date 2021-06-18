import { useColorMode, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon} from '@chakra-ui/icons'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
            aria-label="Toggle Dark Switch"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
        />
    )

}

export default DarkModeSwitch